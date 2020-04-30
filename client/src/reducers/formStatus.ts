const getFormStatus = (
  formStatus = false,
  action: any
) => {
  switch (action.type) {
    case "IS_FORM_SAVED":
      return (formStatus =  action.payload);
    default:
      return formStatus;
  }
};

export default getFormStatus;
   