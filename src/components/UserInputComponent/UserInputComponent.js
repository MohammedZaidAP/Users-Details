import React, { useState } from "react";
import "./UserInputComponent.css";
import TextField from "@material-ui/core/TextField";
import SaveIcon from "@material-ui/icons/Save";
import Button from "@material-ui/core/Button";

const UserInputComponent = () => {
  const [state, setState] = useState({
    firstName: "",
    lastName: "",
    mailId: "",
  });

  const handleChange = (event) => {
    const { id, value } = event.target;
    setState((prevState) => ({
      ...prevState,
      [id]: value,
    }));

    console.log(state);
  };

  const onSaveHandler = () => {
    alert();
  };

  return (
    <div className="userinput">
      <TextField
        id="firstName"
        label="First Name"
        variant="outlined"
        value={state["firstName"]}
        onChange={(event) => handleChange(event)}
      />
      <TextField
        id="lastName"
        label="Last Name"
        variant="outlined"
        value={state["lastName"]}
        onChange={(event) => handleChange(event)}
      />
      <TextField
        id="mailId"
        label="Email Address"
        variant="outlined"
        type="email"
        value={state["mailId"]}
        onChange={(event) => handleChange(event)}
      />
      <Button
        variant="contained"
        color="primary"
        size="medium"
        onClick={() => onSaveHandler()}
      >
        Save
      </Button>

      <div></div>
    </div>
  );
};

export default UserInputComponent;
