import React from "react";
import { Button, Link } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

interface Props {
  text: string;
}

const useStyles = makeStyles({
  button: {
    textTransform: "capitalize",
    color: "white",
    outline: "none",
    fontSize: "0.9em",
    textDecoration: "none",
  }
});

const CustomButton: React.FC<Props> = (props: Props) => {
  const classes = useStyles();

  return (
    <Link style={{ textDecoration: "none", outline:'none' }} href={props.text}>
      <Button className={classes.button}>{props.text}</Button>
    </Link>
  );
};

export default CustomButton;
