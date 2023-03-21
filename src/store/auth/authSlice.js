import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    status: "not-authenticated",
    id: null,
    email: null,
    role: null,
    name: null,
    message: null,
  },
  reducers: {
    login: (state, { payload }) => {
      state.id = payload.id;
      state.email = payload.email;
      state.role = payload.role;
      state.name = payload.name;
      state.message = "Clic the bottom to continue";
      state.status = "logged in";
    },
    loginError: (state) => {
      state.status = "login error";
      state.message = "Email or password was wrong";
    },
    logout: (state, payload) => {},
    checkinCredentials: (state) => {
      state.status = "checkin";
    },
  },
});

export const { login, logout, loginError, checkinCredentials } =
  authSlice.actions;
