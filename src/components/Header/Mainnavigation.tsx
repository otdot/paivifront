import { Tab } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../hooks/redux";
import { set_market } from "../../state/marketReducer";
import { userLogout } from "../../state/userReducer";
import styles from "./Header.module.css";

const Mainnavigation = ({ url }: { url: string }) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

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
    <>
      <Tab
        style={
          url === "market"
            ? { color: "#002884", fontSize: "18px" }
            : { fontSize: "18px" }
        }
        className={styles.tab}
        label="MyMarket"
        onClick={() => navigate("/market")}
      />
      <Tab
        style={
          url === "storage"
            ? { color: "#002884", fontSize: "18px" }
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
    </>
  );
};

export default Mainnavigation;
