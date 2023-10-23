import React, { useEffect } from "react";
import Login from "../components/User/Login";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const { isAuth } = useSelector((state) => state.user);
  console.log("I am Auth Value: ", isAuth);

  const navigate = useNavigate();
  useEffect(() => {
    if (isAuth === true) {
      navigate("/");
    }
  }, []);
  return (
    <div>
      <Login />
    </div>
  );
};

export default LoginPage;
