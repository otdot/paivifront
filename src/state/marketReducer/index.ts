import { createSlice, Dispatch, PayloadAction } from "@reduxjs/toolkit";
import { getMarket } from "../../services/marketOrder";
import { IMarket } from "../../Types";

const initialState: IMarket = {
  name: "",
  personnel: [],
  productPlacements: [],
  storage: [],
  id: "",
};

const marketSlice = createSlice({
  name: "marketSlice",
  initialState,
  reducers: {
    set_market(_state, action: PayloadAction<IMarket>) {
      return action.payload;
    },
  },
});

export const { set_market } = marketSlice.actions;

export const initializeMarket = () => {
  return async (dispatch: Dispatch<any>) => {
    try {
      const market = await getMarket();
      dispatch(set_market(market));
    } catch (err) {
      console.log(`an error occured while setting market: ${err}`);
    }
  };
};

export default marketSlice.reducer;
