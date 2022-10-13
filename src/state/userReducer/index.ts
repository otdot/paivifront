import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface User {
  name: string;
}

const initialState: User = { name: "" };

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    set_user(state, action: PayloadAction<string>): User {
      return { name: action.payload };
    },
  },
});

export const { set_user } = userSlice.actions;

export default userSlice.reducer;
