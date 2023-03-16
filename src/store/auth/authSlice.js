import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    status: "not-authenticated",
    uid: null,
    email: null,
    displayName: null,
    photoURL: null,
    errorMessage: null,
  },
  reducers: {
    login: (state, { payload }) => {
      state.uid = payload.uid;
      state.email = payload.email;
      state.displayName = payload.displayName;
      state.photoURL = payload.photoURL;
      state.errorMessage = null;
      state.status = "logged in";
    },
    loginError: (state) => {
      state.status = "login error";
      state.errorMessage = "Email or password was wrong";
    },
    logout: (state, payload) => {},
    checkinCredentials: (state) => {
      state.status = "checkin";
    },
  },
});

export const { login, logout, loginError, checkinCredentials } = authSlice.actions;
