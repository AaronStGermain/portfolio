import {
  CREATE_WINDOW,
  DELETE_WINDOW,
  MINIMIZE_WINDOW,
  ACTIVATE_WINDOW
} from "../action-types";

export const createWindow = payload => ({
  type: CREATE_WINDOW,
  payload
});

export const minimizeWindow = payload => ({
  type: MINIMIZE_WINDOW,
  payload
});

export const deleteWindow = payload => ({
  type: DELETE_WINDOW,
  payload
});

export const activateWindow = payload => ({
  type: ACTIVATE_WINDOW,
  payload
});
