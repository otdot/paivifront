import { InputLabel, MenuItem, Select } from "@mui/material";
import { Field, FieldProps } from "formik";

interface ISelectField {
  label: string;
  name: string;
  options: any;
}

const FormikSelect = ({ field, ...props }: FieldProps) => (
  <Select {...field} {...props} />
);

export const SelectField = ({ label, name, options }: ISelectField) => {
  return (
    <>
      <InputLabel>{label}</InputLabel>
      <Field name={name} label={label} fullWidth component={FormikSelect}>
        {options.map((option: any) => (
          <MenuItem key={option}>{option}</MenuItem>
        ))}
      </Field>
    </>
  );
};
