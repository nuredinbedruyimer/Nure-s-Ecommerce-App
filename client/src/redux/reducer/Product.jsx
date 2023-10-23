import { createReducer } from "@reduxjs/toolkit";

const initialState = {
  isLoading: true,
};

export const productReducer = createReducer(initialState, {
  ProductCreateRequest: (state) => {
    state.isLoading = true;
  },
  ProductCreateSuccess: (state, action) => {
    state.isLoading = false;
    state.product = action.payload;
    state.success = true;
  },
  ProductCreateFail: (state, action) => {
    state.isLoading = false;
    state.error = action.payload;
    state.success = false;
  },

  // GET ALL PRODUCTS
  GetAllProductsShopRequest: (state) => {
    state.isLoading = true;
  },
  GetAllProductsShopSuccess: (state, action) => {
    state.isLoading = false;
    state.products = action.payload;
  },
  GetAllProductsShopFailed: (state, action) => {
    state.isLoading = false;
    state.error = action.payload;
  },

  // delete product of a shop
  DeleteProductRequest: (state) => {
    state.isLoading = true;
  },
  DeleteProductSuccess: (state, action) => {
    state.isLoading = false;
    state.message = action.payload;
  },
  DeleteProductFailed: (state, action) => {
    state.isLoading = false;
    state.error = action.payload;
  },

  //   // get all products
  //   GetAllProductsRequest: (state) => {
  //     state.isLoading = true;
  //   },
  //   GetAllProductsSuccess: (state, action) => {
  //     state.isLoading = false;
  //     state.allProducts = action.payload;
  //   },
  //   GetAllProductsFailed: (state, action) => {
  //     state.isLoading = false;
  //     state.error = action.payload;
  //   },

  ClearErrors: (state) => {
    state.error = null;
  },
});
