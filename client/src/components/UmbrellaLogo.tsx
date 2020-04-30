import React from "react";
import { BeachAccess } from "@material-ui/icons";
import { useSelector } from "react-redux";

const UmbrellaLogo: React.FC = () => {
  const theme = useSelector((theme: any) => theme.getTheme);
  return (
    <a href="/">
      <div
        style={{
          width: "55px",
          height: "55px",
          borderRadius: "180px",
          backgroundColor: theme.secondary,
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <BeachAccess style={{ color: "white", fontSize: "1.8em" }} />
      </div>
    </a>
  );
};

export default UmbrellaLogo;
