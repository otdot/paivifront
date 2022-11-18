import {
  Button,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import AWN from "awesome-notifications";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { makeOrder } from "../../services/market";
import {
  delete_order,
  modify_editOrder,
  reset_orders,
} from "../../state/orderReducer";
import { IOrderValues, NewStorageProduct } from "../../Types";
import classes from "./Order.module.css";
import { initializeMarket } from "../../state/marketReducer";

const Cart = () => {
  const dispatch = useAppDispatch();
  const orders = useAppSelector((state) => state.order.order);
  const marketid = useAppSelector((state) => state.market.id);
  console.log("marketid: ", marketid);
  const orderProducts = async (
    values: NewStorageProduct[]
  ): Promise<NewStorageProduct[] | void> => {
    console.log(values);
    try {
      await makeOrder(marketid, values);
      new AWN().success("Order successful", {
        durations: { success: 2000 },
      });
      // clear orders after notification
      setTimeout(() => {
        dispatch(reset_orders());
        dispatch(initializeMarket());
      }, 2000);
    } catch (err) {
      let msg = `Couldn't make order.`;
      console.log(`Couldn't make order. Error: ${err}`);
      if (typeof err === "string") {
        msg += `Error: ${err}`;
      }
      new AWN().alert(msg);
    }
  };

  const handleEditOrder = (pname: string) => {
    const pdetails: NewStorageProduct | undefined = orders.find(
      (order) => order.name === pname
    );
    if (pdetails) {
      const { name, amount, unit }: IOrderValues = pdetails;
      dispatch(modify_editOrder({ name, amount, unit }));
    }
  };

  const deleteProductFromOrders = (pname: string) => {
    const order: NewStorageProduct | undefined = orders.find(
      (order) => order.name === pname
    );
    if (order) {
      dispatch(delete_order(orders.indexOf(order)));
    }
  };

  return (
    <div className={classes.cart}>
      <div className={classes.cartHeader}>
        <Typography variant="h6" component="div">
          Product cart
        </Typography>
        <Button variant="contained" onClick={() => orderProducts(orders)}>
          Order Products
        </Button>
      </div>
      <List>
        {orders.map((order) => (
          <div style={{ marginBottom: "0.5rem" }} key={order.name}>
            <ListItem
              secondaryAction={
                <IconButton
                  onClick={() => deleteProductFromOrders(order.name)}
                  edge="end"
                  aria-label="delete"
                >
                  <DeleteIcon />
                </IconButton>
              }
            >
              <ListItemText
                onClick={() => handleEditOrder(order.name)}
                primary={order.name}
                secondary={`${order.amount} ${order.unit}`}
              />
            </ListItem>
          </div>
        ))}
      </List>
    </div>
  );
};

export default Cart;
