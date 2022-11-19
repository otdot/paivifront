import { Tab } from "@mui/material";
import { fontSize } from "@mui/system";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { set_market } from "../../state/marketReducer";
import { userLogout } from "../../state/userReducer";
import { User } from "../../Types";
import styles from "./Header.module.css";

const Navigation = () => {
  const user: User = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const url =
    window.location.href.split("/")[window.location.href.split("/").length - 1];

  const handleLogout = () => {
    console.log("logging out");
    dispatch(userLogout());
    dispatch(
      set_market({
        name: "",
        personnel: [],
        productPlacements: [],
        storage: [],
        id: "",
      })
    );
  };

  return (
    <nav className={styles.container}>
      <div>
        <Tab
          style={
            url === ""
              ? { color: "#3f51b5", fontSize: "18px" }
              : { fontSize: "18px" }
          }
          className={styles.tab}
          label="Paivi Markets"
          onClick={() => navigate("/")}
        />
      </div>
      {user.name !== null ? (
        <div>
          <Tab
            style={
              url === "market"
                ? { color: "#3f51b5", fontSize: "18px" }
                : { fontSize: "18px" }
            }
            className={styles.tab}
            label="MyMarket"
            onClick={() => navigate("/market")}
          />
          <Tab
            style={
              url === "storage"
                ? { color: "#3f51b5", fontSize: "18px" }
                : { fontSize: "18px" }
            }
            className={styles.tab}
            label="Storage"
            onClick={() => navigate("/storage")}
          />
          <Tab
            style={{ fontSize: "18px" }}
            className={styles.tab}
            label="Logout"
            onClick={handleLogout}
          />
        </div>
      ) : (
        <Tab
          style={
            url === "signin"
              ? { color: "#3f51b5", fontSize: "18px" }
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
