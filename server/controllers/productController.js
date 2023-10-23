import ProductModel from "../models/productModel.js";
import ShopModel from "../models/shopModel.js";

export const createProductController = async (req, res) => {
  try {
    console.log(req.body.shop_id);
    const shop_id = req.body.shop_id;
    const shop = await ShopModel.findById(shop_id);
    // Chexk Product Is Exist Or Not
    if (!shop) {
      return res.status(400).send({
        success: false,
        message: "Your Shop Id Is Incorrect ",
      });
    }
    const files = req.files;
    console.log(files);
    const image_urls = files.map((file) => `${file.fileName}`);
    const product_data = req.body;
    product_data.images = image_urls;
    product_data.shop = shop;

    const product = await ProductModel.create(product_data);

    res.status(201).send({
      success: true,
      message: "Products Created Successfully!!",
      product,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in Creating Products",
      error,
    });
  }
};
// GET ALL PRODUCTS meaning get shop All Products
export const getAllProductsShopController = async (req, res) => {
  try {
    const param = req.params.id;
    const products = await ProductModel.find({ shop_id: param });
    res.status(200).send({
      success: true,
      message: "Getting Product Done Successfully",
      products,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error In Getting Products Shop",
      error: error,
    });
  }
};

// DELETE PRODUCT FROM OUR shop
export const deleteShopProductController = async (req, res) => {
  try {
    const product_id = req.params.id;
    console.log(product_id);
    const product_deleted = await ProductModel.findById(product_id);
    console.log(product_deleted);

    if (!product_deleted) {
      return res.status(404).send({
        success: false,
        message: "No Product With Given Id ",
      });
    }
    res.status(200).send({
      success: true,
      messege: "Product Deleted",
      product_deleted,
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: "Error In Deleting Element",
      error: error,
    });
  }
};
