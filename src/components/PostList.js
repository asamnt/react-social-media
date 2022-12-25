import React from "react";
import Post from "./Post";

function PostList({ posts }) {
  //   return posts.map((post, i) => <Post key={i} post={post} />);//instead of doing named props and passing posts to the Post element we can use spread operator and spread the object
  return posts.map((post, i) => <Post key={i} {...post} />); //spread the post object
}
export default PostList;
