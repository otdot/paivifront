import Navigation from "./Navigation";
import { Container } from "@mui/material";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <Container style={{ margin: "0 1rem" }} maxWidth="md">
        <Navigation />
      </Container>
    </header>
  );
};

export default Header;
