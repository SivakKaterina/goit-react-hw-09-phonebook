import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import {
  loginSuccess,
  loginError,
  registrationSuccess,
  registrationError,
  logoutSuccess,
  logoutError,
  getCurrentUserSuccess,
  getCurrentUserError,
} from "./auth-actions";

const user = createReducer(
  { name: null, email: null },
  {
    [registrationSuccess]: (_, { payload }) => payload.user,
    [loginSuccess]: (_, { payload }) => payload.user,
    [logoutSuccess]: () => ({ name: null, email: null }),
    [getCurrentUserSuccess]: (_, { payload }) => payload.user,
  }
);

const token = createReducer(null, {
  [registrationSuccess]: (_, { payload }) => payload.token,
  [loginSuccess]: (_, { payload }) => payload.token,
  [logoutSuccess]: () => null,
});

const error = createReducer(null, {
  [registrationError]: (_, { payload }) => payload,
  [loginError]: (_, { payload }) => payload,
  [logoutError]: (_, { payload }) => payload,
  [getCurrentUserError]: (_, { payload }) => payload,
});

const isAthenticated = createReducer(false, {
  [registrationSuccess]: () => true,
  [loginSuccess]: () => true,
  [getCurrentUserSuccess]: () => true,
  [registrationError]: () => false,
  [loginError]: () => false,
  [getCurrentUserError]: () => false,
  [logoutSuccess]: () => false,
});

export default combineReducers({ user, token, error, isAthenticated });
