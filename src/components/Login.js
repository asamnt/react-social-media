import React from "react";

function Login({ setUser }) {
  const [username, setUsername] = React.useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    //we use the state that is current --this state has been set as the user types -- see the onChange event on the input box
    setUser(username); //lifting up the state to the parent
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input
          value={username}
          placeholder="Input username"
          onChange={(event) => setUsername(event.target.value)} //we are setting the state here
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Login;
