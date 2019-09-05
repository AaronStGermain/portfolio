import { redditActionTypes } from "../actions/action-types";
import { redditModel } from "../constants";
const {
  __FETCH_POSTS__,
  CREATE_REDDIT_BROWSER,
  REMOVE_REDDIT_BROWSER
} = redditActionTypes;

const initialState = {
  redditBrowsers: {},
  allIds: []
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case CREATE_REDDIT_BROWSER:
      return createRedditBrowser(state, payload);
    case __FETCH_POSTS__.REQUEST:
    case __FETCH_POSTS__.SUCCESS:
    case __FETCH_POSTS__.FAILURE:
      return fetchSubreddit(state, payload, type);
    default:
      return state;
  }
};

const createRedditBrowser = (state, payload) => {
  const redditBrowser = {
    ...redditModel,
    id: payload
  };
  return {
    ...state,
    redditBrowsers: {
      ...state.redditBrowsers,
      [payload]: redditBrowser
    },
    allIds: [...state.allIds, payload]
  };
};

//network request helper
const fetchSubreddit = (state, payload, type) => {
  const { id } = payload;
  const redditBrowser = state.redditBrowsers[id];

  switch (type) {
    case __FETCH_POSTS__.REQUEST:
      return {
        ...state,
        redditBrowsers: {
          ...state.redditBrowsers,
          [id]: {
            ...redditBrowser,
            error: null,
            isLoading: true
          }
        }
      };
    case __FETCH_POSTS__.SUCCESS:
      return {
        ...state,
        redditBrowsers: {
          ...state.redditBrowsers,
          [id]: {
            ...redditBrowser,
            posts: { ...payload.data },
            error: null,
            isLoading: false
          }
        }
      };
    case __FETCH_POSTS__.FAILURE:
      return {
        ...state,
        redditBrowsers: {
          ...state.redditBrowsers,
          [id]: {
            ...redditBrowser,
            isLoading: false,
            error: payload.error
          }
        }
      };
    default:
      return state;
  }
};
