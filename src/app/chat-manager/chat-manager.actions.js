import chatManagerActionTypes from "./chat-manager.types";

export const addChannelStart = (newChannelDetails) => ({
  type: chatManagerActionTypes.ADD_CHANNEL_START,
  payload: newChannelDetails,
});

export const addChannelSuccess = () => ({
  type: chatManagerActionTypes.ADD_CHANNEL_SUCCESS,
});

export const addChannelFailure = (errorMessage) => ({
  type: chatManagerActionTypes.ADD_CHANNEL_FAILURE,
  payload: errorMessage,
});

export const getChannelsCollectionsStart = () => ({
  type: chatManagerActionTypes.GET_CHANNELS_COLLECTION_START,
});

export const getChannelsCollectionsSuccess = (channelsCollection) => ({
  type: chatManagerActionTypes.GET_CHANNELS_COLLECTION_SUCCESS,
  payload: channelsCollection,
});

export const getChannelsCollectionsFailure = (errorMessage) => ({
  type: chatManagerActionTypes.GET_CHANNELS_COLLECTION_FAILURE,
  payload: errorMessage,
});

export const setChannelID = (channelID) => ({
  type: chatManagerActionTypes.SET_CHANNEL_ID,
  payload: channelID,
});

export const sendMessageStart = (message) => ({
  type: chatManagerActionTypes.SEND_MESSAGE_START,
  payload: message,
});

export const sendMessageSuccess = () => ({
  type: chatManagerActionTypes.SEND_MESSAGE_SUCCESS,
});

export const sendMessageFailure = (errorMessage) => ({
  type: chatManagerActionTypes.SEND_MESSAGE_FAILURE,
  payload: errorMessage,
});

export const getChannelDetailsStart = (channelID) => ({
  type: chatManagerActionTypes.GET_CHANNEL_DETAILS_START,
  payload: channelID,
});

export const getChannelDetailsSuccess = (channelDetails) => ({
  type: chatManagerActionTypes.GET_CHANNEL_DETAILS_SUCCESS,
  payload: channelDetails,
});

export const getChannelDetailsFailure = (errorMessage) => ({
  type: chatManagerActionTypes.GET_CHANNEL_DETAILS_FAILURE,
  payload: errorMessage,
});

export const getMessagesStart = (channelID) => ({
  type: chatManagerActionTypes.GET_MESSAGES_START,
  payload: channelID,
});

export const getMessagesSuccess = (messages) => ({
  type: chatManagerActionTypes.GET_MESSAGES_SUCCESS,
  payload: messages,
});

export const getMessagesFailure = (errorMessage) => ({
  type: chatManagerActionTypes.GET_MESSAGES_FAILURE,
  payload: errorMessage,
});
