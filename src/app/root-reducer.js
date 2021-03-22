import { combineReducers } from "redux";

//REDUCERS
import chatManagerReducer from "./chat-manager/chat-manager.reducer";
import sessionReducer from "./session/session.reducer";

export default combineReducers({
  chat: chatManagerReducer,
  session: sessionReducer,
});
