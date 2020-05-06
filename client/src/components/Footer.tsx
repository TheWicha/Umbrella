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
          <Typography variant="body2">Overview</Typography>
          <Typography variant="body2">What is Umbrella</Typography>
        </Box>
        <Box>
          <Typography variant="body1" style={{ fontWeight: "bold" }}>
            Products
          </Typography>
          <Typography variant="body2">Product Overview</Typography>
          <Typography variant="body2">What is Umbrella</Typography>
        </Box>
        <Box>
          <Typography variant="body1" style={{ fontWeight: "bold" }}>
            Contact
          </Typography>
          <Typography variant="body2">Repositories</Typography>
          <Typography variant="body2">What is Umbrella</Typography>
        </Box>
      </Box>
    </Container>
  );
};

export default Footer;
