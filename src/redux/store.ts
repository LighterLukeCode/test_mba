import { configureStore } from "@reduxjs/toolkit";
import programsSlice from "./programsSlice";

export const store = configureStore({
  reducer: {
    programsSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
