import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./slice/counterSlice";
import authSlice from "./slice/authSlice";

// ! create a store
const store = configureStore({
  reducer: {
    counter: counterSlice,
    auth: authSlice
  }
})

export default store;
