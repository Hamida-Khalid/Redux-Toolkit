import { configureStore } from "@reduxjs/toolkit";

import counterReducer from "../counterSlice";
import profileReducer from "../profileSlice";


export const store = configureStore({
  reducer: {
    count: counterReducer,
    profile:profileReducer
    // user:null Define Multiple reducers here
  },
});
