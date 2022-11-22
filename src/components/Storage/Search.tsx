import { Button, Grid, TextField } from "@mui/material";
import { Form, Formik } from "formik";
import React from "react";
import { Criteria, Searchvalues } from "../../Types";
import { WideSelectField } from "../Order/SelectField";

const Search = ({
  handleSubmit,
}: {
  handleSubmit: (
    values: Searchvalues,
    { resetForm }: { resetForm: () => void }
  ) => void;
}) => {
  const criteriaOptions = [
    { name: Criteria.product, id: "name" },
    { name: Criteria.division, id: "division" },
    { name: Criteria.supplier, id: "supplier" },
    { name: Criteria.lotnum, id: "lotnum" },
  ];

  return (
    <Formik
      enableReinitialize
      initialValues={{ keyword: "", field: "" }}
      onSubmit={handleSubmit}
    >
      {({ handleChange, handleReset, values }) => (
        <Form>
          <Grid
            style={{
              display: "flex",
              alignItems: "center",
            }}
            container
            spacing={3}
          >
            <Grid item xs={12} sm={4}>
              <TextField
                fullWidth
                id="keyword"
                label="Search value"
                variant="standard"
                value={values.keyword}
                style={{
                  paddingRight: "1rem",
                }}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <WideSelectField
                name="field"
                label="Search field"
                options={criteriaOptions}
                placeholder="Search for workplace"
                onChange={handleChange}
                value={values.field}
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Button style={{ margin: "0 1rem" }} type="submit">
                Search
              </Button>
              <Button
                onClick={() => handleReset()}
                variant="outlined"
                style={{ margin: "0 1rem" }}
                type="submit"
              >
                Refresh
              </Button>
            </Grid>
          </Grid>
        </Form>
      )}
    </Formik>
  );
};

export default Search;
