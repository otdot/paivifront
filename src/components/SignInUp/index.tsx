import styled from "@emotion/styled";
import { Button, Tab, Tabs } from "@mui/material";
import { Container } from "@mui/system";
import { useState } from "react";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import styles from "./Signinup.module.css";

const SignInUp = () => {
  const [switchModal, setSwitchModal] = useState<string>("signin");

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setSwitchModal(newValue);
  };

  return (
    <Container maxWidth="sm">
      {switchModal === "signup" ? (
        <SignUp setSwitchModal={setSwitchModal} />
      ) : (
        <SignIn />
      )}
      <Tabs
        className={styles.tabscontainer}
        onChange={handleChange}
        value={switchModal}
      >
        <Tab className={styles.signin} value="signin" label="Sign In" />
        <Tab className={styles.signup} value="signup" label="Sign Up" />
      </Tabs>
    </Container>
  );
};

export default SignInUp;
