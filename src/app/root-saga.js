import { call, all } from "redux-saga/effects";

//SAGAS
import { chatManagerSagas } from "./chat-manager/chat-manager.sagas";
import { sessionSagas } from "./session/session.sagas";

export default function* rootSaga() {
  yield all([call(chatManagerSagas), call(sessionSagas)]);
}
