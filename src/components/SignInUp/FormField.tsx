import { FieldProps, ErrorMessage } from "formik";
import { TextField as MuiTextField } from "@mui/material";
import { Typography } from "@mui/material";

interface TextProps extends FieldProps {
  name: string;
  label: string;
  placeholder: string;
  type: string;
}

export const TextField = ({ name, field, placeholder, type }: TextProps) => {
  return (
    <div style={{ marginBottom: "1rem", position: "relative" }}>
      <MuiTextField
        fullWidth
        {...field}
        type={type}
        placeholder={placeholder}
        variant="outlined"
      />
      <Typography style={{ color: "red" }}>
        <ErrorMessage name={field.name} />
      </Typography>
    </div>
  );
};
