import React from "react";
import { useSelector } from "react-redux";
import ProductBox from "./ProductBox";
import { Product } from "./types/types";
import { Grid, Box } from "@material-ui/core";

const LeftColumn: React.FC = () => {
  const isSaved = useSelector((state: any) => state.getFormStatus);
  const post = useSelector((post: any) => post.getPost);

  const products = useSelector((state: any) => state.getPosts);
  const filteredProducts = products.filter(
    (product: Product, i: number) => i >= products.length - 3
  );
  const filteredAndSortedProducts = filteredProducts.reverse();

  return (
    <Grid container item xs={3} spacing={1} >
      <Box>
      {isSaved ? (
        <ProductBox
          key={1029388}
          product_id={post.product_id}
          img={post.img}
          title={post.tittle}
          about={post.about}
          price={post.price}
        /> )
        : null}
        {filteredAndSortedProducts.map((product: Product) => (
          <ProductBox
            key={product.product_id}
            product_id={product.product_id}
            img={product.img}
            title={product.tittle}
            about={product.about}
            price={product.price}
          />
        ))}
      </Box>
    </Grid>
  );
};

export default LeftColumn;
