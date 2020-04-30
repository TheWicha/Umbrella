import * as Yup from "yup";

export const validationSchema = Yup.object().shape({
  tittle: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Title should have less then 50 signs!")
    .required("Required"),
  about: Yup.string()
    .min(10, "Too Short! About product must be at least 10 signs")
    .max(500, "Too Long!")
    .required("Required"),
  price: Yup.number()
    .typeError('Price must be a number!')
    .required("Required"),
  img: Yup.string()
    .url()
    .required('Required')
});
