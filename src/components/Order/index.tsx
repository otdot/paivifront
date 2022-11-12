import { Container } from "@mui/material";
import NewProductForm from "./NewProductForm";
import Cart from "./Cart";
import AddProduct from "./AddProduct";

const Order = () => {
  return (
    <Container maxWidth="sm">
      <AddProduct />
      <NewProductForm />
      <Cart />
    </Container>
  );
};

export default Order;
