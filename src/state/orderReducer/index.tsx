import { createSlice, Dispatch, PayloadAction } from "@reduxjs/toolkit";
import {
  IOrderSliceInitial,
  IOrderValues,
  NewStorageProduct,
} from "../../Types";

const initialState: IOrderSliceInitial = {
  order: [],
  editOrder: { name: "", amount: 1, unit: "" },
};

const orderSlice = createSlice({
  name: "orderSlice",
  initialState,
  reducers: {
    add_order_to_cart(state, action: PayloadAction<NewStorageProduct>) {
      state.order.push(action.payload);
    },
    modify_editOrder(state, action: PayloadAction<IOrderValues>) {
      state.editOrder = action.payload;
    },
    delete_order(state, action: PayloadAction<number>) {
      state.order.splice(action.payload, 1);
    },
    reset_orders(state) {
      state.order = [];
    },
  },
});

export const {
  add_order_to_cart,
  modify_editOrder,
  delete_order,
  reset_orders,
} = orderSlice.actions;

export const addOrder = (values: NewStorageProduct, resetForm: () => void) => {
  return (dispatch: Dispatch<any>) => {
    dispatch(add_order_to_cart(values));
    dispatch(modify_editOrder({ name: "", amount: 1, unit: "" }));
    resetForm();
  };
};

export default orderSlice.reducer;
