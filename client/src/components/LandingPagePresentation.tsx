import React from "react";
import { Container, Typography, Box } from "@material-ui/core";
import FavoriteBorderOutlinedIcon from "@material-ui/icons/FavoriteBorderOutlined";
import CodeIcon from "@material-ui/icons/Code";
import photo from "../images/landing_page.png";

const LandingPagePresentation: React.FC = () => {
  return (
    <Container maxWidth="lg" style={{ padding: "3em 0px", marginBottom:'2em' }}>
      <Box
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography style={{ color: "white", fontSize:'1.8em', margin: '0.5em' }}>
          Made with love <FavoriteBorderOutlinedIcon /> and passion for code <CodeIcon />!
        </Typography>
        <img
          src={photo}
          alt="aplication presentation"
          style={{ height: "500px", borderRadius: "4px", opacity: 0.9 }}
        ></img>
      </Box>
    </Container>
  );
};

export default LandingPagePresentation;
