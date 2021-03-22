import { takeLatest, put, call, all, fork, take } from "redux-saga/effects";

//FIREBASE
import firebase from "firebase";
import {
  db,
  rsf,
  transformCollectionDataToMap,
  transformMessagesDataToMap,
} from "../../services/firebase/firebase";

//ACTIONS
import {
  addChannelSuccess,
  addChannelFailure,
  getChannelsCollectionsSuccess,
  getChannelsCollectionsFailure,
  sendMessageSuccess,
  sendMessageFailure,
  getChannelDetailsSuccess,
  getChannelDetailsFailure,
  getMessagesStart,
  getMessagesSuccess,
  getMessagesFailure,
} from "./chat-manager.actions";

import chatManagerActionTypes from "./chat-manager.types";

export function* addChannel({ payload }) {
  const channelName = payload;
  const collectionRef = db.collection("channels");

  try {
    yield collectionRef.add({
      channelName: channelName,
    });

    yield put(addChannelSuccess());
  } catch (error) {
    const errorMsg = `Error adding ${channelName} channel: ${error.message}`;
    yield put(addChannelFailure(errorMsg));
  }
}

export function* getChannelsCollection() {
  //   const collectionRef = db.collection("channels");
  //   const channel = eventChannel((emit) => collectionRef.onSnapshot(emit));

  //   try {
  //     while (true) {
  //       const collectionSnapShot = yield take(channel);
  //       yield put(
  //         getChannelsCollectionsSuccess(
  //           transformCollectionDataToMap(collectionSnapShot)
  //         )
  //       );
  //     }
  //   } catch (error) {
  //     const errorMsg = error.message;
  //     yield put(getChannelsCollectionsFailure(errorMsg));
  //   }

  yield fork(rsf.firestore.syncCollection, "channels", {
    successActionCreator: getChannelsCollectionsSuccess,
    failureActionCreator: getChannelsCollectionsFailure,
    transform: (payload) => transformCollectionDataToMap(payload),
  });
}

export function* sendMessage({
  payload: { message, channelID, displayName, photoURL, userID },
}) {
  const messageRef = db
    .collection("channels")
    .doc(channelID)
    .collection("messages");

  try {
    yield messageRef.add({
      channelID: channelID,
      senderID: "",
      displayName: displayName,
      photoURL: photoURL,
      message: message,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    yield put(sendMessageSuccess());
  } catch (error) {
    const errorMsg = `Error message: ${error.message}`;
    yield put(sendMessageFailure(errorMsg));
  }
}

export function* getChannelDetails({ payload }) {
  const channelID = payload;
  const channelRef = db.collection("channels").doc(channelID);

  try {
    const channelDetails = yield channelRef.get();
    yield put(getChannelDetailsSuccess(channelDetails.data()));
  } catch (error) {
    const errorMsg = `Unable to get channel details: ${error.message}`;
    yield put(getChannelDetailsFailure(errorMsg));
  }

  yield put(getMessagesStart(channelID));
  const messagesRef = channelRef
    .collection("messages")
    .orderBy("timestamp", "asc");

  yield fork(rsf.firestore.syncCollection, messagesRef, {
    successActionCreator: getMessagesSuccess,
    failureActionCreator: getMessagesFailure,
    transform: (payload) => transformMessagesDataToMap(payload),
  });
}

export function* onAddChannel() {
  yield takeLatest(chatManagerActionTypes.ADD_CHANNEL_START, addChannel);
}

export function* onGetChannelsCollection() {
  yield takeLatest(
    chatManagerActionTypes.GET_CHANNELS_COLLECTION_START,
    getChannelsCollection
  );
}

export function* onSendMessage() {
  yield takeLatest(chatManagerActionTypes.SEND_MESSAGE_START, sendMessage);
}

export function* onGetChannelDetails() {
  yield takeLatest(
    chatManagerActionTypes.GET_CHANNEL_DETAILS_START,
    getChannelDetails
  );
}

export function* chatManagerSagas() {
  yield all([
    call(onAddChannel),
    call(onGetChannelsCollection),
    call(onSendMessage),
    call(onGetChannelDetails),
  ]);
}
