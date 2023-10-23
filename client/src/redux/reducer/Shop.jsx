import { createReducer } from "@reduxjs/toolkit";

const intialState = {
  isLoading: false,
};
export const shopReducer = createReducer(intialState, {
  LoadShopRequest: (state) => {
    state.isLoading = true;
  },
  LoadShopSuccess: (state, action) => {
    state.isShop = true;
    state.isLoading = false;
    state.shop = action.payload;
  },
  LoadShopFail: (state, action) => {
    state.isLoading = false;
    state.error = action.payload;
    state.isShop = false;
  },
  ClearError: (state) => {
    state.error = null;
  },
});
