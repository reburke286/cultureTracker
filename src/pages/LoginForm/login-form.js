import { useState } from "react";
import { Box, Button, Stack } from "@mui/material";
import { FormTextfield } from "../../components/FormTextField/form-textfield";
import { Auth } from "aws-amplify";

import "./login-form.css";

export const LoginForm = () => {
  const [user, setUser] = useState({
    email: "",
    username: "",
    password: "",
    newPassword: "",
    firstName: "",
    lastName: "",
  });
  const { email, username, password, newPassword, firstName, lastName } = user;
  const handleInputChange = (event, key) => {
    console.log(key);
    event.persist();
    setUser((user) => {
      return { ...user, [key]: event.target.value };
    });
  };
  const login = async () => {
    console.log("login");
    const authResp = await Auth.signIn({ username, password });
    console.log(authResp);
  };

  const signup = async () => {
    console.log("sign up");
  };

  return (
    <Box sx={{ display: "flex" }}>
      <Box className="login-form-box">
        <div>
          <h1>Sign Up</h1>
          <Stack spacing={4}>
            <FormTextfield
              label="First Name"
              value={firstName}
              variant="standard"
              required={true}
              onChange={(e) => handleInputChange(e, "firstName")}
            />
            <FormTextfield
              label="Last Name"
              value={lastName}
              variant="standard"
              required={true}
              onChange={(e) => handleInputChange(e, "lastName")}
            />
            <FormTextfield
              label="Email"
              value={email}
              variant="standard"
              required={true}
              onChange={(e) => handleInputChange(e, "email")}
            />
            <FormTextfield
              label="Password"
              type="password"
              value={newPassword}
              variant="standard"
              required={true}
              onChange={(e) => handleInputChange(e, "newPassword")}
            />
            <Button
              className="login-form-button"
              variant="contained"
              onClick={signup}
            >
              Sign Up
            </Button>
          </Stack>
        </div>
      </Box>
      <div className="center-div"></div>
      <Box sx={{ maxWidth: 500 }} className="login-form-box">
        <div>
          <h1>Login</h1>
          <Stack spacing={4}>
            <FormTextfield
              label="Email"
              variant="standard"
              value={username}
              onChange={(e) => handleInputChange(e, "username")}
              required={true}
              focusColor="#009688"
            />
            <FormTextfield
              id="login-password-input"
              label="Password"
              type="password"
              value={password}
              variant="standard"
              required={true}
              focusColor="#009688"
              onChange={(e) => handleInputChange(e, "password")}
            />
            <Button
              className="login-form-button"
              variant="contained"
              onClick={login}
            >
              Login
            </Button>
          </Stack>
        </div>
      </Box>
    </Box>
  );
};
