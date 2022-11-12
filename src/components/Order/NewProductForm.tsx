import { Button, InputLabel } from "@mui/material";
import { Field, Form, Formik } from "formik";
import React, { useState } from "react";
import { useAppDispatch } from "../../hooks/redux";
import { createProduct } from "../../state/productReducer";
import { NewProduct } from "../../Types";
import { TextField } from "../SignInUp/FormField";

const NewProductForm = () => {
  const dispatch = useAppDispatch();
  const [showNewProductForm, setShowNewProductForm] = useState<boolean>(false);

  const createNewProduct = async (
    values: NewProduct,
    { resetForm }: { resetForm: () => void }
  ) => {
    try {
      dispatch(createProduct(values));
      resetForm();
    } catch (err) {
      console.log(`Couldn't add new product`);
    }
  };

  return (
    <>
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
      {showNewProductForm && (
        <Formik
          onSubmit={createNewProduct}
          initialValues={{
            name: "",
            supplier: "",
            division: "",
          }}
        >
          <Form>
            <Field
              type="text"
              name="name"
              placeholder="Product name"
              component={TextField}
            />
            <Field
              type="text"
              name="supplier"
              placeholder="Supplier"
              component={TextField}
            />
            <Field
              type="text"
              name="division"
              placeholder="Division"
              component={TextField}
            />
            <Button type="submit">Add product</Button>
          </Form>
        </Formik>
      )}
    </>
  );
};
export default NewProductForm;
