import { Button, TextField } from "@mui/material";
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
        <Form
          style={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <div style={{ flex: 1 }}>
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
          </div>
          <div style={{ flex: 1 }}>
            <WideSelectField
              name="field"
              label="Search field"
              options={criteriaOptions}
              placeholder="Search for workplace"
              onChange={handleChange}
              value={values.field}
            />
          </div>
          <div style={{ flex: 1 }}>
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
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default Search;
