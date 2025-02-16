import { Button, Grid, Typography } from "@mui/material";
import AWN from "awesome-notifications";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";

import { filterProductsGoingOutOfDate } from "../../services/general";
import { removeStorageProduct } from "../../services/product";
import { initializeMarket } from "../../state/marketReducer";
import { StorageProductType } from "../../Types";
import Product from "./Product";
import Range from "./Range";
import axios from "axios";
import DrawerNav from "../DrawerNav";

const ExpiredProducts = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [range, setRange] = useState(1);
  const storage = useAppSelector((state) =>
    filterProductsGoingOutOfDate(state.market.storage, range)
  );

  const removeAllOutofDateStorageProducts = async () => {
    try {
      await removeStorageProduct(storage.map((p) => p._id));
      setTimeout(() => {
        dispatch(initializeMarket());
        navigate("/storage");
      }, 1500);
    } catch (err) {
      let msg = "Couldn't update market division";
      if (axios.isAxiosError(err)) {
        msg = ` ${err?.response?.data}`;
      }
      new AWN().alert(msg);
    }
  };

  console.log(storage);

  return (
    <>
      <DrawerNav anchor="left" isOpen={true} />
      <Grid container rowSpacing={2} columnSpacing={2}>
        <Grid item xs={12}>
          <div style={{ display: "flex", justifyContent: "space-around" }}>
            <Range range={range} setRange={setRange} />
            <Button
              onClick={removeAllOutofDateStorageProducts}
              variant="contained"
              color="error"
            >
              Remove All
            </Button>
          </div>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h6" component="div">
            Out of Date Products in {range} {range === 1 ? "day" : "days"}
          </Typography>
        </Grid>
        {storage.map((product: StorageProductType) => (
          <Grid key={product._id} item xs={12} sm={4} md={3}>
            <Product product={product} />
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default ExpiredProducts;
