import axios from "axios";
import { StorageProductType } from "../Types";
import { v4 as uuid } from "uuid";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
let token: string | null = null;

type NewStorageProduct = Omit<StorageProductType, "lotnum">;

export const setToken = (userToken: string | null) => {
  token = `bearer ${userToken}`;
};

export const getMarket = async () => {
  if (token === null) {
    throw new Error("user token missing");
  }
  const config = {
    headers: { authorization: token },
  };
  const market = await axios.get("/users/market", config);
  return market.data;
};

export const makeOrder = async (
  id: string,
  orderArr: NewStorageProduct[]
): Promise<StorageProductType[]> => {
  const orders: StorageProductType[] = orderArr.map((order) => ({
    ...order,
    lotnum: uuid(),
  }));
  const res = await axios.patch(`/market/${id}`, { orders });
  return res.data;
};
