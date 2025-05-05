import { configureStore } from "@reduxjs/toolkit";
import logiks from "../reducer/logiks";

export const store = configureStore({
  reducer: {
    logic: logiks,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;