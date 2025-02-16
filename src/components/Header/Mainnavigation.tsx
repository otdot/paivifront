import { Tab } from "@mui/material";
import styles from "./Header.module.css";

export interface TabProps {
  className: (typeof styles)[keyof typeof styles];
  label: string;
  onClick: () => void;
}

interface MainnavigationProps {
  tabs: TabProps[];
}

const Mainnavigation = ({ tabs }: MainnavigationProps) => {
  const url =
    window.location.href.split("/")[window.location.href.split("/").length - 1];

  return (
    <>
      {tabs.map((tab) => {
        const isActiveTab = tab.label
          .replaceAll(" ", "")
          .toLowerCase()
          .includes(url);
        return (
          <Tab
            style={
              isActiveTab
                ? { color: "#002884", fontSize: "18px" }
                : { fontSize: "18px" }
            }
            {...tab}
          />
        );
      })}
    </>
  );
};

export default Mainnavigation;
