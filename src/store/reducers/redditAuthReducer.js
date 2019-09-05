import { redditAuthActionTypes } from "../actions/action-types";

const { __AUTHENTICATE_APP__ } = redditAuthActionTypes;
const initialState = {
  token: "",
  isLoading: false,
  error: null
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case __AUTHENTICATE_APP__.REQUEST:
      return {
        ...state,
        isLoading: true
      };
    case __AUTHENTICATE_APP__.SUCCESS:
      return {
        ...state,
        token: payload.access_token,
        isLoading: false
      };
    case __AUTHENTICATE_APP__.FAILURE:
      return {
        ...state,
        error: payload.error,
        isLoading: false
      };

    default:
      return state;
  }
};
