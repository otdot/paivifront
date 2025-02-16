import { Button, Drawer } from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Mainnavigation from "../Header/Mainnavigation";
import { Anchor } from "../Header/ToggleableDrawer";
import { useState } from "react";
import styles from "./DrawerNav.module.css";
import navigations from "../../constants/navigations";
import { useNavigate } from "react-router-dom";

export type DrawerNavProps = {
  anchor: Anchor;
  isOpen: boolean;
};

const DrawerNav: React.FC<DrawerNavProps> = ({ anchor, isOpen }) => {
  const [open, setOpen] = useState<boolean>(isOpen);
  const navigate = useNavigate();

  const tabs = navigations.storageNavigations(navigate);

  return (
    <div>
      <div
        className={
          open ? styles.drawerNavOpenButton : styles.drawerNavClosedButton
        }
      >
        <Button onClick={() => setOpen(!open)}>
          {open ? <ArrowBackIosIcon /> : <ArrowForwardIosIcon />}
        </Button>
      </div>
      <Drawer
        sx={{
          width: "10rem",
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: "10rem",
            boxSizing: "border-box",
          },
        }}
        variant="persistent"
        anchor={anchor}
        open={open}
      >
        <Mainnavigation tabs={tabs} />
      </Drawer>
    </div>
  );
};

export default DrawerNav;
