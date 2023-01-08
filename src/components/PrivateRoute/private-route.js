import React, { useState, useEffect } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { Auth } from "aws-amplify";
import { Spin } from "antd";

export const PrivateRoute = () => {
  const [loginUser, setLoginUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getUser();
  });

  const getUser = async () => {
    try {
      let user = await Auth.currentAuthenticatedUser();
      setLoginUser(user);
      setIsLoading(false);
    } catch (error) {
      console.error(error);
      setIsLoading(false);
      alert(error);
    }
  };

  if (isLoading) {
    return (
      <div
        className="flex align-center mt-50"
        style={{ flexDirection: "column", color: "var(--hearful-blue)" }}
      >
        <Spin size="large" />
        <p>Loading</p>
      </div>
    );
  }

  return loginUser ? <Outlet /> : <Navigate to="/login" />;
};
