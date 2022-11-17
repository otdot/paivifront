import { Button } from "@mui/material";
import { Field, Form, Formik, validateYupSchema } from "formik";
import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { addOrder, delete_order } from "../../state/orderReducer";
import { initializeProducts } from "../../state/productReducer";
import { IOrderValues, NewProduct, Unit } from "../../Types";
import { TextField } from "../SignInUp/FormField";
import Details from "./Details";
import { SelectField } from "./SelectField";

const AddProduct = () => {
  const dispatch = useAppDispatch();
  const initialValues = useAppSelector((state) => state.order.editOrder);
  const products = useAppSelector((state) => state.products);
  const orders = useAppSelector((state) => state.order.order);
  const [details, setDetails] = useState<Omit<NewProduct, "name">>({
    division: "",
    supplier: "",
  });

  const unitOptions = [
    Unit.Kilograms,
    Unit.Packages,
    Unit.Pieces,
    Unit.Packets,
  ];

  const getDetails = (name: string): void => {
    const product = products.find((p) => p.name === name);
    if (product) {
      setDetails(product);
    }
  };

  useEffect(() => {
    dispatch(initializeProducts());
  }, [dispatch]);

  useEffect(() => {
    getDetails(initialValues.name);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [initialValues]);

  const handleSubmit = (
    values: IOrderValues,
    { resetForm }: { resetForm: () => void }
  ) => {
    const order = orders.find((order) => order.name === values.name);
    if (order) {
      dispatch(delete_order(orders.indexOf(order)));
    }
    dispatch(addOrder({ ...details, ...values }, resetForm));
    setDetails({
      division: "",
      supplier: "",
    });
  };

  if (!products) {
    return <p>loading...</p>;
  }

  return (
    <Formik
      enableReinitialize
      initialValues={initialValues}
      onSubmit={handleSubmit}
    >
      {({ handleChange, values }) => {
        return (
          <Form>
            <SelectField
              name="name"
              label="Product"
              options={products.map((p: any) => p.name)}
              placeholder="Search for products"
              onChange={(e: any) => {
                handleChange(e);
                getDetails(e.target.value);
              }}
            />
            {details.division !== "" && <Details {...details} />}
            <Field
              id="amount"
              type="number"
              name="amount"
              value={values.amount}
              placeholder="Amount"
              component={TextField}
            />

            <SelectField
              name="unit"
              label="Unit"
              options={unitOptions}
              onChange={handleChange}
              placeholder="Search for products"
            />
            <Button variant="contained" type="submit">
              Add Product
            </Button>
          </Form>
        );
      }}
    </Formik>
  );
};

export default AddProduct;
