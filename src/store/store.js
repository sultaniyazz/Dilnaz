import { configureStore } from "@reduxjs/toolkit";
import dataSlice from "../features/dataSlice";
import uiSlice from "../features/uiSlice";

export const store = configureStore({
  reducer: {
    dataSlice,
    uiSlice
  }
});