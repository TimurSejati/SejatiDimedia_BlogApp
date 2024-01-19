import { configureStore } from "@reduxjs/toolkit";

import { userReducer } from "../reducers/userReducers";

const isClientSide = typeof window !== "undefined";
const userInfoFromStorage = isClientSide
  ? JSON.parse(localStorage.getItem("account")) || null
  : null;

const initialState = {
  user: {
    userInfo: userInfoFromStorage,
  },
};

const store = configureStore({
  reducer: {
    user: userReducer,
  },
  preloadedState: initialState,
});

export default store;
