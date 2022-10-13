import { Formik, Form, Field } from "formik";
import { TextField } from "./FormField";
import { Button } from "@mui/material";
import * as yup from "yup";
import { useState } from "react";
import axios from "axios";
import { NewUser, LoginInput } from "../../Types";

const SignIn = () => {
  const handleSubmit = (values: LoginInput) => {
    if (values.password === "secret") {
      console.log("logged in as ", values.username);
    }
  };
  return (
    <Formik
      initialValues={{ username: "", password: "" }}
      onSubmit={handleSubmit}
    >
      <Form style={{ margin: "1rem" }}>
        <Field
          name="username"
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

const SignUp = () => {
  const handleSubmit = async (values: NewUser) => {
    console.log(values);

    await axios.post("/users", values);
  };

  return (
    <Formik
      initialValues={{
        name: "",
        position: "",
        password: "",
        confirmpassword: "",
      }}
      onSubmit={handleSubmit}
      validationSchema={yup.object({
        username: yup.string().min(1).max(30),
        position: yup.string().min(5).max(10),
        password: yup.string().min(5).max(50),
        confirmpassword: yup
          .string()
          .oneOf([yup.ref("password"), null])
          .required("Password and confirm password must match"),
      })}
    >
      <Form style={{ margin: "1rem" }}>
        <Field
          name="name"
          placeholder="Username"
          type="text"
          component={TextField}
        />
        <Field
          name="position"
          placeholder="Position"
          type="text"
          component={TextField}
        />
        <Field
          name="password"
          placeholder="Password"
          type="password"
          component={TextField}
        />
        <Field
          name="confirmpassword"
          placeholder="Confirm password"
          type="password"
          component={TextField}
        />
        <Button variant="contained" type="submit">
          Sign up
        </Button>
      </Form>
    </Formik>
  );
};

const SignInUp = () => {
  const [switchModal, setSwitchModal] = useState<boolean>(false);
  return (
    <>
      {switchModal ? <SignUp /> : <SignIn />}
      <Button onClick={() => setSwitchModal(false)}>Sign In</Button>
      <Button onClick={() => setSwitchModal(true)}>Sign Up</Button>
    </>
  );
};

export default SignInUp;
