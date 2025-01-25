import { createSlice, Dispatch, PayloadAction } from "@reduxjs/toolkit";
import AWN from "awesome-notifications";
import { getMarket, updateDivision } from "../../services/market";
import { IMarket, ProductPlacement } from "../../Types";import axios from "axios";
;

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

export const updateDivisions = (values: ProductPlacement, marketid: string) => {
  return async (dispatch: Dispatch<any>) => {
    try {
      const res = await updateDivision(values, marketid);
      if (res) {
        new AWN().success("Division aisle updated", {
          durations: { success: 3000 },
        });
        const market = await getMarket();
        dispatch(set_market(market));
      }
    } catch (err) {
      let msg = "Couldn't update market division";
      if (axios.isAxiosError(err)) {
        msg = ` ${err?.response?.data}`;
      }
      new AWN().alert(msg);
    }
  };
};

export default marketSlice.reducer;
