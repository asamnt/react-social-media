import React from "react";

function Header({ user, setUser }) {
  //we take the props from the parent App

  return (
    <div>
      Welcome, {user}!<button onClick={() => setUser("")}>Logout</button>
      {/* we call the setUser function to nullify the user after logout  */}
    </div>
  );
}

export default Header;
