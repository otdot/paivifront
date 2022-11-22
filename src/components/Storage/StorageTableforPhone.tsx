import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { displayDate, filterArr } from "../../services/general";
import { Searchvalues, StorageProductType } from "../../Types";
import styles from "./Storage.module.css";

const StorageTableforPhone = ({
  products,
  values,
}: {
  products: StorageProductType[];
  values: Searchvalues;
}) => {
  return (
    <TableContainer className={styles.phonetable}>
      <Table aria-label="Storage">
        <TableHead>
          <TableRow>
            <TableCell>Product</TableCell>
            <TableCell>Amount</TableCell>
            <TableCell>Best Before</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {filterArr(products, values).map((product: StorageProductType) => (
            <TableRow key={product._id}>
              <TableCell>{product.name}</TableCell>
              <TableCell>
                {product.amount} {product.unit}
              </TableCell>
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

export default StorageTableforPhone;
