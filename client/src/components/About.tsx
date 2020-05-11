import React from "react";
import { Container, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useSelector } from "react-redux";
import "typeface-roboto";

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
      fontFamily: "Akzidenz Grotesk BQ Light,Helvetica,Arial",
      fontSize: "17px",
      color: "white",
      padding: "1em",
    },
    head:{
      paddingBottom: '1.1em',
      fontWeight: 300,
      color: "white"
    }

  });

  const classes = useStyles();

  return (
    <Container className={classes.root} maxWidth="lg">
      <Container maxWidth="md">
        <Typography variant="h4" className={classes.head}>
          About Umbrella
        </Typography>
        <Typography variant="body1" className={classes.text}>
          Umbrella is a prototype web application with where you can create, update and
          destroy products (post like), built with React, Redux, TypeScript,
          Yup, Formik, and other JS libraries to perform in the best possible
          way.
        </Typography>
        <br  />
        <Typography variant="body1" className={classes.text}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
          aliquet velit quis enim aliquet, nec convallis tortor mollis. Proin
          justo tortor, sollicitudin ac ultrices eu, cursus luctus magna. Donec
          viverra sit amet nunc eu hendrerit. Maecenas condimentum nec nibh sit
          amet lacinia. Quisque odio eros, dignissim quis arcu eget, maximus
          posuere nibh. Nunc blandit elit neque, laoreet tincidunt nulla luctus
          eu. Duis vitae ex id enim pulvinar luctus. Ut commodo sed sem id
          varius. Duis nec magna ut ante efficitur ultricies. Nulla eget iaculis
          felis, ac suscipit enim. Cras quis consequat diam. Maecenas sit amet
          ex dictum nibh tincidunt consectetur eu quis lectus.
        </Typography>
        <hr style={{background: 'black', opacity: '0.3', width:'96%'}} />
        <Typography variant="body1" className={classes.text}>
        Donec quis
          accumsan justo. In hac habitasse platea dictumst. Nullam laoreet
          vulputate felis. Etiam neque nunc, porta sed urna a, varius pharetra
          lorem. Etiam sapien ligula, congue ut consequat faucibus, consequat
          non mi. Sed nibh ipsum, dapibus in felis a, aliquet molestie leo.
          Maecenas ac sapien eu orci tristique facilisis. Suspendisse imperdiet
          enim turpis, ac sollicitudin elit eleifend vel. Etiam ullamcorper non
          velit ac euismod. Cras scelerisque ut orci id lobortis.
        </Typography>
      </Container>
    </Container>
  );
};

export default About;
