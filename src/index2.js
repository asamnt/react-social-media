import React from "react";
import ReactDOM from "react-dom";

// const greeting = <div>Hello Reacttt</div>;
// const isReactUser = true;

// const isAuthenticated = false;

// const Login = () => {
//   return <div>Please login</div>;
// };

// const SignOut = () => {
//   return <button>Sign Out</button>;
// };

const rootNode = document.getElementById("root");

const App = () => {
  const [developer, setDeveloper] = React.useState({
    name: "",
    language: "python",
    yearsOfExperience: 0,
    isEmployed: false,
  });

  React.useEffect(() => {
    document.title = developer.name;
    console.log("runs");
  }, [developer.name]); //needs a dependency array - this would mean this is activated only when the particualar dependency changes

  const handleChangeLanguage = () =>
    setDeveloper({
      language: "javascript",
      yearOfExperience: 0,
    });

  const handleChangeYearsOfExperience = (event) =>
    setDeveloper({
      ...developer,
      yearsOfExperience: event.target.value,
    });

  //when we depend on prev state value , we can pass the prev state to an inline function
  const toggleEmploymentStatus = () => {
    setDeveloper((prevState) => ({
      ...prevState,
      isEmployed: !prevState.isEmployed,
    }));
  };

  const handleChangeOfName = (event) => {
    setDeveloper({
      ...developer,
      name: event.target.value,
    });
  };

  // const [language, setLanguage] = React.useState("python");
  // const [yearExperience, setYearsExperience] = React.useState(0);
  return (
    <div>
      <button onClick={toggleEmploymentStatus}>Toggle Employment Status</button>
      <button onClick={handleChangeLanguage}>Change Language</button>
      <div>
        <input type="number" onChange={handleChangeYearsOfExperience} />
      </div>
      <div>
        <input type="text" onChange={handleChangeOfName} placeholder="Name" />
      </div>
      <p>I am learning {developer.language}</p>
      <p>I have {developer.yearsOfExperience} years of experience</p>
      <p>
        Employemnt status is:{" "}
        {developer.isEmployed ? "Employed" : "Looking for a job"}
      </p>
    </div>
  );
};

ReactDOM.render(<App />, rootNode);
