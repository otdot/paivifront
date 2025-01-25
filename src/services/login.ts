import axiosInstance from "../axiosConfig";
import { LoginInput } from "../Types";;

export const login = async (credentials: LoginInput) => {
  const res = await axiosInstance.post("/login", credentials);
  return res.data;
};
