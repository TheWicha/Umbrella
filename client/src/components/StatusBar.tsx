import React, { useState, useEffect } from "react";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
import { makeStyles } from "@material-ui/core/styles";
import { useSelector } from "react-redux";

function Alert(props: any) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    "& > * + *": {
      marginTop: theme.spacing(41)
    }
  }
}));

const StatusBar = () => {
  const classes = useStyles();
  const isSaved = useSelector((state: any) => state.getFormStatus);
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");
  const vertical = "top";
  const horizontal = "center";

  useEffect(() => {
    if (isSaved) {
      setOpen(true);
      return setValue("Success");
    }
  }, [isSaved]);

  const handleClose = (event: any, reason: any) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <Snackbar
        open={open}
        autoHideDuration={3000}
        onClose={handleClose}
        anchorOrigin={{ vertical, horizontal }}
      >
        <Alert onClose={handleClose} severity={value}>
          {value}! Post has been added!
        </Alert>
      </Snackbar>
    </div>
  );
};

export default StatusBar;
