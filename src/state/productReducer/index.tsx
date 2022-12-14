import { createSlice, Dispatch, PayloadAction } from "@reduxjs/toolkit";
import AWN from "awesome-notifications";
import { addProduct, getProducts } from "../../services/product";
import { IProduct, NewProduct } from "../../Types";

const initialState: IProduct[] = [];

const productSlice = createSlice({
  name: "productSlice",
  initialState,
  reducers: {
    set_products(_state, action: PayloadAction<IProduct[]>) {
      return action.payload;
    },
    add_product(state, action: PayloadAction<IProduct>) {
      state.push(action.payload);
    },
  },
});

export const { set_products, add_product } = productSlice.actions;

export const initializeProducts = () => {
  return async (dispatch: Dispatch<any>) => {
    try {
      const products = await getProducts();
      dispatch(set_products(products));
    } catch (err) {
      console.log(`an error occured while setting products: ${err}`);
    }
  };
};

export const createProduct = (newProduct: NewProduct) => {
  return async (dispatch: Dispatch<any>) => {
    try {
      const product = await addProduct(newProduct);
      if (product) {
        dispatch(add_product(product));
        new AWN().success("New product created", {
          durations: { success: 1000 },
        });
      }
    } catch (err) {
      console.log(`an error occured while adding product to state: ${err}`);
      new AWN().alert("Couldn't create new product");
    }
  };
};

export default productSlice.reducer;
