import { useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";
import { Avatar, IconButton, Tooltip } from "@mui/material";
import { Auth } from "aws-amplify";
import "./nav.css";

export const Nav = () => {
  const navigate = useNavigate();
  const [initials, setInitials] = useState("");

  const logout = () => {
    navigate("/login");

    Auth.signOut();
  };

  const getUser = async () => {
    const { attributes } = await Auth.currentAuthenticatedUser();
    console.log({ attributes });
    setInitials(attributes.name.charAt(0));
  };
  useEffect(() => {
    getUser();
  }, []);
  return (
    <div className="navDiv">
      <div>
        <a href="/books">
          <h3>Books</h3>
        </a>
        <a href="/movies">
          <h3>Movies</h3>
        </a>
        <a href="/music">
          <h3>Music</h3>
        </a>
      </div>
      <div>
        <Tooltip title="Logout">
          <IconButton onClick={logout} size="medium">
            <Avatar sx={{ width: 32, height: 32 }}>{initials}</Avatar>
          </IconButton>
        </Tooltip>
      </div>
    </div>
  );
};
