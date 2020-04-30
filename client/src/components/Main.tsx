import React from "react";
import CenterColumn from "./CenterColumn";
import MainForm from "./MainForm";
import LeftColumn from "./LeftColumn";
import { Grid, Container } from "@material-ui/core";
import StatusBar from './StatusBar'
import {useSelector} from 'react-redux'

const Main: React.FC = () => {
  const theme = useSelector((theme: any) => theme.getTheme)
  return (
    <Container maxWidth="lg" style={{backgroundColor: theme.secondary}}>
      <MainForm />
      <StatusBar />
      <Grid container item xs={12} spacing={1} style={{justifyContent: 'space-between'}}>
        <LeftColumn />
        <CenterColumn />
      </Grid>
    </Container>
  );
};

export default Main;
