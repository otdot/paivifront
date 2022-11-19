import { Button, MenuItem, Select, TextField } from "@mui/material";
import AWN from "awesome-notifications";
import { Field, Form, Formik } from "formik";
import React from "react";
import * as yup from "yup";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { updateDivisions } from "../../state/marketReducer";
import { Divisions, ProductPlacement } from "../../Types";
import { WideSelectField } from "../Order/SelectField";

export const divisionOptions = [
  Divisions.fruitAndVegetables,
  Divisions.dryAndProcessedFood,
  Divisions.meatAndFish,
  Divisions.dairy,
  Divisions.bread,
  Divisions.preparedFoods,
  Divisions.utilityGoods,
  Divisions.frozenProducts,
  Divisions.beverages,
];

const UpdatePlacements = () => {
  const dispatch = useAppDispatch();
  const initialValues: ProductPlacement = { division: "", aisle: 1 };
  const marketid = useAppSelector((state) => state.market.id);

  const handleSubmit = async (
    values: ProductPlacement,
    { resetForm }: { resetForm: () => void }
  ) => {
    console.log(values);
    dispatch(updateDivisions(values, marketid));
    resetForm();
  };

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
      {({ handleChange, handleReset, values }) => (
        <Form>
          <div style={{ padding: "1rem 0" }}>
            <WideSelectField
              onChange={handleChange}
              name="division"
              label="Division"
              options={divisionOptions}
              placeholder="Search for workplace"
              value={values.division}
            />
          </div>
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
