import React from "react";
import { Box } from "@material-ui/core";
import CustomButton from "./CustomButton";

const NavMenu: React.FC = () => {
  return (
    <Box>
      <CustomButton text="About" />
      <CustomButton text="Help" />
      <CustomButton text="LogIn" />
    </Box>
    
  );
};

export default NavMenu;
