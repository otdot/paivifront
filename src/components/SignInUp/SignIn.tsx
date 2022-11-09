import { Formik, Form, Field } from "formik";
import { TextField } from "./FormField";
import { Button } from "@mui/material";
import { LoginInput } from "../../Types";
import { setLoginData } from "../../state/userReducer";
import { useAppDispatch } from "../../hooks/redux";

const SignIn = () => {
  const dispatch = useAppDispatch();

  const handleSubmit = (
    values: LoginInput,
    { resetForm }: { resetForm: () => void }
  ) => {
    try {
      dispatch(setLoginData(values));
      resetForm();
    } catch (err) {
      console.log(`An error occurred while logging in ${err}`);
    }
  };

  return (
    <Formik initialValues={{ name: "", password: "" }} onSubmit={handleSubmit}>
      <Form style={{ margin: "1rem" }}>
        <Field
          name="name"
          placeholder="Username"
          type="text"
          component={TextField}
        />
        <Field
          name="password"
          placeholder="Password"
          type="password"
          component={TextField}
        />
        <Button variant="contained" type="submit">
          Sign in
        </Button>
      </Form>
    </Formik>
  );
};

export default SignIn;
