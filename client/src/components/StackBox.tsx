import React from "react";
import WebIcon from '@material-ui/icons/Web';
import BrushIcon from '@material-ui/icons/Brush';
import DataUsageIcon from '@material-ui/icons/DataUsage';
import AccountTreeIcon from '@material-ui/icons/AccountTree';
import AllInboxIcon from '@material-ui/icons/AllInbox';
import SpellcheckIcon from '@material-ui/icons/Spellcheck';
import InputIcon from '@material-ui/icons/Input';
import EditIcon from '@material-ui/icons/Edit';
import { Typography, Box, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const StackBox: React.FC = () => {
  const useStyles = makeStyles({
    flex: {
      display: "flex",
      flexDirection: "column",
      maxWidth: '300px',
      height: '250px',
      alignItems: "center",
      justifyContent:'center',
      textAlign: 'center',
      '&:hover': {
        boxShadow: '7px 7px 5px 0px rgba(0,0,0,0.07)',
        transform: 'scale(1.01)',
        transitionDuration: '0.3s'
      }
    },
    column: {
      display: 'flex',
      justifyContent:'center',
    },
    mimicIcon:{
      fontWeight:'bolder', 
      fontSize:"1.8em"
    }
  });

  const classes = useStyles();

  return (
    <Grid container spacing={1}>
      <Grid container className={classes.column} item xs={4} spacing={3}>
        <Box className={classes.flex}>
          <WebIcon fontSize="large" />
          <Typography variant="h5"> React </Typography>
          <Typography variant="subtitle1" >
            React makes it painless to create interactive UIs. Design simple
            views for each state in your application
          </Typography>
        </Box>
        <Box className={classes.flex}>
          <InputIcon fontSize="large" />
          <Typography variant="h5"> Formik </Typography>
          <Typography variant="subtitle1">
          Formik takes care of the repetitive and annoying stuff--keeping track of values/errors/visited fields
          </Typography>
        </Box>
        <Box className={classes.flex}>
          <DataUsageIcon fontSize="large" />
          <Typography variant="h5"> PostgresQL </Typography>
          <Typography variant="subtitle1">
          Object-relational database system that has earned it a strong reputation for reliability, feature robustness, and performance.
          </Typography>
        </Box>
      </Grid>
      {/* ----------------------------------- */}
      <Grid container className={classes.column} item xs={4} spacing={3}>
      <Box className={classes.flex}>
          <AccountTreeIcon fontSize="large" />
          <Typography variant="h5"> Redux </Typography>
          <Typography variant="subtitle1">
          Redux helps write applications that behave consistently, run in different environments, and are easy to test.
          </Typography>
        </Box>
        <Box className={classes.flex}>
          <BrushIcon fontSize="large" />
          <Typography variant="h5"> materialUI </Typography>
          <Typography variant="subtitle1">
          React components for faster and easier web development. Build your own design system
          </Typography>
        </Box>
        <Box className={classes.flex}>
          <SpellcheckIcon fontSize="large" />
          <Typography variant="h5"> YUP </Typography>
          <Typography variant="subtitle1">
          Yup is a JavaScript schema builder for value parsing and validation. Define a schema, transform a value to match, validate the shape of an existing value, or both. 
          </Typography>
        </Box>
      </Grid>
            {/* ----------------------------------- */}
      <Grid container className={classes.column} item xs={4} spacing={3}>
      <Box className={classes.flex}>
          <Typography variant="body1" className={classes.mimicIcon}>TS</Typography>
          <Typography variant="h5"> TypeScript </Typography>
          <Typography variant="subtitle1">
          Types provide a way to describe the shape of an object, providing better documentation.
          </Typography>
        </Box>
        <Box className={classes.flex}>
          <AllInboxIcon fontSize="large" />
          <Typography variant="h5"> Docker </Typography>
          <Typography variant="subtitle1">
          Docker created the industry standard for containers, so they could be portable anywhere
          </Typography>
        </Box>
        <Box className={classes.flex}>
          <EditIcon fontSize="large" />
          <Typography variant="h5"> VSC </Typography>
          <Typography variant="subtitle1">
          Visual Studio Code is a lightweight but powerful source code editor which runs on your desktop and is available for Windows, macOS and Linux.
          </Typography>
        </Box>
      </Grid>
    </Grid>
  );
};

export default StackBox;

// VSC
