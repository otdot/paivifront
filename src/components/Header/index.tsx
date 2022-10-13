import Navigation from "../Navigation";
import styles from "./Header.module.css";
import { Container } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/");
  };
  return (
    <header className={styles.header}>
      <Container>
        <div className={styles.container}>
          <h1 onClick={handleNavigate}>header</h1>
          <Navigation />
        </div>
      </Container>
    </header>
  );
};

export default Header;
