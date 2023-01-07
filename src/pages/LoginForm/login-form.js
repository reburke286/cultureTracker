import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Button, Modal, Stack } from "@mui/material";
import { FormTextfield } from "../../components/FormTextField/form-textfield";
import ReactCodeInput from "react-code-input";
import { Auth } from "aws-amplify";

import "./login-form.css";

export const LoginForm = () => {
  const navigate = useNavigate();
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
    try {
      const { user } = await Auth.signUp({
        username: email,
        password: newPassword,
        attributes: {
          email, // optional
          name: firstName + " " + lastName,
        },
        autoSignIn: {
          // optional - enables auto sign in after user is confirmed
          enabled: true,
        },
      });
      console.log({ user });
      localStorage.setItem("user", user.email);
      setOpen(true);
    } catch (error) {
      console.log("error signing up:", error);
    }
  };

  /* SIGNUP CONFIRMATION CODE */
  const [open, setOpen] = useState(false);
  const [confirmationCode, setConfirmationCode] = useState(0);
  const modalStyle = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    borderRadius: "10px",
    padding: "50px 50px",
    textAlign: "center",
  };
  const confirmSignup = async () => {
    try {
      await Auth.confirmSignUp(email, confirmationCode);
      setOpen(false);
      navigate("/books");
    } catch (error) {
      console.log("error confirming sign up", error);
    }
  };

  const handleClose = () => setOpen(false);

  const handleConfirmationChange = (code) => {
    setConfirmationCode(code);
    console.log(confirmationCode);
  };

  return (
    <>
      <Box sx={{ display: "flex" }}>
        <Box className="login-form-box">
          <div>
            <h1>Sign Up</h1>
            <Stack spacing={4}>
              <FormTextfield
                id="signup-first-name"
                label="First Name"
                value={firstName}
                variant="standard"
                required={true}
                onChange={(e) => handleInputChange(e, "firstName")}
              />
              <FormTextfield
                id="signup-last-name"
                label="Last Name"
                value={lastName}
                variant="standard"
                required={true}
                onChange={(e) => handleInputChange(e, "lastName")}
              />
              <FormTextfield
                id="signup-email"
                label="Email"
                value={email}
                variant="standard"
                required={true}
                onChange={(e) => handleInputChange(e, "email")}
              />
              <FormTextfield
                id="signup-password"
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
                id="login-email"
                label="Email"
                variant="standard"
                value={username}
                onChange={(e) => handleInputChange(e, "username")}
                required={true}
                focusColor="#009688"
              />
              <FormTextfield
                id="login-password"
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

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={modalStyle} className="modalBox">
          <Stack spacing={4}>
            <h4> Please check your email for a verification code.</h4>
            <ReactCodeInput
              type="text"
              fields={6}
              onChange={handleConfirmationChange}
              value={confirmationCode}
            />
            <div>
              <Button
                onClick={confirmSignup}
                variant="contained"
                className="login-form-button"
              >
                Confirm
              </Button>
            </div>
          </Stack>
        </Box>
      </Modal>
    </>
  );
};
