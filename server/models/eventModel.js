import mongoose from "mongoose";

const eventSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please Enter Event Product Name !!!"],
    },
    description: {
      type: String,
      required: [true, "Please Enter Event Product Description !!"],
    },
    category: {
      type: String,
      required: [true, "Please Enter Event Product Category!"],
    },
    start_date: {
      type: Date,
      required: true,
    },
    end_date: {
      type: Date,
      required: true,
    },
    status: {
      type: String,
      default: "Running",
    },

    tags: {
      type: String,
    },
    original_price: {
      type: Number,
    },
    discount_price: {
      type: Number,
      required: [true, "Enter Event Product Price!"],
    },
    stock: {
      type: Number,
      required: [true, "Please Enter  Event Product Stock!"],
    },
    images: [
      {
        type: String,
      },
    ],
    shop_id: {
      type: String,
      required: true,
    },
    shop: {
      type: Object,
      required: true,
    },
    sold_out: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true }
);

const EventModel = mongoose.model("events", eventSchema);
export default EventModel;
