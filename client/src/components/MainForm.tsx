import React from "react";
import { Formik, Form } from "formik";
import { Button, Box } from "@material-ui/core";
import uniqid from "uniqid";
import { getFormStatus, setVirtualPost } from "../actions";
import { useDispatch } from "react-redux";
import { validationSchema } from "./schemas/schemas";
import CustomField from "./CustomField";

const MainForm: React.FC = () => {
  const dispatch = useDispatch();
  const handleFormPost = (values: {}) => {
    const data = { ...values, product_id: uniqid() };
    const sendFormData = async (formData: {}) => {
      const respopnse = await fetch("http://localhost:5000/products", {
        method: "POST",
        headers: {
          "content-type": "application/json"
        },
        body: JSON.stringify({ product: formData })
      });
      const status = await respopnse.json();

      if (status.success) {
        dispatch(getFormStatus(true));
      }
    };
    sendFormData(data);
  };

  return (
    <Box margin="0 auto" display="flex" justifyContent="center">
      <Formik
        initialValues={{
          tittle: "",
          about: "",
          price: "",
          img: ""
        }}
        validationSchema={validationSchema}
        onSubmit={(data, { resetForm }) => {
          handleFormPost(data);
          dispatch(setVirtualPost(data));
          resetForm();
        }}
      >
        {({ errors, touched }) => (
          <Form
            style={{
              display: "flex",
              flexDirection: "column",
              paddingTop: "50px",
              width: "30%"
            }}
          >
            <CustomField
              errors={errors}
              touched={touched}
              placeholder={"Title"}
              name={"tittle"}
            />

            <CustomField
              errors={errors}
              touched={touched}
              placeholder={"About"}
              name={"about"}
            />
            <CustomField
              errors={errors}
              touched={touched}
              placeholder={"Price"}
              name={"price"}
            />

            <CustomField
              errors={errors}
              touched={touched}
              placeholder={"Image url"}
              name={"img"}
            />
            <Button type="submit">Submit</Button>
          </Form>
        )}
      </Formik>
    </Box>
  );
};

export default MainForm;
