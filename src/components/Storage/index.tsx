import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../../hooks/redux";
import { combineStorage, displayDate, sortArr } from "../../services/general";
import { StorageProductType } from "../../Types";

const Storage = () => {
  const storage = useAppSelector((state) => state.market.storage);
  const products: StorageProductType[] = sortArr(combineStorage(storage));
  const navigate = useNavigate();

  console.log(products);

  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: "0 1rem",
        }}
      >
        <Button onClick={() => navigate("/order")}>Order products</Button>
        <Button onClick={() => navigate("/order")}>
          Check products going Out of Date
        </Button>
      </div>
      <TableContainer>
        <Table aria-label="Storage">
          <TableHead>
            <TableRow>
              <TableCell>Lot number</TableCell>
              <TableCell>Product</TableCell>
              <TableCell>Amount</TableCell>
              <TableCell>Division</TableCell>
              <TableCell>Supplier</TableCell>
              <TableCell>Best Before</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {products.map((product: StorageProductType) => (
              <TableRow>
                <TableCell>{product.lotnum}</TableCell>
                <TableCell>{product.name}</TableCell>
                <TableCell>
                  {product.amount} {product.unit}
                </TableCell>
                <TableCell>{product.division}</TableCell>
                <TableCell>{product.supplier}</TableCell>
                <TableCell>
                  {product.bestbefore && displayDate(product.bestbefore)}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default Storage;
