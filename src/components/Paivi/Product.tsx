import {
  Button,
  Card,
  CardActions,
  CardContent,
  Chip,
  Typography,
} from "@mui/material";
import AWN from "awesome-notifications";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { displayDate } from "../../services/general";
import { removeStorageProduct } from "../../services/product";
import { initializeMarket } from "../../state/marketReducer";
import { StorageProductType } from "../../Types";
import axios from "axios";

const Product = ({ product }: { product: StorageProductType }) => {
  const dispatch = useAppDispatch();
  const productplacements = useAppSelector(
    (state) => state.market.productPlacements
  );
  const aisle = productplacements.find(
    (placement) => placement.division === product.division
  );

  const removeSingleStorageProduct = async () => {
    try {
      await removeStorageProduct([product._id]);
      setTimeout(() => {
        dispatch(initializeMarket());
      }, 250);
    } catch (err) {
      let msg = "Couldn't update market division";
      if (axios.isAxiosError(err)) {
        msg = ` ${err?.response?.data}`;
      }
      new AWN().alert(msg);
    }
  };

  return (
    <div>
      <Card variant="outlined" style={{ padding: "0.5rem" }}>
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            {product.division}
          </Typography>
          <Typography variant="h5" component="div">
            {product.name}
          </Typography>
          <Typography variant="overline" component="div">
            Best before {displayDate(product.bestbefore)}
          </Typography>
          <div
            style={{ marginTop: "0.25rem", marginBottom: "1rem" }}
            color="text.secondary"
          >
            Amount{" "}
            <Chip
              label={`${product.amount} ${product.unit}`}
              variant="outlined"
            />
          </div>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            {aisle
              ? `Aisle ${aisle.aisle}`
              : `No specified aisle for ${product.division} products`}
          </Typography>
          <Typography variant="body2">
            Save well-preserved products for breadline.
          </Typography>
        </CardContent>
        <CardActions>
          <Button
            onClick={removeSingleStorageProduct}
            size="small"
            variant="outlined"
            color="error"
          >
            Remove Product
          </Button>
        </CardActions>
      </Card>
    </div>
  );
};

export default Product;
