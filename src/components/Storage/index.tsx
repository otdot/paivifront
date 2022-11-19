import { Grid } from "@mui/material";
import { useState } from "react";
import { useAppSelector } from "../../hooks/redux";
import { combineStorage, sortArr } from "../../services/general";
import { Searchvalues, StorageProductType } from "../../Types";
import MethodLinks from "./MethodLinks";
import Search from "./Search";
import StorageTable from "./StorageTable";

const Storage = () => {
  const storage = useAppSelector((state) => state.market.storage);
  const products: StorageProductType[] = sortArr(combineStorage(storage));
  const [values, setValues] = useState<Searchvalues>({
    keyword: "",
    field: "",
  });
  const handleSubmit = (
    values: Searchvalues,
    { resetForm }: { resetForm: () => void }
  ) => {
    setValues(values);
    resetForm();
  };

  if (!window.localStorage.getItem("loggedUser")) {
    return (
      <div>
        <p>Please login</p>
      </div>
    );
  }

  return (
    <>
      <Grid container rowSpacing={2} columnSpacing={2}>
        <Grid item xs={12} sm={10}>
          <Search handleSubmit={handleSubmit} />
        </Grid>
        <Grid item xs={12}>
          <MethodLinks />
        </Grid>
      </Grid>
      <StorageTable products={products} values={values} />
    </>
  );
};

export default Storage;
