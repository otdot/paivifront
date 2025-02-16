import { Tab } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { User } from "../../Types";
import styles from "./Header.module.css";
import Mainnavigation from "./Mainnavigation";
import ToggleableDrawer from "./ToggleableDrawer";
import navigations from "../../constants/navigations"
import { userLogout } from "../../state/userReducer";
import { set_market } from "../../state/marketReducer";


const Navigation = () => {
  const user: User = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const url =
  window.location.href.split("/")[window.location.href.split("/").length - 1];

  const handleLogout = () => {
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

  const phoneNavigations = navigations.phoneNavigations(navigate, handleLogout)
  const marketNavigations = navigations.marketNavigation(navigate)
  const signinNavigations = navigations.signinNavigation(navigate)
  
  return (
    <nav className={styles.container}>
        <Mainnavigation tabs={marketNavigations} />
        <>
          {user?.name && <ToggleableDrawer anchor="top" isOpen={false} tabs={phoneNavigations}  />}
          <div className={styles.mainnavigation}>
            <Mainnavigation tabs={user?.name ? phoneNavigations : signinNavigations} />
          </div>
        </>
    </nav>
  );
};

export default Navigation;
