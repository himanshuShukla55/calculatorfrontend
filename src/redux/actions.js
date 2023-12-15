import {
  GET_USER_FAILED,
  GET_USER_START,
  GET_USER_SUCCESS,
  USER_LOGIN_FAILED,
  USER_LOGIN_START,
  USER_LOGIN_SUCCESS,
} from "./actionType";

export const userLoginStart = () => ({
  type: USER_LOGIN_START,
});

export const userLoginFailed = (payload) => ({
  type: USER_LOGIN_FAILED,
  payload,
});

export const userLoginSuccess = () => ({
  type: USER_LOGIN_SUCCESS,
});

export const getUserStart = () => ({
  type: GET_USER_START,
});

export const getUserFailed = (payload) => ({
  type: GET_USER_FAILED,
  payload,
});

export const getUserSuccess = (payload) => ({
  type: GET_USER_SUCCESS,
  payload,
});
