import { Formik, Form, Field } from "formik";
import { TextField } from "./FormField";
import { Button } from "@mui/material";
import * as yup from "yup";
import axios from "axios";
import { IMarket, NewUser, Positions } from "../../Types";
import AWN from "awesome-notifications";
import { useEffect, useState } from "react";
import { getMarkets } from "../../services/market";
import { WideSelectField } from "../Order/SelectField";

const SignUp = ({
  setSwitchModal,
}: {
  setSwitchModal: (newValue: string) => void;
}) => {
  const [markets, setMarkets] = useState<IMarket[]>([]);

  useEffect(() => {
    const initializeMarkets = async () => {
      const markets = await getMarkets();
      setMarkets(markets);
    };
    initializeMarkets();
  }, []);

  const handleSubmit = async (
    values: NewUser,
    { resetForm }: { resetForm: any }
  ) => {
    try {
      const { market } = values;
      const res = await axios.post("/users", values);
      if (res) {
        const updateworkres = await axios.patch(`/users/${res.data.id}`, {
          id: market,
        });
        if (updateworkres.status === 200) {
          new AWN().success("New user created!", {
            durations: { success: 3000 },
          });
          setTimeout(() => {
            setSwitchModal("signin");
          }, 1500);
          resetForm();
        }
      }
    } catch (err: unknown) {
      let msg: string = "User creation failed";
      console.log(err);
      new AWN().alert(msg);
    }
  };

  const positionoptions = [
    Positions.storeOwner,
    Positions.supervisor,
    Positions.salesPerson,
  ];

  return (
    <Formik
      initialValues={{
        name: "",
        position: "",
        password: "",
        confirmpassword: "",
        market: "",
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
        market: yup.string().required(),
      })}
    >
      {({ handleChange, values }) => (
        <Form style={{ margin: "1rem" }}>
          <Field
            name="name"
            placeholder="Username"
            type="text"
            component={TextField}
          />
          <div style={{ marginBottom: "1rem" }}>
            <WideSelectField
              name="position"
              label="Position"
              options={positionoptions}
              placeholder="Add Position"
              onChange={handleChange}
              value={values.position}
            />
          </div>
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
          <WideSelectField
            name="market"
            label="workplace"
            options={markets.map(({ name, id }) => ({ name, id }))}
            placeholder="Search for workplace"
            onChange={handleChange}
            value={values.market}
          />
          <Button
            style={{ marginTop: "1rem" }}
            variant="contained"
            type="submit"
          >
            Sign up
          </Button>
        </Form>
      )}
    </Formik>
  );
};

export default SignUp;
