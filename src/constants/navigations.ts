import { NavigateFunction } from "react-router-dom";
import styles from "../components/Header/Header.module.css";
import { TabProps } from "../components/Header/Mainnavigation";

const phoneNavigations = (
  navigate: NavigateFunction,
  handleLogout: () => void
): TabProps[] => {
  return [
    {
      label: "MyMarket",
      className: styles.tab,
      onClick: () => navigate("/market"),
    },
    {
      label: "Storage",
      className: styles.tab,
      onClick: () => navigate("/storage"),
    },
    {
      label: "Logout",
      className: styles.tab,
      onClick: () => handleLogout(),
    },
  ];
};

const storageNavigations = (navigate: NavigateFunction) => {
  return [
    {
      label: "Order",
      className: styles.tab,
      onClick: () => navigate("/order"),
    },
    {
      label: "Storage",
      className: styles.tab,
      onClick: () => navigate("/storage"),
    },
    {
      label: "Expired products",
      className: styles.tab,
      onClick: () => navigate("/expiredproducts"),
    },
  ];
};

const marketNavigation = (navigate: NavigateFunction) => {
  return [
    {
      label: "Paivi Markets",
      className: styles.tab,
      onClick: () => navigate("/"),
    },
  ];
};

const signinNavigation = (navigate: NavigateFunction) => {
  return [
    {
      label: "Login",
      className: styles.tab,
      onClick: () => navigate("/signin"),
    },
  ];
};

const navigations = {
  phoneNavigations,
  storageNavigations,
  marketNavigation,
  signinNavigation,
};

export default navigations;
