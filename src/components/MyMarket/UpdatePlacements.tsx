import { Button, TextField } from "@mui/material";
import { Field, Form, Formik } from "formik";
import React from "react";
import * as yup from "yup";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { updateDivision } from "../../services/market";
import { Divisions, ProductPlacement } from "../../Types";
import { WideSelectField } from "../Order/SelectField";

const UpdatePlacements = () => {
  const initialValues: ProductPlacement = { division: "", aisle: 1 };
  const marketid = useAppSelector((state) => state.market.id);
  const handleSubmit = async (
    values: ProductPlacement,
    { resetForm }: { resetForm: () => void }
  ) => {
    console.log(values);
    resetForm();
    // try {
    //   const res = await updateDivision(values, marketid);
    //   console.log(res);
    // } catch (err) {
    //   console.log("Couldn't update market division", err);
    // }
  };
  const divisionOptions = [
    Divisions.fruitAndVegetables,
    Divisions.dryAndProcessedFood,
    Divisions.meatAndFish,
    Divisions.dairy,
    Divisions.bread,
    Divisions.preparedFoods,
    Divisions.utilityGoods,
  ];

  return (
    <Formik
      enableReinitialize
      style={{ padding: "1rem" }}
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={yup.object({
        division: yup.string(),
        aisle: yup.number().min(1),
      })}
    >
      {({ handleChange, values }) => (
        <Form>
          <WideSelectField
            onChange={handleChange}
            name="division"
            label="Division"
            options={divisionOptions}
            placeholder="Search for workplace"
          />
          <Field
            fullWidth
            id="aisle"
            type="number"
            name="aisle"
            value={values.aisle}
            placeholder="Aisle"
            component={TextField}
            onChange={handleChange}
          />
          <Button style={{ margin: "1rem 0" }} variant="outlined" type="submit">
            Update division
          </Button>
        </Form>
      )}
    </Formik>
  );
};

export default UpdatePlacements;
