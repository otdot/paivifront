import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { initializeMarket } from "../../state/marketReducer";
import { Button, Grid } from "@mui/material";

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
          {/* {market.storage.map((product) => (
            <p>{product}</p>
          ))} */}
        </Grid>
        <Grid item xs={12} sm={6}>
          <h2>{market.personnel.length} Employee(s)</h2>
        </Grid>
      </Grid>
      <Button variant="contained">Make an order</Button>
    </div>
  );
};

export default MyMarket;
