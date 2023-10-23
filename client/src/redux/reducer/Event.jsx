import { createReducer } from "@reduxjs/toolkit";

const initialState = {
  isLoading: true,
};

export const eventReducer = createReducer(initialState, {
  EventCreateRequest: (state) => {
    state.isLoading = true;
  },
  EventCreateSuccess: (state, action) => {
    state.isLoading = false;
    state.event = action.payload;
    state.success = true;
  },
  EventCreateFail: (state, action) => {
    state.isLoading = false;
    state.error = action.payload;
    state.success = false;
  },

  // GET ALL PRODUCTS
  GetAllEventsShopRequest: (state) => {
    state.isLoading = true;
  },
  GetAllEventsShopSuccess: (state, action) => {
    state.isLoading = false;
    state.events = action.payload;
  },
  GetAllEventsShopFailed: (state, action) => {
    state.isLoading = false;
    state.error = action.payload;
  },

  // DELETE EVENT
  DeleteEventRequest: (state) => {
    state.isLoading = true;
  },
  DeleteEventSuccess: (state, action) => {
    state.isLoading = false;
    state.message = action.payload;
  },
  DeleteEventFailed: (state, action) => {
    state.isLoading = false;
    state.error = action.payload;
  },
});
