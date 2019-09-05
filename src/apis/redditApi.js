import axios from "axios";

const REDDIT_ACCESS_TOKEN_URL = "https://www.reddit.com/api/v1/access_token";
const APP_ONLY_GRANT_TYPE = "https://oauth.reddit.com/grants/installed_client";
const REDDIT_REQUEST_URL = "https://oauth.reddit.com/";
//eventually the users phone will be tracked, but if the user doesn't want that to happen then it will use this private variable
const DEVICE_ID = "DO_NOT_TRACK_THIS_DEVICE";

export const authReddit = async () => {
  try {
    let bearerToken = await getBearerToken();
    return bearerToken;
  } catch (err) {
    return err;
  }
};

const getBearerToken = async () => {
  try {
    const response = await fetch(REDDIT_ACCESS_TOKEN_URL, {
      method: "POST",
      body: encodeURI(
        `grant_type=${APP_ONLY_GRANT_TYPE}&device_id='${DEVICE_ID}')`
      ),
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization: "Basic Rk1fUkExVlJIWDBhSXc6"
      }
    });

    return await response.json();
  } catch (err) {
    return `Error: ${err}`;
  }
};

export const reddit = token =>
  axios.create({
    baseURL: REDDIT_REQUEST_URL,
    headers: {
      Authorization: `Bearer ${token}`
    }
  });

export const redditPost = axios.create({
  baseURL: REDDIT_REQUEST_URL,
  method: "post",
  headers: {
    Authorization: "Bearer -a6i6AK9-5xaZMeFEgw2ce6kNjF8"
  }
});
