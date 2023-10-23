// import AsyncError from "./AsyncError.js";
import UserModel from "../models/useModel.js";
import JWT from "jsonwebtoken";
import ShopModel from "../models/shopModel.js";

// import ErrorHandler from "../helpers/ErrorHandler.js";
export const isAuthenticated = async (req, res, next) => {
  const { token } = req.cookies;
  console.log("Token", token);

  if (token === undefined) {
    return res.status(400).send({
      success: false,
      message: "Login To Continue",
    });
  }
  const decode = JWT.verify(token, process.env.JWT_SECRET_KEY);
  req.user = await UserModel.findById(decode.id);
  next();
};
export const isShop = async (req, res, next) => {
  const { shop_token } = req.cookies;

  if (shop_token === undefined) {
    return res.status(400).send({
      success: false,
      message: "Login To Continue",
    });
  }
  const decode = JWT.verify(shop_token, process.env.JWT_SECRET_KEY);
  req.shop = await ShopModel.findById(decode.id);

  next();
};
