import React from "react";
import { Grid} from "@material-ui/core";
import ShowAllProducts from "./ShowAllProducts";


const CenterColumn: React.FC = () => {
  return (
    <Grid container item xs={9} spacing={1}>
      <ShowAllProducts />
    </Grid>
  );
};

export default CenterColumn;
