import { TextField } from "@mui/material";
import "./form-textfield.css";

export const FormTextfield = ({
  label,
  type,
  value,
  variant,
  required,
  onChange,
}) => {
  return (
    <TextField
      id="standard-first-input"
      label={label}
      type={type}
      value={value}
      variant={variant}
      required={required}
      className="login-form-textfield"
      onChange={onChange}
    />
  );
};
