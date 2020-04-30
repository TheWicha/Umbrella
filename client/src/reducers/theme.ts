const getTheme = (theme = {
  primary: "",
  secondary: ""
}, action: any) => {
  switch(action.type){
    case "GET_THEME":
      return (theme = action.payload);
    default:
      return theme
  }
};

export default getTheme;