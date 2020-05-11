import React from "react";
import { Container, Typography, TextField,Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useSelector } from "react-redux";
import SearchIcon from "@material-ui/icons/Search";

const Help: React.FC = () => {
  const theme = useSelector((theme: any) => theme.getTheme);

  const useStyles = makeStyles({
    root: {
      padding: "5em 3em",
      display: "flex",
      flexDirection: "column",
      backgroundColor: theme.secondary,
    },
    head: {
      paddingBottom: "1.1em",
      fontWeight: 300,
      color: "white",
    },
    form: {
      padding: "1em",
      "& > *": {
        width: "50ch",
      },
      marginBottom:'9em'
    },
  });
  const classes = useStyles();
  return (
    <Container maxWidth={"lg"} className={classes.root}>
      <Container maxWidth="md">
        <Typography variant="h4" className={classes.head}>
          Need Help?
        </Typography>
        <form className={classes.form} noValidate autoComplete="off">
          <TextField
            id="filled-basic"
            label={[<SearchIcon />, "Have a question?"]}
            variant="filled"
          />
        </form>
        <Typography variant="h4" className={classes.head}>
          Can't find what you're looking for?
        </Typography>
        <Button variant="contained" color="primary">Contact Us</Button>
      </Container>
    </Container>
  );
};

export default Help;
