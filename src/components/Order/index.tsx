import { Field, Form, Formik } from "formik";
import { Button, Container, InputLabel } from "@mui/material";
import { SelectNumber, SelectField } from "./SelectField";
import { useEffect, useState } from "react";
import { initializeProducts } from "../../state/productReducer";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { NewProduct, Unit } from "../../Types";
import NewProductForm from "./NewProductForm";
import Details from "./Details";
import { TextField } from "../SignInUp/FormField";
import { makeOrder } from "../../services/marketOrder";
interface IOrderValues {
  name: string;
  amount: number;
  unit: string;
}

const Order = () => {
  const dispatch = useAppDispatch();
  const [details, setDetails] = useState<Omit<NewProduct, "name">>({
    division: "",
    supplier: "",
  });
  const [showNewProductForm, setShowNewProductForm] = useState<boolean>(false);
  const products = useAppSelector((state) => state.products);
  const marketid = useAppSelector((state) => state.market.id);
  const unitOptions = [
    Unit.Kilograms,
    Unit.Packages,
    Unit.Pieces,
    Unit.Packets,
  ];

  const handleSubmit = async (values: IOrderValues) => {
    try {
      await makeOrder(marketid, [{ ...details, ...values }]);
    } catch (err) {
      console.log(`Couldn't make order. Error: ${err}`);
    }
  };

  const getDetails = async (name: string): Promise<void> => {
    const product = products.find((p) => p.name === name);
    if (product) {
      setDetails(product);
    }
  };

  useEffect(() => {
    dispatch(initializeProducts());
  }, [dispatch]);

  return (
    <Container maxWidth="sm">
      <Formik
        initialValues={{ name: "", amount: 1, unit: "" }}
        onSubmit={handleSubmit}
      >
        {({ handleChange }) => {
          return (
            <Form>
              <SelectField
                name="name"
                label="Product"
                options={products.map((p) => p.name)}
                onChange={(e: any) => {
                  handleChange(e);
                  getDetails(e.target.value);
                }}
              />
              {details.division !== "" && <Details {...details} />}
              <Field
                type="number"
                name="amount"
                placeholder="Amount"
                component={TextField}
              />

              <SelectField
                name="unit"
                label="Unit"
                options={unitOptions}
                onChange={handleChange}
              />
              <Button variant="contained" type="submit">
                Add Order
              </Button>
            </Form>
          );
        }}
      </Formik>
      <div
        style={{
          padding: "1rem 0.25rem",
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "center",
        }}
      >
        <InputLabel>Product not found?</InputLabel>
        <Button onClick={() => setShowNewProductForm(!showNewProductForm)}>
          Add New Product
        </Button>
      </div>
      {showNewProductForm && <NewProductForm />}
    </Container>
  );
};

export default Order;
