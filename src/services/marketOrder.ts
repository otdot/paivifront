import axios from "axios";
import { NewStorageProduct, StorageProductType } from "../Types";
import { v4 as uuid } from "uuid";
import { getRandomDate } from "./general";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
let token: string | null = null;

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
  const date = getRandomDate();
  console.log(date, typeof date);
  const orders: StorageProductType[] = orderArr.map((order) => ({
    ...order,
    lotnum: uuid(),
    bestbefore: getRandomDate(),
  }));

  console.log(orderArr);
  const res = await axios.patch(`/market/${id}`, { orders });
  return res.data;
};
