import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useHistory } from "react-router-dom";

// MUI Core
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import { Typography } from "@material-ui/core";

const initialvalue = {
  username: "",
  password: "",
};

const Login = (props) => {
  const [form, setForm] = useState(initialvalue);

  //changehandler
  const changeHandler = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  //submit
  const onSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/api/login", form)
      .then((res) => {
        console.log(res.data);
        props.history.push("/BubblesPage");
        //!Don't really understand the props.history bit. Need to ask
      })
      .catch((err) => {
        console.log(err);
      });
  };
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route

  return (
    <Container maxWidth="xs">
      <Typography variant="h3">Login-Screen</Typography>
      <form onSubmit={onSubmit}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  value={form.username}
                  onChange={changeHandler}
                  label="username"
                  name="username"
                  size="small"
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  value={form.password}
                  onChange={changeHandler}
                  label="Password"
                  name="password"
                  size="small"
                  type="password"
                  variant="outlined"
                />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Button
              color="secondary"
              fullWidth
              type="submit"
              variant="contained"
            >
              Log in
            </Button>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
};

export default Login;

//Task List:
//1. Build a form containing a username and password field. ✅
//2. Add whatever state nessiary for form functioning.✅
//3. MAKE SURE THAT FORM INPUTS INCLUDE THE LABEL TEST "username" and "password" RESPECTIVELY.✅
//4. If either the username or password is not displaied display EXACTLY the following words: Username or Password not valid.
//5. If the username / password is equal to Lambda School / i<3Lambd4, save that token to localStorage.
