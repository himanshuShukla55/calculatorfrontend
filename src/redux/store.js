import { combineReducers, legacy_createStore } from "redux";
import { userReducer } from "./reducers/users.reducer";

export const store = legacy_createStore(
  combineReducers({ user: userReducer }),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
