import { Button, Drawer } from "@mui/material";
import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import Mainnavigation, { TabProps } from "./Mainnavigation";
import styles from "./Header.module.css";

export type Anchor = "top" | "bottom" | "left" | "right";

export type ToggleableDrawerProps = {
  anchor: Anchor;
  isOpen: boolean;
  tabs: TabProps[];
};

const ToggleableDrawer = ({ anchor, isOpen, tabs }: ToggleableDrawerProps) => {
  const [open, setOpen] = useState<boolean>(isOpen);

  return (
    <div className={styles.phonenavigation}>
      <Button onClick={() => setOpen(!open)}>
        <MenuIcon />
      </Button>
      <Drawer anchor={anchor} open={open} onClose={() => setOpen(!open)}>
        <Mainnavigation tabs={tabs} />
      </Drawer>
    </div>
  );
};

export default ToggleableDrawer;
