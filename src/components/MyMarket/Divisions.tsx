import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import React from "react";
import { ProductPlacement } from "../../Types";

const Divisions = ({ divisions }: { divisions: ProductPlacement[] }) => {
  return (
    <TableContainer>
      <Table aria-label="Storage">
        <TableHead>
          <TableRow>
            <TableCell>Divison</TableCell>
            <TableCell>Aisle</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {divisions.map((division: ProductPlacement) => (
            <TableRow key={division.division}>
              <TableCell>{division.division}</TableCell>
              <TableCell>{division.aisle}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default Divisions;
