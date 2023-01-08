import React from "react";
import { PostContext } from "../App";

function CreatePost({ user }) {
  const { dispatch } = React.useContext(PostContext);

  const [content, setContent] = React.useState("");
  const [image, setImage] = React.useState(null);

  const imageRef = React.useRef();

  const handleSubmit = (event) => {
    event.preventDefault();
    //we are doing this work to create a new array, we need to add existing posts + new post to the new array
    const post = { content, image, user, id: Date.now() };
    // console.log("in handleSubmit");
    dispatch({ type: "ADD_POST", payload: { post } });
    //this is the better way
    // handleAddPost(post); //we are lifting the activity of add posts to the parent object

    //below is another way
    // const newPosts = [post, ...posts];
    // setPosts(newPosts); //we now want to lift the state up and pass it to the App component - setPosts -  which will then pass the data as prop to the PostList component
    setContent("");
    // setImage(undefined);//we cannot do this as value prop cannot be applied to all kinds of input
    imageRef.current.value = ""; //we use the useref hook to set the element to empty string
  };

  return (
    <div>
      <h2>Create new post</h2>
      <form onSubmit={handleSubmit}>
        <input
          value={content} //we add the value prop so that the element get the current value on the state
          type="text"
          placeholder="Add post content"
          onChange={(event) => setContent(event.target.value)}
        />
        <input
          type="file"
          onChange={(event) => setImage(event.target.files[0])}
          ref={imageRef}
        />
        <button type="submit">Submit Post</button>
      </form>
    </div>
  );
}

export default CreatePost;
