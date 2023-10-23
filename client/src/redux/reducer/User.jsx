import { createReducer } from "@reduxjs/toolkit";

const intialState = {
  isAuth: false,
};
export const userReducer = createReducer(intialState, {
  LoadUserRequest: (state) => {
    state.loading = true;
  },
  LoadUserSuccess: (state, action) => {
    state.isAuth = true;
    state.loading = false;
    state.user = action.payload;
  },
  LoadUserFail: (state, action) => {
    state.loading = false;
    state.error = action.payload;
    state.isAuth = false;
  },
  ClearError: (state) => {
    state.error = null;
  },
});
