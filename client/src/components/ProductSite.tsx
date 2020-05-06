import React, { useState, useEffect } from "react";
import { Container, Box, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import {useSelector} from 'react-redux'

const ProductSite: React.FC = (props: any) => {
  const theme = useSelector((theme: any) => theme.getTheme)
  const [isLoading, setIsLoading] = useState(true);
  const [post, setPost] = useState({
    tittle: "",
    price: "",
    about: "",
    img: "",
    product_id: ""
  });

  useEffect(() => {
    const PORT = process.env.PORT  || 5000
    const databaseURL = `http://localhost:${PORT}/product${props.match.url}`;

    const callBackendApi = async () => {
      const response = await fetch(databaseURL);
      const body = await response.json();

      if (response.status !== 200) {
        throw Error(body.status);
      }

      return body;
    };

    if (isLoading) {
      callBackendApi()
        .then(res => {
          setPost(res[0]);
        })
        .catch(err => console.log(err));
      return setIsLoading(false);
    }
  }, [isLoading]);

  const useStyles = makeStyles({
    root: {
      padding: '5em 3em',
      display: "flex",
      height: '100vh',
      backgroundColor: theme.secondary,
    },
    media: {
      width: "100%",
      objectFit: "contain",
      maxWidth: 550,
      maxHeight: 700
    },
    mediaContainter: {
      display: "flex",
      width: "60%",
      justifyContent: "center",
      alignItems: "self-start"
    },
    info: {
      width: "40%",
      marginLeft: "2em"
    },
    priceContainer: {
      fontSize: "1rem"
    },
    price: {
      fontWeight: 600
    }
  });
  const classes = useStyles();

  return (
    <Container maxWidth="lg" style={{padding: 0}}>
      <Box className={classes.root}>
        <Box className={classes.mediaContainter}>
          <img className={classes.media} src={post.img} alt={post.about}/>
        </Box>
        <Box className={classes.info}>
          <Typography variant="h4">
            {post.tittle}
            <hr />
          </Typography>
          <Typography className={classes.priceContainer} variant="overline">
            Price: <span className={classes.price}>${post.price}</span>
          </Typography>
          <Typography>{post.about}</Typography>
        </Box>
      </Box>
    </Container>
  );
};

export default ProductSite;
