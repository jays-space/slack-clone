import {
  takeLatest,
  take,
  put,
  call,
  all,
  fork,
  cancel,
} from "redux-saga/effects";

//FIREBASE
import {
  rsf,
  googleProvider,
  createUserProfile,
} from "../../services/firebase/firebase";

import sessionActionTypes from "./session.types";

//ACTIONS
import {
  authenticationFailure,
  authenticationSuccess,
  signInStart,
  signInSuccess,
  signInFailure,
  signOutSuccess,
  signOutFailure,
  LoggedOut,
  googleSignInSuccess,
  googleSignInFailure,
} from "./session.actions";

export function* googleSignIn() {
  try {
    yield call(rsf.auth.signInWithPopup, googleProvider);

    yield put(googleSignInSuccess());
    const authChannel = yield call(rsf.auth.channel);
    const { user } = yield take(authChannel);

    yield call(signIn, user);
  } catch (error) {
    const errorMsg = `Cannot launch Google popup: ${error.message}`;
    yield put(googleSignInFailure(errorMsg));
  }
}

export function* signIn(user) {
  yield put(signInStart());
  const userProfileRef = yield call(createUserProfile, user);
  if (userProfileRef) {
    // Sign user in
    yield fork(rsf.firestore.syncDocument, userProfileRef, {
      successActionCreator: signInSuccess,
      failureActionCreator: signInFailure,
      transform: (payload) => payload.data(),
    });

    // try {
    //   const userProfile = yield call(getSnapshotFromUserAuth, user);
    //   yield put(signInSuccess(userProfile));
    // } catch (error) {
    //   const errorMsg = `Cannot sign in: ${error.message}`;
    //   yield put(signInFailure(errorMsg));
    // }
  }
}

export function* isAuthenticated() {
  // Redux Saga: Firebase Auth Channel
  try {
    // Auth Channel (Events Emit On Login And Logout)
    const authChannel = yield call(rsf.auth.channel);

    while (true) {
      const { user } = yield take(authChannel);

      // Check If User Exists
      if (user) {
        yield put(authenticationSuccess());
        // Redux: Check user profile exists
        yield call(signIn, user);
      } else {
        // Redux: Sign out Success. User has terminated session
        yield put(LoggedOut());
        return;
      }

      //Wait for Logout and cancel loop
      yield take(sessionActionTypes.SIGN_OUT_START);
      yield cancel(user);
    }
  } catch (error) {
    const errorMsg = `Cannot authenticate user: ${error.message}`;
    yield put(authenticationFailure(errorMsg));
  }
}

export function* signOut() {
  try {
    //resolves data to undefined
    const data = yield call(rsf.auth.signOut);
    yield put(signOutSuccess(data));
  } catch (error) {
    const errorMsg = `Cannot sign out user: ${error.message}`;
    yield put(signOutFailure(errorMsg));
  }
}

export function* onAuthStart() {
  yield takeLatest(sessionActionTypes.AUTHENTICATION_START, isAuthenticated);
}

export function* onGoogleSignIn() {
  yield takeLatest(sessionActionTypes.GOOGLE_SIGN_IN_START, googleSignIn);
}

export function* onSignOut() {
  yield takeLatest(sessionActionTypes.SIGN_OUT_START, signOut);
}

export function* sessionSagas() {
  yield all([call(onAuthStart), call(onSignOut), call(onGoogleSignIn)]);
}
