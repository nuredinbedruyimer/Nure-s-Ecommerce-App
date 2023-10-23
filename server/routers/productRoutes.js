import express from "express";
import { upload } from "../Multer.js";
const router = express.Router();
import {
  createProductController,
  deleteShopProductController,
  getAllProductsShopController,
} from "../controllers/productController.js";

// CREATING PRODUCT
router.post("/create-product", upload.array("images"), createProductController);

// GET ALL PRODUCT FROM OUR STORE OR DATABASE
router.get("/get-all-products-shop/:id", getAllProductsShopController);

// DELETE PRODUCTS FROM OUR SHOP
router.delete("/delete-shop-product/:id", deleteShopProductController);

export default router;
