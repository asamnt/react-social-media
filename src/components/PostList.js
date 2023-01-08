import React from "react";
import Post from "./Post";

function PostList({ posts }) {
  //   return posts.map((post, i) => <Post key={i} post={post} />);//instead of doing named props and passing posts to the Post element we can use spread operator and spread the object
  return posts.map((post, i) => <Post key={i} {...post} />); //spread the post object

  //we want the logged in user available in the each Post, but to do that we will have to pass it down from the App component
  //to the PostList and then to the Post component. But PostList component does not need the user info, it just passes it
  //down to the child component. This pattern is called props drilling and should be avoided
  //To handle this we use UseContext hook
}
export default PostList;
