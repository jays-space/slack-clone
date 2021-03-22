import chatManagerActionTypes from "./chat-manager.types";

const INITIAL_STATE = {
  loading: true,
  channels: [],
  currentChannelID: null,
  currentChannelDetails: null,
  currentChannelMessages: [],
  error: null,
};

const chatManagerReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case chatManagerActionTypes.ADD_CHANNEL_SUCCESS:
      return {
        ...state,
        error: null,
      };

    case chatManagerActionTypes.GET_CHANNELS_COLLECTION_SUCCESS:
      return {
        ...state,
        channels: action.payload,
        error: null,
      };

    case chatManagerActionTypes.SEND_MESSAGE_SUCCESS:
      return {
        ...state,
        error: null,
      };

    case chatManagerActionTypes.GET_CHANNEL_DETAILS_START:
      return {
        ...state,
        loading: true,
      };

    case chatManagerActionTypes.GET_CHANNEL_DETAILS_SUCCESS:
      return {
        ...state,
        loading: false,
        currentChannelDetails: action.payload,
        error: null,
      };

    case chatManagerActionTypes.GET_MESSAGES_START:
      return {
        ...state,
        loading: true,
      };

    case chatManagerActionTypes.GET_MESSAGES_SUCCESS:
      return {
        ...state,
        loading: false,
        currentChannelMessages: action.payload,
        error: null,
      };

    case chatManagerActionTypes.ADD_CHANNEL_FAILURE:
    case chatManagerActionTypes.GET_CHANNELS_COLLECTION_FAILURE:
    case chatManagerActionTypes.SEND_MESSAGE_FAILURE:
    case chatManagerActionTypes.GET_CHANNEL_DETAILS_FAILURE:
    case chatManagerActionTypes.GET_MESSAGES_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case chatManagerActionTypes.SET_CHANNEL_ID:
      return {
        ...state,
        currentChannelID: action.payload,
      };

    default:
      return {
        ...state,
      };
  }
};

export default chatManagerReducer;
