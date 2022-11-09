import axios from "axios";
import { IProduct, NewProduct } from "../Types";

export const getProducts = async (): Promise<IProduct[]> => {
  const products = await axios.get("/products");
  return products.data.product;
};

export const getProductDetails = async (
  id: string
): Promise<IProduct | undefined> => {
  const product = await axios.get(`/products/${id}`);
  return product.data;
};

export const addProduct = async (
  product: NewProduct
): Promise<IProduct | undefined> => {
  try {
    const newproduct = await axios.post("/products", product);
    console.log(newproduct.data);
    return newproduct.data;
  } catch (err) {
    console.log(`Couldn't add new product. Error: ${err}`);
  }
};
