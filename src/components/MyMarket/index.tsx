import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { initializeMarket } from "../../state/marketReducer";
import { Button, Grid } from "@mui/material";
import { StorageProductType } from "../../Types";
import Order from "../Order";

const MyMarket = () => {
  const dispatch = useAppDispatch();
  const market = useAppSelector((state) => state.market);

  useEffect(() => {
    dispatch(initializeMarket());
  }, [dispatch]);

  if (!market) {
    return <p>loading...</p>;
  }

  console.log(market);

  return (
    <div>
      <Grid container rowSpacing={3} columnSpacing={1}>
        <Grid item xs={12} sm={12}>
          <h1>{market.name}</h1>
        </Grid>
        <Grid item xs={12} sm={6}>
          <h2>Storage</h2>
          {market.storage.map((product: StorageProductType) => (
            <p key={product._id}>
              product: {product.name}, amount: {product.amount}
              {product.unit}s, supplier:
              {product.supplier}
            </p>
          ))}
        </Grid>
        <Grid item xs={12} sm={6}>
          <h2>{market.personnel.length} Employee(s)</h2>
          {market.personnel.map((employee: any) => (
            <p key={employee.id}>
              {employee.name}: {employee.position}
            </p>
          ))}
        </Grid>
      </Grid>
      <Button variant="contained">Make an order</Button>
    </div>
  );
};

export default MyMarket;
