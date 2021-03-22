import sessionActionTypes from "./session.types";

const INITIAL_STATE = {
  isLoading: true,
  currentUser: null,
  error: "",
};

const sessionReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case sessionActionTypes.AUTHENTICATION_START:
    case sessionActionTypes.SIGN_IN_START:
    case sessionActionTypes.SIGN_OUT_START:
      return {
        ...state,
        isLoading: true,
      };

    case sessionActionTypes.SIGN_IN_SUCCESS:
      return {
        ...state,
        currentUser: action.payload,
        isLoading: false,
        error: "",
      };

    case sessionActionTypes.LOGGED_OUT:
    case sessionActionTypes.SIGN_OUT_SUCCESS:
      return {
        ...INITIAL_STATE,
        isLoading: false,
      };

    case sessionActionTypes.SIGN_IN_FAILURE:
    case sessionActionTypes.AUTHENTICATION_FAILURE:
    case sessionActionTypes.SIGN_OUT_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };

    default:
      return {
        ...state,
      };
  }
};

export default sessionReducer;
