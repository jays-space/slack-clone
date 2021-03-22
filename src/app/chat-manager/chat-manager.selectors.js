import { createSelector } from "reselect";

const selectChat = (state) => state.chat;

export const selectChannels = createSelector(
  [selectChat],
  (chat) => chat.channels
);

export const selectError = createSelector([selectChat], (chat) => chat.error);

export const selectChannelID = createSelector(
  [selectChat],
  (chat) => chat.currentChannelID
);

export const selectChannelDetails = createSelector(
  [selectChat],
  (chat) => chat.currentChannelDetails
);

export const selectChannelMessages = createSelector(
  [selectChat],
  (chat) => chat.currentChannelMessages
);

export const selectLoading = createSelector(
  [selectChat],
  (chat) => chat.loading
);
