import { Button } from "@mui/material";
import { Field, Form, Formik } from "formik";
import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { sortArr } from "../../services/general";
import { addOrder, delete_order } from "../../state/orderReducer";
import { initializeProducts } from "../../state/productReducer";
import { IOrderValues, NewProduct, Unit } from "../../Types";
import { TextField } from "../SignInUp/FormField";
import Details from "./Details";
import { SelectField } from "./SelectField";
import * as yup from "yup";

const AddProduct = () => {
  const dispatch = useAppDispatch();
  const initialValues = useAppSelector((state) => state.order.editOrder);
  const products = useAppSelector((state) => state.products);
  const sortedproducts = sortArr(products.map((p) => ({ ...p, name: p.name })));
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
  }, [initialValues]);

  const handleSubmit = (
    values: IOrderValues,
    { resetForm }: { resetForm: () => void }
  ) => {
    const order = orders.find(
      (order) => order.name === values.name && order.unit === values.unit
    );
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
      validationSchema={yup.object({
        name: yup.string().required(),
        unit: yup.string().required(),
        amount: yup.number().min(1).required(),
      })}
    >
      {({ handleChange }) => {
        return (
          <Form>
            <SelectField
              name="name"
              label="Product"
              options={sortedproducts.map((p: any) => p.name)}
              placeholder="Search for products"
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
              placeholder="Add unit"
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
