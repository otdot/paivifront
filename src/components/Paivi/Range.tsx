import React, { useState } from "react";
import classes from "./Paivi.module.css";
import Filter1Icon from "@mui/icons-material/Filter1";
import Filter2Icon from "@mui/icons-material/Filter2";
import Filter3Icon from "@mui/icons-material/Filter3";
import Filter4Icon from "@mui/icons-material/Filter4";
import Filter5Icon from "@mui/icons-material/Filter5";
import Filter6Icon from "@mui/icons-material/Filter6";
import Filter7Icon from "@mui/icons-material/Filter7";
import Filter8Icon from "@mui/icons-material/Filter8";
import Filter9Icon from "@mui/icons-material/Filter9";

const Range = ({
  range,
  setRange,
}: {
  range: number;
  setRange: (num: number) => void;
}) => {
  return (
    <div className={classes.numcontainer}>
      <Filter1Icon
        style={range === 1 ? { color: "#3f51b5" } : { color: "000000" }}
        onClick={() => setRange(1)}
        className={classes.num}
        sx={{ fontSize: 40 }}
      />
      <Filter2Icon
        style={range === 2 ? { color: "#3f51b5" } : { color: "000000" }}
        onClick={() => setRange(2)}
        className={classes.num}
        sx={{ fontSize: 40 }}
      />
      <Filter3Icon
        style={range === 3 ? { color: "#3f51b5" } : { color: "000000" }}
        onClick={() => setRange(3)}
        className={classes.num}
        sx={{ fontSize: 40 }}
      />
      <Filter4Icon
        style={range === 4 ? { color: "#3f51b5" } : { color: "000000" }}
        onClick={() => setRange(4)}
        className={classes.num}
        sx={{ fontSize: 40 }}
      />
      <Filter5Icon
        style={range === 5 ? { color: "#3f51b5" } : { color: "000000" }}
        onClick={() => setRange(5)}
        className={classes.num}
        sx={{ fontSize: 40 }}
      />
      <Filter6Icon
        style={range === 6 ? { color: "#3f51b5" } : { color: "000000" }}
        onClick={() => setRange(6)}
        className={classes.num}
        sx={{ fontSize: 40 }}
      />
      <Filter7Icon
        style={range === 7 ? { color: "#3f51b5" } : { color: "000000" }}
        onClick={() => setRange(7)}
        className={classes.num}
        sx={{ fontSize: 40 }}
      />
      <Filter8Icon
        style={range === 8 ? { color: "#3f51b5" } : { color: "000000" }}
        onClick={() => setRange(8)}
        className={classes.num}
        sx={{ fontSize: 40 }}
      />
      <Filter9Icon
        style={range === 9 ? { color: "#3f51b5" } : { color: "000000" }}
        onClick={() => setRange(9)}
        className={classes.num}
        sx={{ fontSize: 40 }}
      />
    </div>
  );
};

export default Range;
