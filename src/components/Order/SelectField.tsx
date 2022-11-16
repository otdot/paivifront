import {
  InputLabel,
  MenuItem,
  Select,
  Input,
  FormControl,
} from "@mui/material";
import { ErrorMessage, Field, FieldProps } from "formik";
import { useState } from "react";
import { IMarket, Unit } from "../../Types";

interface ISelectField {
  label: string;
  name: string;
  options: Unit[] | string[];
  onChange: (event: any, child: any) => void;
  placeholder: string;
}

type MarketOptions = Pick<IMarket, "name" | "id">;

interface IWideSelectField {
  label: string;
  name: string;
  options: MarketOptions[];
  onChange: (event: any, child: any) => void;
  placeholder: string;
}

interface ISelectNumber {
  name: string;
  label: string;
  onChange: (e: any) => void;
}

//value doesnt change on this component

export const SelectNumber = ({ name, label, onChange }: ISelectNumber) => {
  return (
    <div style={{ marginBottom: "1rem" }}>
      <InputLabel>{label}</InputLabel>
      <Field
        fullWidth
        name={name}
        label={label}
        type="number"
        component={Input}
        onChange={onChange}
      />
    </div>
  );
};

const FormikSelect = ({ field, ...props }: FieldProps) => (
  <Select {...field} {...props} />
);

export const SelectField = ({
  label,
  name,
  options,
  onChange,
  placeholder,
}: ISelectField) => {
  return (
    <div style={{ margin: "1rem 0" }}>
      <InputLabel>{label}</InputLabel>
      <Field
        name={name}
        label={label}
        fullWidth
        component={FormikSelect}
        onChange={onChange}
        input={<Input />}
      >
        <Field fullWidth placeholder={placeholder} component={Input} />
        {options.map((option: string) => (
          <MenuItem key={option} value={option}>
            {option}
          </MenuItem>
        ))}
      </Field>
    </div>
  );
};

export const WideSelectField = ({
  label,
  name,
  options,
  onChange,
}: IWideSelectField) => {
  return (
    <FormControl fullWidth style={{ margin: "2rem 0" }}>
      <InputLabel>{label}</InputLabel>
      <Select defaultValue="" onChange={onChange} label={label} name={name}>
        {options.map((option: any) => (
          <MenuItem key={option.id} value={option.id}>
            {option.name}
          </MenuItem>
        ))}
      </Select>
      <ErrorMessage name="error" />
    </FormControl>
  );
};
