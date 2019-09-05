import { redditAuthActionTypes } from "../actions/action-types";
import { redditActionTypes } from "../actions/action-types";
import { authReddit, reddit } from "../../apis/redditApi";

const { __AUTHENTICATE_APP__ } = redditAuthActionTypes;
const { CREATE_REDDIT_BROWSER, __FETCH_POSTS__ } = redditActionTypes;

export const authenticateReddit = () => async dispatch => {
  try {
    dispatch({ type: __AUTHENTICATE_APP__.REQUEST });
    const response = await authReddit();
    dispatch({ type: __AUTHENTICATE_APP__.SUCCESS, payload: response });
  } catch (error) {
    dispatch({ type: __AUTHENTICATE_APP__.FAILURE, payload: { error } });
  }
};

export const fetchSubReddit = ({ id, token }) => async dispatch => {
  try {
    dispatch({ type: __FETCH_POSTS__.REQUEST, payload: { id } });
    const response = await reddit(token).get(`r/science`);
    dispatch({
      type: __FETCH_POSTS__.SUCCESS,
      payload: { id, data: response.data }
    });
  } catch (error) {
    dispatch({ type: __FETCH_POSTS__.FAILURE, payload: { id, error } });
  }
};

export const createRedditBrowser = payload => ({
  type: CREATE_REDDIT_BROWSER,
  payload
});
