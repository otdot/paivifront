import { Grid } from "@mui/material";
import NewProductForm from "./NewProductForm";
import Cart from "./Cart";
import AddProduct from "./AddProduct";
import DrawerNav from "../DrawerNav";

const Order = () => {
  return (
    <>
      <DrawerNav anchor="left" isOpen={true} />
      <Grid container rowSpacing={3} columnSpacing={2}>
        <Grid item xs={12} sm={7}>
          <AddProduct />
          <NewProductForm />
        </Grid>
        <Grid item xs={12} sm={5}>
          <Cart />
        </Grid>
      </Grid>
    </>
  );
};

export default Order;
