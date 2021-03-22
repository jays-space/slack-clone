import firebase from "firebase";
import ReduxSagaFirebase from "redux-saga-firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAa5z6cpMsRcwo4HsnDCAiwsimQf1oK48k",
  authDomain: "slack-clone-890f7.firebaseapp.com",
  projectId: "slack-clone-890f7",
  storageBucket: "slack-clone-890f7.appspot.com",
  messagingSenderId: "823327003005",
  appId: "1:823327003005:web:37aed96489ab270408bc14",
};

//connect app to firebase using firebaseConfig
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const googleProvider = new firebase.auth.GoogleAuthProvider();
const rsf = new ReduxSagaFirebase(firebaseApp);

//METHODS
export const getSnapshotFromUserAuth = async (userAuth) => {
  const userProfileRef = db.collection("users").doc(userAuth.uid);
  const snapShot = await userProfileRef.get();

  if (!snapShot.exists) {
    alert("firebase.utils - signInAdminUserProfile: snapshot does not exist");
    return;
  }
  // console.log(snapShot.data());
  return snapShot.data();
};

export const createUserProfile = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userProfileRef = db.collection("users").doc(userAuth.uid);
  const userProfileSnapShot = await userProfileRef.get();

  if (!userProfileSnapShot.exists) {
    const createdAt = new Date();
    const {
      email,
      emailVerified,
      phoneNumber,
      displayName,
      photoURL,
      refreshToken,
      metadata,
    } = userAuth;

    try {
      await userProfileRef.set({
        email,
        emailVerified,
        phoneNumber,
        displayName,
        photoURL,
        refreshToken,
        createdAt,
        creationTime: metadata.creationTime,
        lastSignInTime: metadata.lastSignInTime,
        ...additionalData,
      });
    } catch (error) {
      alert("error creating user: ", error.message);
    }
  } else {
    const { metadata } = userAuth;

    try {
      await userProfileRef.update({
        lastSignInTime: metadata.lastSignInTime,
        ...additionalData,
      });
    } catch (error) {
      alert("error creating updating last sign in time: ", error.message);
    }
  }

  return userProfileRef;
};

export const transformCollectionDataToMap = (collectionData) => {
  const transformedCollection = collectionData.docs.map((doc) => {
    const { channelName } = doc.data();

    return {
      id: doc.id,
      channelName: channelName,
    };
  });

  return transformedCollection;
};

export const transformMessagesDataToMap = (collectionData) => {
  const transformedCollection = collectionData.docs.map((doc) => {
    return {
      id: doc.id,
      ...doc.data(),
    };
  });

  return transformedCollection;
};

export { db, auth, googleProvider, rsf };
