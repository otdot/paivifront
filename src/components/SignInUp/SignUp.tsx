import { Formik, Form, Field } from "formik";
import { TextField } from "./FormField";
import { Button } from "@mui/material";
import * as yup from "yup";
import axios from "axios";
import { NewUser } from "../../Types";
import AWN from "awesome-notifications";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const navigate = useNavigate();

  const handleSubmit = async (
    values: NewUser,
    { resetForm }: { resetForm: any }
  ) => {
    try {
      const res = await axios.post("/users", values);
      if (res.status === 200) {
        new AWN().success("New user created!", {
          durations: { success: 3000 },
        });
        navigate("/signin");
        resetForm();
      }
    } catch (err: unknown) {
      let msg: string = "User creation failed";
      console.log(err);
      new AWN().alert(msg);
    }
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
        name: yup.string().min(1).max(30),
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

export default SignUp;
