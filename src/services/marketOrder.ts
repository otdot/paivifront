import axios from "axios";

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
