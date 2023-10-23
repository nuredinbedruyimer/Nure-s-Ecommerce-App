import express from "express";
import { upload } from "../Multer.js";
import {
  createShopController,
  getShopController,
  shopActivationController,
  shopLoginController,
  shopLogoutController,
} from "../controllers/shopController.js";
import { isShop } from "../middleware/Auth.js";

const router = express.Router();

// CREATE SHOP

router.post("/create-shop", upload.single("file"), createShopController);

// ACTIVATE SHOP ACCOUNT USING EMAIL

router.post("/activation", shopActivationController);

// SHOP (OWMNERS ) LOGIN

router.post("/shop-login", shopLoginController);

// GET SHOP BUT IT IS POSSIBLE FOR OWNER
router.get("/get-shop", isShop, getShopController);

// SHOP(OWNER) LOG OUT
router.get("/shop-logout", isShop, shopLogoutController);

export default router;
