import {
  GET_USER_FAILED,
  GET_USER_START,
  GET_USER_SUCCESS,
  USER_LOGIN_FAILED,
  USER_LOGIN_START,
  USER_LOGIN_SUCCESS,
} from "../actionType";

const initialState = {
  loading: false,
  error: null,
  user: null,
  auth: false,
};
export const userReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case USER_LOGIN_START:
      return { ...state, loading: true };
    case USER_LOGIN_FAILED:
      return { ...state, loading: false, error: payload };
    case USER_LOGIN_SUCCESS:
      return { ...state, loading: false, auth: true, error: null };
    case GET_USER_START:
      return { ...state, loading: true };
    case GET_USER_FAILED:
      return { ...state, loading: false, error: payload };
    case GET_USER_SUCCESS:
      return { ...state, loading: false, error: null, user: payload };
    default:
      return state;
  }
};
