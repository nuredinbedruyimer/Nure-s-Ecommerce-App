import express from "express";
import { upload } from "../Multer.js";
import {
  createUserController,
  activationController,
  loginController,
  getUserController,
  logoutController,
} from "../controllers/userController.js";
import { isAuthenticated } from "../middleware/Auth.js";

// import AsyncError from '../middleware/AsyncError.js'

// Create  Router
const router = express.Router();

router.post("/create-user", upload.single("file"), createUserController);
router.post("/activation", activationController);
router.post("/login-user", loginController);
router.get("/get-user", isAuthenticated, getUserController);
router.get("/log-out", isAuthenticated, logoutController);

export default router;
