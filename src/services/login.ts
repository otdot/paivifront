import axios from "axios";
import { LoginInput } from "../Types";;

export const login = async (credentials: LoginInput) => {
  const res = await axios.post("/login", credentials);
  return res.data;
};
