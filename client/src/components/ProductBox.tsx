import React, { useState, useEffect } from "react";
import { ProductBoxProps } from "./types/types";
import { makeStyles } from "@material-ui/core/styles";
import { NavLink } from "react-router-dom";
import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Typography
} from "@material-ui/core";

const ProductBox: React.FC<ProductBoxProps> = (props: ProductBoxProps) => {
  const useStyles = makeStyles({
    card: {
      width: 210,
      marginTop: 40,
      marginLeft: 12,
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between"
    },
    media: {
      height: 140
    },
    price: {
      marginLeft: 10,
      fontWeight: 600,
      paddingTop: 0
    }
  });

  const classes = useStyles();
  const [about, setAbout] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const url = props.product_id;

  const trimmer = (text: string) => {
    if (text.length > 35) {
      let trimmed = text.substring(0, 35).trim();
      return setAbout(`${trimmed}...`);
    }
    return setAbout(text);
  };

  useEffect(() => {
    if (isLoading) {
      return trimmer(props.about);
    }
    setIsLoading(false);
  }, [isLoading, props.about]);

  return (
    <Card className={classes.card}>
      <NavLink to={url || ''}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={props.img}
            title={props.about}
          />
          <CardContent>
            <Typography
              style={{ fontSize: "0.8rem" }}
              gutterBottom
              variant="body1"
              component="h2"
            >
              {props.title}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {about}
            </Typography>
          </CardContent>
        </CardActionArea>
      </NavLink>
      <CardActions>
        <Typography className={classes.price} color="primary">
          {props.price}$
        </Typography>
      </CardActions>
    </Card>
  );
};

export default ProductBox;
