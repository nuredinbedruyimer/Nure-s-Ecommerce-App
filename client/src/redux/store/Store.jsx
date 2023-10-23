import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "../reducer/User";
import { shopReducer } from "../reducer/Shop";
import { productReducer } from "../reducer/Product";
import { eventReducer } from "../reducer/Event";

const Store = configureStore({
  reducer: {
    user: userReducer,
    shop: shopReducer,
    products: productReducer,
    events: eventReducer,
  },
});
export default Store;
