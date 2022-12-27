import * as React from "react";
import { Button, Stack, TextField } from "@mui/material";

export const LoginForm = () => {
  return (
    <Stack spacing={4}>
      <TextField
        id="standard-email-input"
        label="Email"
        type="email"
        autoComplete="current-email"
        variant="standard"
        required
      />
      <TextField
        id="standard-password-input"
        label="Password"
        type="password"
        autoComplete="current-password"
        variant="standard"
        required
      />
      <Button>Login</Button>
    </Stack>
  );
};
