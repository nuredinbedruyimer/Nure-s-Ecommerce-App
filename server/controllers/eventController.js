import ShopModel from "../models/shopModel.js";
import EventModel from "../models/eventModel.js";
export const createEventController = async (req, res) => {
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
    const event_data = req.body;
    console.log(event_data);
    event_data.images = image_urls;
    event_data.shop = shop;
    console.log("Before");
    const event = await EventModel.create(event_data);
    console.log("Event :", event);

    res.status(201).send({
      success: true,
      message: "Event Created Successfully!!",
      event,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in Creating Events",
      error,
    });
  }
};

// GET ALL EVENTS meaning get shop All Products
export const getAllEventsController = async (req, res) => {
  try {
    const param = req.params.id;
    const events = await EventModel.find({ shop_id: param });
    res.status(200).send({
      success: true,
      message: "Getting Event Done Successfully",
      events,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error In Getting Event Shop",
      error: error,
    });
  }
};

// DELETE PRODUCT FROM OUR shop
export const deleteEventController = async (req, res) => {
  try {
    const event_id = req.params.id;
    console.log(event_id);
    const event_deleted = await EventModel.findById(event_id);
    console.log("Events Image Array" + event_deleted);
    if (!event_deleted) {
      return res.status(404).send({
        success: false,
        message: "No Event  With Given Id ",
      });
    }
    res.status(200).send({
      success: true,
      messege: "Event Deleted",
      event_deleted,
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: "Error In Deleting Event",
      error: error,
    });
  }
};
