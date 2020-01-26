import axios from "axios";
import jwt_decode from "jwt-decode";

// Action Types
import { SET_CURRENT_USER, GET_ERRORS } from "./types";

export const login = (userData, history) => async dispatch => {
  try {
    const res = await axios.post("/api/token/", userData);
    const tokens = res.data;
    const user = jwt_decode(tokens.access);
    setAuthToken(tokens.access);
    dispatch(setCurrentUser(user));
    // history.push("/");
  } catch (error) {
    if (error.response) {
      dispatch({
        type: GET_ERRORS,
        errors: error.response.data
      });
    } else {
      console.error(error);
    }
  }
};

export const logout = () => {
  setAuthToken();
  return setCurrentUser(null);
};

const setAuthToken = token => {
  if (token) {
    localStorage.setItem("token", token);
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  } else {
    localStorage.removeItem("token");
    delete axios.defaults.headers.common.Authorization;
  }
};

const setCurrentUser = user => ({
  type: SET_CURRENT_USER,
  payload: user
});

export const checkForExpiredToken = () => dispatch => {
  // Get token
  const token = localStorage.getItem("token");

  if (token) {
    const currentTime = Date.now() / 1000;

    // Decode token and get user info
    const user = jwt_decode(token);

    // Check token expiration
    if (user.exp >= currentTime) {
      // Set auth token header
      setAuthToken(token);
      // Set user
      dispatch(setCurrentUser(user));
    } else {
      dispatch(logout());
    }
  }
};
