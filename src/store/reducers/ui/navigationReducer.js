import { navigationActionTypes } from "../../actions/action-types";

const { TOGGLE_NAVIGATION_BAR } = navigationActionTypes;

const initialState = {
  isActive: false
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case TOGGLE_NAVIGATION_BAR:
      return {
        isActive: !state.isActive
      };
    default:
      return state;
  }
};
