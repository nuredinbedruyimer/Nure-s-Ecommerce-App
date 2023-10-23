import {
  CreateActivationToken,
  shopActivationURL,
} from "../helpers/CreateActivationToken.js";
import { sendShopToken } from "../helpers/jwtToken.js";
import ShopModel from "../models/shopModel.js";
import path from "path";
import SendMail from "../helpers/SendMail.js";
import JWT from "jsonwebtoken";
import fs from "fs";

export const createShopController = async (req, res) => {
  try {
    const { email } = req.body;
    const isExist = await ShopModel.findOne({ email: email });
    if (isExist) {
      const fileName = req.file.filename;
      const filePath = `uploads/${fileName}`;
      fs.unlink(filePath, (err) => {
        if (err) {
          console.log("File Deletng Cause Problem");
        } else {
          console.log("File Deleted Successfully");
        }
      });
      return res.status(401).send({
        success: false,
        message: "User Already Exists",
      });
    }
    const fileName = req.file.filename;
    const filePath = path.join(fileName);
    const avatar = filePath;
    const Owner = {
      name: req.body.name,
      email: email,
      password: req.body.password,
      avatar: avatar,
      address: req.body.address,
      phonenumber: req.body.phonenumber,
      zipcode: req.body.zipcode,
    };
    const activationToken = CreateActivationToken(Owner);
    const activationURL = shopActivationURL(activationToken);
    try {
      await SendMail({
        email: Owner.email,
        subject: "Verify Your Account Please",
        message: `Hello ${Owner.name} Please Click The Link To Activate Your Shop  Account :${activationURL} `,
      });
      console.log("Email Has Been Send");
      res.status(201).send({
        success: true,
        message: `Hello ${Owner.name} Please Verify Your Email To Activate Your Shop  Account`,
      });
    } catch (error) {
      console.log(error);
      res.status(400).send({
        success: false,
        message: "Error in User Verification",
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error In Creating Shop ",
      error,
    });
  }
};
// Shop Activation

export const shopActivationController = async (req, res, next) => {
  try {
    const { activation_token } = req.body;

    const verifyUser = JWT.verify(
      activation_token,
      process.env.ACTIVATION_TOKEN_SECRET
    );

    if (!verifyUser) {
      return res.status(400).send({
        success: false,
        messege: "Invalid Token ",
      });
    }

    const { name, email, password, avatar, address, phonenumber, zipcode } =
      verifyUser;
    console.log(verifyUser);
    let user = await ShopModel.findOne({ email });
    if (user) {
      return res.status(400).send({
        success: false,
        message: "User Already Exists",
      });
    }

    user = await ShopModel.create({
      name,
      email,
      password,
      avatar,
      address,
      phonenumber,
      zipcode,
    });

    sendShopToken(user, 201, res);
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      success: false,
      message: "Something Went Wrong",
      error,
    });
  }
};

// Author Of Destributer

export const shopLoginController = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status.send({
        success: false,
        message: "Password And  Email Are Required To Login",
      });
    }
    const owner = await ShopModel.findOne({ email }).select("+password");
    if (!owner) {
      return res.status(403).send({
        success: false,
        message: "Owner  Is Not Register",
      });
    }

    const isMatched = await owner.comparePassword(password);
    if (!isMatched) {
      return res.status(400).send({
        success: false,
        message: "Incorrect Password Please Try Again",
      });
    }
    sendShopToken(owner, 201, res);
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      success: false,
      message: "Error In Login  User",
    });
  }
};
export const getShopController = async (req, res) => {
  try {
    const shop = await ShopModel.findById(req.shop._id);
    if (!shop) {
      return res.status(400).send({
        success: false,
        message: "Shop  Does Not Exist",
      });
    }
    res.status(200).send({
      success: true,
      message: "Shop  Get Successfully",
      shop,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      success: true,
      message: "Error In Getting Shop",
      error,
    });
  }
};

// OWNER LOG OUT CONTROLLER

export const shopLogoutController = async (req, res) => {
  try {
    res.cookie("shop_token", null, {
      expires: new Date(Date.now()),
      httpOnly: true,
    });
    res.status(201).send({
      success: true,
      message: "Log Out Successfully",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      success: false,
      message: "Error In User Logging Out",
      error: error,
    });
  }
};
