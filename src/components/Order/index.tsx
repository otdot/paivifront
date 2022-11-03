import { Field, Form, Formik } from "formik";
import { TextField } from "../SignInUp/FormField";
import { Button } from "@mui/material";
import { SelectField } from "./SelectField";

const Order = () => {
  const handleSubmit = () => {
    return;
  };

  return (
    <Formik initialValues={{ orders: [] }} onSubmit={handleSubmit}>
      <Form>
        <SelectField
          name="test"
          label="test"
          options={["koira", "kissa", "lintu"]}
        />
        <Button variant="contained" type="submit">
          Add animal
        </Button>
      </Form>
    </Formik>
  );
};

export default Order;
