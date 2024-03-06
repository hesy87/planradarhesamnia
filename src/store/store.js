import { configureStore } from "@reduxjs/toolkit";
import ticketsDataReducer from "./dataSlice";

export const store = configureStore({
  reducer: {
    data: ticketsDataReducer,
  },
});

//create store for data reducer