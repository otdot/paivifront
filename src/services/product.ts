import AWN from "awesome-notifications";
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
    return newproduct.data;
  } catch (err) {
    console.log(`Couldn't add new product. Error: ${err}`);
  }
};

export const removeStorageProduct = async (
  productArr: Array<string | undefined>
) => {
  try {
    productArr.forEach(async (id: string | undefined) => {
      await axios.delete(`/storageproducts/${id}`);
    });
    new AWN().info(`Deleted ${productArr.length} products`, {
      durations: { info: 3000 },
    });
  } catch (err) {
    let msg = "Couldn't delete product";
    if (axios.isAxiosError(err)) {
      msg = ` ${err?.response?.data}`;
    }
    new AWN().alert(msg);
  }
};
