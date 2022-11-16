import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userReducer";
import marketSlice from "./marketReducer";
import productSlice from "./productReducer";
import orderSlice from "./orderReducer";

export const store = configureStore({
  reducer: {
    user: userSlice,
    market: marketSlice,
    products: productSlice,
    order: orderSlice,
  },
});

store.subscribe(() => console.log(store.getState()));

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
