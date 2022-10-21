import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userReducer";
import marketSlice from "./marketReducer";

export const store = configureStore({
  reducer: {
    user: userSlice,
    market: marketSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
