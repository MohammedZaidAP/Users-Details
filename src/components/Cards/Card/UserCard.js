import React, { useState } from "react";
import "./UserCard.css";
import TextField from "@material-ui/core/TextField";
import SaveIcon from "@material-ui/icons/Save";
import Button from "@material-ui/core/Button";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import Select from "@material-ui/core/Select";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";

const UserCard = () => {
  const [firstName, setFirstName] = useState("");

  const [lastName, setLastName] = useState("");

  const [mailId, setMailId] = useState("");

  const onSaveHandler = () => {
    alert();
  };

  return (
    <div className="usercard">
      <div className="usercard__top">
        <Select
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          value=""
          onChange={() => alert()}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          {/* {users.map((each) => (
                  <MenuItem key={each.id} value={each.id}>
                    {each.id}
                  </MenuItem>
                ))} */}
        </Select>
        <FormHelperText>{"Select Target ID to for a Data Swap"}</FormHelperText>
        <IconButton onClick={() => alert()}>
          <EditIcon />
        </IconButton>
        <IconButton onClick={() => alert()}>
          <DeleteIcon />
        </IconButton>

        <Button
          variant="contained"
          color="primary"
          size="small"
          onClick={() => onSaveHandler()}
        >
          Save
        </Button>
      </div>
      <div className="usercard__middle">
        {false ? (
          <React.Fragment>
            <TextField
              id="first-name"
              label="First Name"
              variant="outlined"
              value={firstName}
              onChange={(event) => setFirstName(event.target.value)}
            />
            <TextField
              id="last-name"
              label="Last Name"
              variant="outlined"
              value={lastName}
              onChange={(event) => setLastName(event.target.value)}
            />
            <TextField
              id="mail-id"
              label="Email Address"
              variant="outlined"
              type="email"
              value={mailId}
              onChange={(event) => setMailId(event.target.value)}
            />
          </React.Fragment>
        ) : (
          <React.Fragment>
            <Typography variant="h5" component="h4">
              First Name : {"Arun"}
            </Typography>
            <Typography variant="h5" component="h4">
              Last Name : {"Kumar"}
            </Typography>
            <Typography variant="h5" component="h4">
              Email Address : {"E@E.com"}
            </Typography>
          </React.Fragment>
        )}
      </div>
    </div>
  );
};

export default UserCard;