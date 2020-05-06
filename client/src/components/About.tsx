import React from "react";
import { Container, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useSelector } from "react-redux";
import "typeface-roboto";
import img from "../images/passion.jpg";
import img2 from "../images/doge.jpg";

const About: React.FC = () => {
  const theme = useSelector((theme: any) => theme.getTheme);

  const useStyles = makeStyles({
    root: {
      padding: "5em 3em",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      backgroundColor: theme.secondary,
    },
    text: {
      border: '1px solid white',
      opacity: "0.7",
      fontFamily: "Akzidenz Grotesk BQ Light,Helvetica,Arial",
      fontSize: "15px",
      color: "white",
      padding: "3em",
    },
    img: {
      border: '1px solid white',
      opacity: "0.9",
      width: "50%",
    },
    container: { 
      display: "flex", 
      justifyContent: "center" 
    },
    logo: {
      fontSize: "2.55em",
      marginTop: "0.3em",
      marginBottom: "2em",
    },
  });

  const classes = useStyles();

  return (
    <Container className={classes.root} maxWidth="lg">
      <Container maxWidth="md" className={classes.container}>
        <Typography variant="h3" style={{ fontWeight: 300, color: "white" }}>
          About Umbrella
        </Typography>
      </Container>
      <Typography className={classes.logo}>
      </Typography>
      <Container maxWidth="md" className={classes.container}>
        <img
          className={classes.img}
          src={img}
          alt="two people standing on sidewalk"
        />
        <Typography className={classes.text} variant="overline">
          A prototype web application with where you can create, update and
          destroy products (post like), built with React, Redux, TypeScript,
          Yup, Formik, and other JS libraries to perform in the best possible
          way.
        </Typography>
      </Container>
      <Container
        maxWidth="md"
        className={classes.container}
        style={{ flexDirection: "row-reverse" }}
      >
        <img
          className={classes.img}
          src={img2}
          alt="two people standing on sidewalk"
        />
        <Typography className={classes.text} variant="overline">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
          maximus ex eleifend efficitur imperdiet. Curabitur dui elit, iaculis
          vel enim in, interdum elementum ligula.
        </Typography>
      </Container>
      <Typography style={{ fontSize: "0.5em", alignSelf: "start" }}>
        Images are from{" "}
        <a href="https://www.unsplash.com" target="_blank">
          unsplash.com
        </a>
        <br />
        <a href="https://unsplash.com/photos/TamMbr4okv4" target="_blank">
          Photo 1
        </a>
        <a href="https://unsplash.com/photos/f81ym3dE5N4" target="_blank">
          Photo 2
        </a>
      </Typography>
    </Container>
  );
};

export default About;
