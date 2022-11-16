import { createSlice, Dispatch, PayloadAction } from "@reduxjs/toolkit";
import { login } from "../../services/login";
import { getMarket, setToken } from "../../services/marketOrder";
import { LoginInput } from "../../Types";
import { User } from "../../Types";
import { initializeMarket } from "../marketReducer";

const initialState: User = { name: null };

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    set_user(_state, action: PayloadAction<User["name"]>) {
      return { name: action.payload };
    },
  },
});

export const { set_user } = userSlice.actions;

export const userLogout = () => {
  return (dispatch: Dispatch<any>) => {
    dispatch(set_user(null));
    setToken(null);
    window.localStorage.removeItem("loggedUser");
  };
};

export const setLoginData = (credentials: LoginInput) => {
  return async (dispatch: Dispatch<any>) => {
    try {
      const res = await login(credentials);
      window.localStorage.setItem("loggedUser", JSON.stringify(res));
      dispatch(set_user(res.name));
      setToken(res.token);
      if (window.localStorage.getItem("loggedUser")) {
        dispatch(initializeMarket());
      }
    } catch (err: unknown) {
      console.log(`An error occurred: ${err}`);
    }
  };
};

export default userSlice.reducer;
