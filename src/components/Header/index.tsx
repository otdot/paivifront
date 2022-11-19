import Navigation from "./Navigation";
import { Container, Tab } from "@mui/material";
import { useNavigate } from "react-router-dom";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <Container>
        <Navigation />
      </Container>
    </header>
  );
};

export default Header;
