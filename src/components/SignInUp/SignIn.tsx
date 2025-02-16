import { Formik, Form, Field } from "formik";
import { TextField } from "./FormField";
import { Button } from "@mui/material";
import { LoginInput } from "../../Types";
import { setLoginData } from "../../state/userReducer";
import { useAppDispatch } from "../../hooks/redux";
import { useNavigate } from "react-router-dom";
import { login } from "../../services/login";
import AWN from "awesome-notifications";

type ResetForm = {resetForm: () => void};

const SignIn = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();


  const handleSubmit = async (
    values: LoginInput,
    {resetForm}: ResetForm,
  ) => {
    try {
      const res = await login(values);
      if (res?.token) {
        dispatch(setLoginData(res));
        resetForm();
        navigate("/market")
      }
    } catch (err) {
      console.log(`An error occurred while logging in ${err}`);
      new AWN().warning("Username or password seems to be incorrect.");
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
