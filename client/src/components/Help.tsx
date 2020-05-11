import React from "react";
import { Container, Typography, TextField, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useSelector } from "react-redux";
import SearchIcon from "@material-ui/icons/Search";
import img from "../images/maintenance.jpg";

const Help: React.FC = () => {
  const theme = useSelector((theme: any) => theme.getTheme);

  const useStyles = makeStyles({
    root: {
      padding: "8em 3em",
      display: "flex",
      flexDirection: "column",
      backgroundColor: theme.secondary,
    },
    head: {
      textShadow: "1px 1px black",
      marginTop: "1em",
      paddingBottom: "1.1em",
      fontWeight: 300,
      color: "white",
    },
    form: {
      padding: "1em",
      "& > *": {
        width: "50ch",
      },
      marginBottom: "9em",
    },
    background: {
      position: "absolute",
      opacity: "0.7",
      height: "55%",
      marginLeft: "7.2em",
    },
  });
  const classes = useStyles();
  return (
    <Container maxWidth={"lg"} className={classes.root}>
      <Container maxWidth="lg" style={{ zIndex: 1, marginLeft: "8em" }}>
        <Typography variant="h4" className={classes.head}>
          Need Help?
        </Typography>
        <form className={classes.form} noValidate autoComplete="off">
          <TextField
            label={[<SearchIcon />, "Have a question?"]}
            variant="filled"
          />
        </form>
        <Typography variant="h4" className={classes.head}>
          Can't find what you're looking for?
        </Typography>
        <Button variant="contained" color="primary" style={{ margin: "1em" }}>
          Contact Us
        </Button>
      </Container>
      <img src={img} className={classes.background} alt="maintenance" />
    </Container>
  );
};

export default Help;
