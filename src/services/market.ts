import axios from "axios";
import {
  IMarket,
  NewStorageProduct,
  ProductPlacement,
  StorageProductType,
} from "../Types";
import { v4 as uuid } from "uuid";
import { appendToken, getRandomDate } from "./general";

export const getMarkets = async () => {
  const markets = await axios.get("/market");
  return markets.data;
};

export const getMarket = async () => {
  const config = appendToken();
  const market = await axios.get("/users/market", config);
  return market.data;
};

export const makeOrder = async (
  id: string,
  orderArr: NewStorageProduct[]
): Promise<StorageProductType[]> => {
  const config = appendToken();
  const orders: StorageProductType[] = orderArr.map((order) => ({
    ...order,
    lotnum: uuid(),
    bestbefore: getRandomDate(),
  }));

  const res = await axios.patch(`/market/order/${id}`, { orders }, config);
  return res.data;
};

export const updateDivision = async (
  division: ProductPlacement,
  id: string
): Promise<IMarket> => {
  const config = appendToken();
  const newDivision = { productPlacements: [division] };
  const res = await axios.patch(
    `/market/placements/${id}`,
    newDivision,
    config
  );
  return res.data;
};
