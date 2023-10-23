import React, { useEffect } from "react";
import ShopSignIn from "../../components/Shop/ShopSignIn";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const ShopSignInPage = () => {
  const navigate = useNavigate();
  const { isShop, shop } = useSelector((state) => state.shop);
  console.log("I am Auth Value: ", isShop);
  console.log("Shop: ", shop);

  useEffect(() => {
    if (isShop === true) {
      navigate(`/shop/${shop._id}`);
    }
  }, []);
  return (
    <div>
      <ShopSignIn />
    </div>
  );
};

export default ShopSignInPage;
