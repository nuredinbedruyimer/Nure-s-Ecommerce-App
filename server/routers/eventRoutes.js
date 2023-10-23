// IMPORTING ALL NEEDED MODULES

import express from "express";
import { upload } from "../Multer.js";
import {
  createEventController,
  deleteEventController,
  getAllEventsController,
} from "../controllers/eventController.js";
import { isShop } from "../middleware/Auth.js";

// CREATING ROUTER FOR OUR EVENT
const router = express.Router();

// CREATE EVENT ROUTE
router.post("/create-event", upload.array("images"), createEventController);

// GET ALL EVENTS
router.get("/get-all-events/:id", getAllEventsController);

// DELETE EVENT
router.delete("/delete-event/:id", deleteEventController);

// EXPORT OUR MODULE

export default router;
