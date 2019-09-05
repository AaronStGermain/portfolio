import { navigationActionTypes } from "../action-types";

const { TOGGLE_NAVIGATION_BAR } = navigationActionTypes;

export const toggleNavigationBar = payload => ({
  type: TOGGLE_NAVIGATION_BAR,
  payload
});
