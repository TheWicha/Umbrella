const getPosts = (
  state = [],
  action: any
) => {
  switch (action.type) {
    case 'GET_POSTS':
      return (state = action.payload)  
    default:
      return state;
  }
};

export default getPosts;
   