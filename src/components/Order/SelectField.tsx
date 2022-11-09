import {
  InputLabel,
  MenuItem,
  Select,
  Input,
  FormControl,
} from "@mui/material";
import { ErrorMessage, Field, FieldProps } from "formik";
import { useState } from "react";
import { Unit } from "../../Types";

interface ISelectField {
  label: string;
  name: string;
  options: Unit[] | string[];
  onChange: (event: any, child: any) => void;
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
        <Field fullWidth placeholder="Search for products" component={Input} />
        {options.map((option: string) => (
          <MenuItem key={option} value={option}>
            {option}
          </MenuItem>
        ))}
      </Field>
    </div>
  );
};

// export const SelectField = ({
//   label,
//   name,
//   options,
//   onChange,
// }: ISelectField) => {
//   return (
//     <FormControl fullWidth style={{ margin: "2rem 0" }}>
//       <InputLabel>{label}</InputLabel>
//       <Select onChange={onChange} label={label} name={name}>
//         <Field fullWidth placeholder="Search for products" component={Input} />
//         {options.map((option: any) => (
//           <MenuItem key={option} value={option}>
//             {option}
//           </MenuItem>
//         ))}
//       </Select>
//       <ErrorMessage name="error" />
//     </FormControl>
//   );
// };
