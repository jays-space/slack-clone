import { createSelector } from "reselect";

const selectSession = (state) => state.session;

export const selectCurrentUser = createSelector(
  [selectSession],
  (session) => session.currentUser
);

export const selectErrorMessage = createSelector(
  [selectSession],
  (session) => session.error
);

export const selectIsLoading = createSelector(
  [selectSession],
  (session) => session.isLoading
);
