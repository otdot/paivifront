import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import React from "react";
import { displayDate, filterArr } from "../../services/general";
import { Searchvalues, StorageProductType } from "../../Types";

const StorageTable = ({
  products,
  values,
}: {
  products: StorageProductType[];
  values: Searchvalues;
}) => {
  return (
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
          {filterArr(products, values).map((product: StorageProductType) => (
            <TableRow key={product._id}>
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
  );
};

export default StorageTable;
