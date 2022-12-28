import { Box, Button, Stack, TextField } from "@mui/material";
import { styled } from "@mui/material/styles";
//import { Auth } from "aws-amplify";

import "./login-form.css";

export const LoginForm = () => {
  const login = async () => {
    console.log("login");
    // const authResp = await Auth.signIn({ username, password });
  };

  const signup = async () => {
    console.log("sign up");
  };
  const CssTextField = styled(TextField, {
    shouldForwardProp: (props) => props !== "focusColor",
  })((p) => ({
    // input label when focused
    "& label.Mui-focused": {
      color: p.focusColor,
    },
    // focused color for input with variant='standard'
    "& .MuiInput-underline:after": {
      borderBottomColor: p.focusColor,
    },
    // focused color for input with variant='filled'
    "& .MuiFilledInput-underline:after": {
      borderBottomColor: p.focusColor,
    },
    // focused color for input with variant='outlined'
    "& .MuiOutlinedInput-root": {
      "&.Mui-focused fieldset": {
        borderColor: p.focusColor,
      },
    },
  }));

  return (
    <Box sx={{ display: "flex" }}>
      <Box className="login-form-box">
        <div>
          <h1>Sign Up</h1>
          <Stack spacing={4}>
            <CssTextField
              id="standard-first-input"
              label="First Name"
              type="first"
              autoComplete="current-first"
              variant="standard"
              required
              className="login-form-textfield"
              focusColor="#009688"
            />
            <CssTextField
              id="standard-last-input"
              label="Last Name"
              type="last"
              autoComplete="current-last"
              variant="standard"
              required
              className="login-form-textfield"
              focusColor="#009688"
            />
            <CssTextField
              id="standard-email-input"
              label="Email"
              type="email"
              autoComplete="current-email"
              variant="standard"
              required
              className="login-form-textfield"
              focusColor="#009688"
            />
            <CssTextField
              id="standard-password-input"
              label="Password"
              type="password"
              autoComplete="current-password"
              variant="standard"
              required
              className="login-form-textfield"
              focusColor="#009688"
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
            <CssTextField
              id="login-email-input"
              label="Email"
              type="email"
              autoComplete="current-email"
              variant="standard"
              required
              className="login-form-textfield"
              focusColor="#009688"
            />
            <CssTextField
              id="login-password-input"
              label="Password"
              type="password"
              autoComplete="current-password"
              variant="standard"
              required
              className="login-form-textfield"
              focusColor="#009688"
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
