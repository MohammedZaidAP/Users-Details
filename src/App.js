import React from "react";
import "./App.css";
import UserCards from "./components/Cards/UserCards";
import UserInputComponent from "./components/UserInputComponent/UserInputComponent";

const App = () => {
  return (
    <div className="app">
      <h1>User Details</h1>
      <div className="app__userinput">
        <UserInputComponent />
      </div>
      <div className="app__usercards">
        <UserCards />
      </div>
    </div>
  );
};

export default App;
