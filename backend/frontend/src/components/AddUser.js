import React, { useState } from "react";
import {
  FormControl,
  FormGroup,
  InputLabel,
  Input,
  Button,
  makeStyles,
  Typography,
} from "@material-ui/core";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const useStyles = makeStyles({
  container: {
    width: "50%",
    margin: "5% 0 0 25%",
    "&> *": {
      marginTop: "20px",
    },
  },
});

function AddUser() {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const styles = useStyles();
  const navigate = useNavigate();

  const formHandle = (e) => {
    e.preventDefault();
    axios({
      method: "POST",
      data: {
        name: name,
        username: username,
        email: email,
        phone: phone,
      },
      withCredentials: true,
      url: "https://entriesname.herokuapp.com/users",
    })
      .then((res) => {
        navigate("../all");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div>
      <FormGroup className={styles.container}>
        <Typography variant={"h4"}>Add Name</Typography>
        <FormControl>
          <InputLabel>Name</InputLabel>
          <Input onChange={(e) => setName(e.target.value)} />
        </FormControl>
        <FormControl>
          <InputLabel>Username</InputLabel>
          <Input onChange={(e) => setUsername(e.target.value)} />
        </FormControl>
        <FormControl>
          <InputLabel>Email</InputLabel>
          <Input onChange={(e) => setEmail(e.target.value)} />
        </FormControl>
        <FormControl>
          <InputLabel>Phone</InputLabel>
          <Input onChange={(e) => setPhone(e.target.value)} />
        </FormControl>
        <Button
          variant={"contained"}
          color={"primary"}
          onClick={(e) => formHandle(e)}
        >
          Add User
        </Button>
      </FormGroup>
    </div>
  );
}

export default AddUser;
