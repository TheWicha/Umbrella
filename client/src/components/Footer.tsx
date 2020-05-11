import React from "react";
import { Container, Box, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import UmbrellaLogo from "./UmbrellaLogo";

const Footer: React.FC = () => {
  const useStyles = makeStyles({
    root: {
      color: "white",
      display: "flex",
      padding: "2em 0",
    },
    row: {
      display: "flex",
      width: "100%",
      justifyContent: "space-evenly",
    },
    link: {
      color: 'white',
      textDecoration: 'none',
      "&:hover": {
        color: 'white',
        textDecoration: 'none',
      },
    }

  });
  const classes = useStyles();

  return (
    <Container maxWidth="lg" className={classes.root}>
      <UmbrellaLogo />
      <Box className={classes.row}>
        <Box>
          <Typography variant="body1" style={{ fontWeight: "bold" }}>
            Why Umbrella
          </Typography>
          <Typography variant="body2"><a className={classes.link} href="/about">Overview</a></Typography>
          <Typography variant="body2"><a className={classes.link} href="/about">What is Umbrella</a></Typography>
        </Box>
        <Box>
          <Typography variant="body1" style={{ fontWeight: "bold" }}>
            Products
          </Typography>
          <Typography variant="body2"><a className={classes.link} href="/Product">Product Overview</a></Typography>
          <Typography variant="body2"><a className={classes.link} href="/about">What is Umbrella</a></Typography>
        </Box>
        <Box>
          <Typography variant="body1" style={{ fontWeight: "bold" }}>
            Contact
          </Typography>
          <Typography variant="body2"><a className={classes.link} target="_blank" rel="noopener noreferrer" href="https://github.com/TheWicha/Umbrella">Repositories</a></Typography>
          <Typography variant="body2"><a className={classes.link} href="/about">What is Umbrella</a></Typography>
        </Box>
      </Box>
    </Container>
  );
};

export default Footer;
