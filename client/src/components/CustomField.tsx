import { Field } from "formik";
import React from "react";
import { CustomFieldProps } from "./types/types";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";

const CustomField: React.FC<CustomFieldProps> = (props: CustomFieldProps) => {
  const { errors, name, touched } = props;
  const useStyles = makeStyles({
    error: {
      color: "red",
      fontSize: "0.8em",
      height: "21px",
      paddingLeft: "80px"
    }
  });
  const classes = useStyles();
  
  return (
    <>
      <div style={{ display: "flex" }}>
        <Typography style={{ width: "80px" }}>{name.toUpperCase()}:</Typography>
        <Field name={name} />
      </div>
      {errors[name] && touched[name] ? (
        <div className={classes.error}>{errors[name]}</div>
      ) : (
        <div className={classes.error}></div>
      )}
    </>
  );
};

export default CustomField;
