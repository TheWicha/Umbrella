import React from "react";
import ProductBox from "./ProductBox";
import { useSelector } from "react-redux";
import { Product } from "./types/types";
import { Grid, Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const ShowAllProducts:React.FC = () => {
  const products = useSelector((state: any) => state.getPosts);
  const isSaved = useSelector((state: any) => state.getFormStatus);
  const post = useSelector((post: any) => post.getPost);

  const useStyles = makeStyles({
    flex: {
      display: "flex",
      flexDirection: "row",
      flexWrap: "wrap",
      alignItems: "space-around"
    }
  });
  const classes = useStyles();

  return (
    <Box>
      <Grid className={classes.flex} item xs={12}>
        {products.map((product: Product) => (
          <ProductBox
            key={product.product_id}
            product_id={product.product_id}
            img={product.img}
            title={product.tittle}
            about={product.about}
            price={product.price}
          />
        ))}
        {isSaved ? (
          <ProductBox
            key={1029388}
            product_id={post.product_id}
            img={post.img}
            title={post.tittle}
            about={post.about}
            price={post.price}
          />
        ) : null}
      </Grid>
    </Box>
  );
};

export default ShowAllProducts;
