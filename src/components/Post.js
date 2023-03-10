import React from "react";
import { UserContext } from "../App";

function Post({ image, content, user, id }) {
  const currentUser = React.useContext(UserContext);
  const isCurrentUser = currentUser === user;
  return (
    <>
      {/* only if image is present, then the img block is rendered - this known as short -circuiting */}
      {image && (
        <img
          style={{ height: 100, width: 200, objectFit: "cover" }}
          src={URL.createObjectURL(image)}
          alt="Post cover"
        />
      )}
      <p>{content}</p>
      <div style={{ color: isCurrentUser && "green" }}>{user}</div>
      {isCurrentUser && <button>Delete</button>}
    </>
  );
}

export default Post;
