import sessionActionTypes from "./session.types";

export const authenticationStart = () => ({
  type: sessionActionTypes.AUTHENTICATION_START,
});

export const authenticationSuccess = () => ({
  type: sessionActionTypes.AUTHENTICATION_SUCCESS,
});

export const authenticationFailure = (errorMessage) => ({
  type: sessionActionTypes.AUTHENTICATION_FAILURE,
  payload: errorMessage,
});

export const signInStart = () => ({
  type: sessionActionTypes.SIGN_IN_START,
});

export const signInSuccess = (currentUser) => ({
  type: sessionActionTypes.SIGN_IN_SUCCESS,
  payload: currentUser,
});

export const signInFailure = (errorMessage) => ({
  type: sessionActionTypes.SIGN_IN_FAILURE,
  payload: errorMessage,
});

export const googleSignInStart = () => ({
  type: sessionActionTypes.GOOGLE_SIGN_IN_START,
});

export const googleSignInSuccess = () => ({
  type: sessionActionTypes.GOOGLE_SIGN_IN_SUCCESS,
});

export const googleSignInFailure = (errorMessage) => ({
  type: sessionActionTypes.GOOGLE_SIGN_IN_FAILURE,
  payload: errorMessage,
});

export const signOutStart = () => ({
  type: sessionActionTypes.SIGN_OUT_START,
});

export const signOutSuccess = (data) => ({
  type: sessionActionTypes.SIGN_OUT_SUCCESS,
  payload: data,
});

export const signOutFailure = (errorMessage) => ({
  type: sessionActionTypes.SIGN_OUT_FAILURE,
  payload: errorMessage,
});

export const LoggedOut = () => ({
  type: sessionActionTypes.LOGGED_OUT,
});
