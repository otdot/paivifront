import { Button } from "@mui/material";
import { useState } from "react";
import SignIn from "./SignIn";
import SignUp from "./SignUp";

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
