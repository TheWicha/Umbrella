import React from "react";
import { Box, Container, Typography, Button } from "@material-ui/core";
import { useSelector } from "react-redux";

const LandingPageHero: React.FC = () => {
  const theme = useSelector((theme: any) => theme.getTheme);

  return (
      <Container maxWidth="sm" style={{ paddingTop: "6%"}}>
        <Box
          color="white"
          display="flex"
          flexDirection="column"
          alignItems="center"
        >
          <Typography variant="h3">Welcome to Umbrella</Typography>
          <Typography variant="h4">Add your product!</Typography>
          <a href="/Product" style={{textDecoration: 'none'}}>
            <Button
              style={{
                marginTop: "20px",
                padding: "0 25px",
                backgroundColor: "white",
                color: theme.primary,
                border: "none",
                outline: "none"
              }}
            >
              <Typography variant="overline" style={{ fontSize: "1.2em" }}>
                Start
              </Typography>
            </Button>
          </a>
        </Box>
      </Container>
  );
};

export default LandingPageHero;
