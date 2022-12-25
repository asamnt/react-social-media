import React from "react";
import CreatePost from "./components/CreatePost";
import Header from "./components/Header";
import Login from "./components/Login";
import PostList from "./components/PostList";

// const functionCount = new Set();

function App() {
  //   let user = "";
  const [user, setUser] = React.useState("");
  const [posts, setPosts] = React.useState([]);

  React.useEffect(() => {
    //we use useEffect when we need side effects - here the side effect is that we are calling the document object in the browser
    document.title = user ? `${user}'s feed` : "Please login"; //this is template literal
  }, [user]);

  //this will be a callback function and we will pass this to the create post component, instead of passing the Posts object
  const handleAddPost = React.useCallback(
    (newPost) => {
      //we are passing an arrow function that gets argument - newPost
      setPosts([newPost, ...posts]);
    },
    [posts]
  );

  if (!user) {
    return <Login setUser={setUser} />; //we are passing a prop setUser to the child login component so that it can use it to lift its state up
  }
  return (
    <>
      <Header user={user} setUser={setUser} />
      {/* //we are passing the setUser function to header so that we can reset the user to null when logging out */}
      {/* //this is passing function reference */}
      <CreatePost user={user} handleAddPost={handleAddPost} />
      <PostList posts={posts} />

      {/* {posts.map((post, i) => (
        <React.Fragment key={i}>
          {post.image && (
            <img
              style={{ height: 100, width: 200, objectFit: "cover" }}
              src={URL.createObjectURL(post.image)}
              alt="Post cover"
            />
          )}
          <p>{post.content}</p>
          <div>{user}</div>
        </React.Fragment>
      ))} */}
    </>
  );
}

export default App;
