import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { initializeMarket } from "../../state/marketReducer";
import {
  Avatar,
  Button,
  Grid,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from "@mui/material";
import { combineStorage, displayDate, sortArr } from "../../services/general";
import PersonIcon from "@mui/icons-material/Person";

const MyMarket = () => {
  const dispatch = useAppDispatch();
  const market = useAppSelector((state) => state.market);
  const storage: any = sortArr(combineStorage(market.storage));

  useEffect(() => {
    dispatch(initializeMarket());
  }, [dispatch]);

  if (!window.localStorage.getItem("loggedUser")) {
    return (
      <div>
        <p>Please login</p>
      </div>
    );
  }

  if (!market) {
    return <p>loading...</p>;
  }
  return (
    <div>
      <Grid container rowSpacing={3} columnSpacing={1}>
        <Grid item xs={12} sm={12}>
          <h1>{market.name}</h1>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography variant="h6" component="div">
            Storage
          </Typography>
          <List>
            {storage.map((product: any) => (
              <ListItem key={product._id}>
                <ListItemText
                  primary={`${product.name} | ${product.supplier}`}
                  secondary={`${product.amount}${product.unit}. BB: ${
                    product.bestbefore && displayDate(product.bestbefore)
                  }`}
                />
              </ListItem>
            ))}
          </List>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
            {market.personnel.length} Employee(s)
          </Typography>
          <List>
            {market.personnel.map((employee: any) => (
              <ListItem key={employee.id}>
                <ListItemAvatar>
                  <Avatar>
                    <PersonIcon fontSize="medium" />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText
                  primary={employee.name}
                  secondary={employee.position}
                />
              </ListItem>
            ))}
          </List>
        </Grid>
      </Grid>
      <Button variant="contained">Make an order</Button>
    </div>
  );
};

export default MyMarket;
