import React from "react";
import { Container, Box } from "@material-ui/core";
import UmbrellaLogo from "./UmbrellaLogo";
import NavMenu from "./NavMenu";

const Navbar: React.FC = () => {

  return (
    <nav
      style={{
        padding: "20px 0px",
      }}
    >
      <Container maxWidth="lg" style={{ padding: "0px"}}>
        <Box
          flexDirection="row"
          display="flex"
          alignItems="center"
          justifyContent="space-between"
        >
          <UmbrellaLogo />
          <NavMenu />
        </Box>
      </Container>
    </nav>
  );
};

export default Navbar;
