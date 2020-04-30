import React from "react";
import StackBox from './StackBox'
import { makeStyles } from "@material-ui/core/styles";
import { Container, Typography} from "@material-ui/core";

const LandingPageStack: React.FC = () => {
  const useStyles = makeStyles({
    root: {
      padding: " 5em 0px",
      display: "flex",
      justifyContent: "center",
      flexDirection: 'column',
    },
  });

  const classes = useStyles();

  return (
    <div style={{backgroundColor:'white'}}>
    <Container className={classes.root} maxWidth="lg">
      <Typography style={{margin: '0 auto', paddingBottom: '2.5em'}} variant="h4">Build only with premium tools! </Typography>
      <StackBox />
    </Container>
    </div>
  );
};

export default LandingPageStack;
