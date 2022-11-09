import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userReducer";
import marketSlice from "./marketReducer";
import productSlice from "./productReducer";

export const store = configureStore({
  reducer: {
    user: userSlice,
    market: marketSlice,
    products: productSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
