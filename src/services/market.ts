import axios from "axios";
import {
  IMarket,
  NewStorageProduct,
  ProductPlacement,
  StorageProductType,
} from "../Types";
import { v4 as uuid } from "uuid";
import { getRandomDate } from "./general";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
let token: string | null = null;

export const setToken = (userToken: string | null) => {
  token = `bearer ${userToken}`;
};

export const getMarkets = async () => {
  const markets = await axios.get("/market");
  return markets.data;
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
    bestbefore: getRandomDate(),
  }));

  const res = await axios.patch(`/market/order/${id}`, { orders });
  return res.data;
};

export const updateDivision = async (
  division: ProductPlacement,
  id: string
): Promise<IMarket> => {
  const newDivision = { productPlacements: [division] };
  const res = await axios.patch(`/market/placements/${id}`, newDivision);
  return res.data;
};
