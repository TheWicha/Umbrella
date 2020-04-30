const getPost = (
  post = {
    about: "",
    tittle: '',
    price: '',
    img: '',
  },
  action: any
) => {
  switch (action.type) {
    case 'GET_POST':
      return (post = action.payload)  
    default:
      return post;
  }
};

export default getPost;
   