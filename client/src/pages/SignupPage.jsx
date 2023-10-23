import { useSelector } from "react-redux";
import Signup from "../components/User/Signup";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const SignupPage = () => {
  const { isAuth } = useSelector((state) => state.user);
  const navigate = useNavigate();
  useEffect(() => {
    if (isAuth === true) {
      navigate("/");
    }
  }, []);
  return (
    <div>
      <Signup />
    </div>
  );
};

export default SignupPage;
