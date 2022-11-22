import { Button, Drawer } from "@mui/material";
import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import Mainnavigation from "./Mainnavigation";
import styles from "./Header.module.css";

const MainnavigationforPhone = ({ url }: { url: string }) => {
  const [drawer, setDrawer] = useState({ name: "top", open: false });
  return (
    <div className={styles.phonenavigation}>
      <Button onClick={() => setDrawer({ name: "top", open: !drawer.open })}>
        <MenuIcon />
      </Button>
      <Drawer
        anchor="top"
        open={drawer.open}
        onClose={() => setDrawer({ name: "top", open: !drawer.open })}
      >
        <Mainnavigation url={url} />
      </Drawer>
    </div>
  );
};

export default MainnavigationforPhone;
