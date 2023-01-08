function postReducer(state, action) {
  switch (action.type) {
    case "ADD_POST": {
      const newPost = action.payload.post;
      //   console.log("in switch");
      return { posts: [newPost, ...state.posts] };
    }
    case "DELETE_POST": {
    }
    default:
      return state;
  }
}

export default postReducer;
