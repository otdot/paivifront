import { createSlice, Dispatch, PayloadAction } from "@reduxjs/toolkit";
import { setToken } from "../../services/general";
import { User } from "../../Types";
import { initializeMarket } from "../marketReducer";
import AWN from "awesome-notifications";

interface LoginResponse {
  token: string, 
  name: string, 
  id: string 
}

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

export const setLoginData = (res: LoginResponse) => {
  return async (dispatch: Dispatch<any>) => {
    try {
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
