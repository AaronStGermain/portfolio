import _ from "lodash";
import {
  CREATE_WINDOW,
  MINIMIZE_WINDOW,
  ACTIVATE_WINDOW,
  DELETE_WINDOW
} from "../../actions/action-types";

const initialState = {
  max_id: 0,
  windowCount: 0,
  data: {}
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case CREATE_WINDOW:
      return createWindow(state, payload);
    case MINIMIZE_WINDOW:
      return state;
    case DELETE_WINDOW:
      return deleteWindow(state, payload);
    case ACTIVATE_WINDOW:
      return activateWindow(state, payload);
    default:
      return state;
  }
};

const createWindow = (state, payload) => {
  const INCREMENT_ID = state.max_id + 1;
  const windowCount = state.windowCount + 1;
  return {
    ...state,
    max_id: INCREMENT_ID,
    windowCount,
    data: {
      ...state.data,
      ...{
        [INCREMENT_ID]: {
          id: INCREMENT_ID,
          zIndex: windowCount,
          ...payload
        }
      }
    }
  };
};

const activateWindow = (state, payload) => {
  const { id } = payload;
  const windowsToDeactivate = _.omit(state.data, [id]);
  const clickedZIndex = state.data[id].zIndex;

  return {
    ...state,
    data: {
      ...state.data,
      [id]: {
        ...state.data[id],
        id,
        zIndex: state.windowCount,
        isActive: true
      },
      ..._.mapValues(windowsToDeactivate, window => {
        return {
          ...window,
          zIndex:
            window.zIndex <= state.windowCount && window.zIndex > clickedZIndex
              ? window.zIndex - 1
              : window.zIndex,
          isActive: false
        };
      })
    }
  };
};

const deleteWindow = (state, payload) => {
  const { id } = payload;
  const windows = { ...state.data };
  delete windows[id];

  return {
    ...state,
    data: {
      ...windows
    },
    windowCount: state.windowCount - 1
  };
};
