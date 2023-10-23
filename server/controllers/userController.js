import UserModel from "../models/useModel.js";
import fs from "fs";
import path from "path";

import ErrorHandler from "../helpers/ErrorHandler.js";
import {
  CreateActivationToken,
  CreateActivationURL,
} from "../helpers/CreateActivationToken.js";
import SendMail from "../helpers/SendMail.js";
import JWT from "jsonwebtoken";
import { sendToken } from "../helpers/jwtToken.js";

export const createUserController = async (req, res, next) => {
  const { name, email, password } = req.body;
  try {
    const userEmail = await UserModel.findOne({ email });
    if (userEmail) {
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

    const User = {
      name: name,
      email: email,
      password: password,
      avatar: avatar,
    };

    //  We can Use Try Catch To Handle Error
    const activationToken = CreateActivationToken(User);
    const activationURL = CreateActivationURL(activationToken);
    console.log(activationURL);
    try {
      await SendMail({
        email: User.email,
        subject: "Verify Your Account Please",
        message: `Hello ${User.name} Please Click The Link To Activate Your Account :${activationURL} `,
      });
      console.log("Email Has Been Send");
      res.status(201).send({
        success: true,
        message: `Hello ${User.name} Please Verify Your Email To Activate Your Account`,
      });
    } catch (error) {
      console.log(error);
      res.status(400).send({
        success: false,
        message: "Error in User Verification",
      });
    }
  } catch (error) {
    res.status(500).send({
      success: false,
      message: "Error In Create User Route",
      error,
    });
  }
};

// const hashedPassword = await Hash(password);

// const filename = req.file.filename;
// const fileurl = path.join(filename);
// const avatar = fileurl;
// const User = {
//   name: name,
//   email: email,
//   password: hashedPassword,
//   avatar: avatar,
// };
// console.log(User)

// const activationToken = CreateActivationToken(User);
// const activationURL = CreateActivationURL(activationToken);
//     const user =await new UserModel({
//     name: name,
//     email: email,
//     password: hashedPassword,
//     avatar: avatar,
//   }).save();
// try {

//   res.status(201).send({
//     success: true,
//     message: `Hello ${User.name} Please Verify Your Email To Activate Your Account`,

//   });

//   console.log("Email Send On :" + User.email);
// } catch (error) {
//   return res.status(400).send({
//     success: false,
//     message:"Error In Sending Verification Error"
//   })
//   console.log("Error ");
// }

export const activationController = async (req, res, next) => {
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

    const { name, email, password, avatar } = verifyUser;
    let user = await UserModel.findOne({ email });
    if (user) {
      return res.status(400).send({
        success: false,
        message: "User Already Exists",
      });
    }

    user = await UserModel.create({
      name,
      email,
      password,
      avatar,
    });

    sendToken(user, 201, res);
  } catch (error) {
    return res.status(500).send({
      success: false,
      message: "Something Went Wrong",
      error,
    });
  }
};
// Login User
export const loginController = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status.send({
        success: false,
        message: "Password And  Email Are Required To Login",
      });
    }
    const user = await UserModel.findOne({ email }).select("+password");
    if (!user) {
      return res.status(403).send({
        success: false,
        message: "User Is Not Register",
      });
    }

    const isMatched = await user.comparePassword(password);
    if (!isMatched) {
      return res.status(400).send({
        success: false,
        message: "Incorrect Password Please Try Again",
      });
    }
    sendToken(user, 201, res);
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      success: false,
      message: "Error In Login  User",
    });
  }
};
export const getUserController = async (req, res) => {
  try {
    const user = await UserModel.findById(req.user._id);
    if (!user) {
      return res.status(400).send({
        success: false,
        message: "User Does Not Exist",
        user,
      });
    }
    res.status(200).send({
      success: true,
      message: "User Get Successfully",
      user,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      success: true,
      message: "Error In Getting  User",
      error,
    });
  }
};
// Log Out Conrroller
export const logoutController = async (req, res) => {
  try {
    res.cookie("token", null, {
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
