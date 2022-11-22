import { Tab } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../../hooks/redux";
import { User } from "../../Types";
import styles from "./Header.module.css";
import Mainnavigation from "./Mainnavigation";
import MainnavigationforPhone from "./MainnavigationforPhone";

const Navigation = () => {
  const user: User = useAppSelector((state) => state.user);
  const navigate = useNavigate();
  const url =
    window.location.href.split("/")[window.location.href.split("/").length - 1];

  return (
    <nav className={styles.container}>
      <Tab
        style={
          url === ""
            ? { color: "#002884", fontSize: "18px" }
            : { fontSize: "18px" }
        }
        className={styles.tab}
        label="Paivi Markets"
        onClick={() => navigate("/")}
      />
      {user.name !== null ? (
        <>
          <MainnavigationforPhone url={url} />
          <div className={styles.mainnavigation}>
            <Mainnavigation url={url} />
          </div>
        </>
      ) : (
        <Tab
          style={
            url === "signin"
              ? { color: "#002884", fontSize: "18px" }
              : { fontSize: "18px" }
          }
          className={styles.tab}
          label="Login"
          onClick={() => navigate("/signin")}
        />
      )}
    </nav>
  );
};

export default Navigation;
