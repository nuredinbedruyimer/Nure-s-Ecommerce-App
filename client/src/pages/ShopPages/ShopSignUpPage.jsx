import React, { useEffect } from "react";

import ShopSignUp from "../../components/Shop/ShopSignUp";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const ShopSignUpPage = () => {
  const { isShop, shop } = useSelector((state) => state.shop);
  console.log("I am Shop Value: ", shop);

  const navigate = useNavigate();
  useEffect(() => {
    if (isShop === true) {
      navigate(`/shop/${shop._id}`);
    }
  }, []);
  return (
    <div>
      <ShopSignUp />
    </div>
  );
};

export default ShopSignUpPage;
