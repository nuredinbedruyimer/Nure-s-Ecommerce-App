import express from "express";
import dotenv from "dotenv";
import ErrorHandler from "./middleware/Error.js";
import cookieParser from "cookie-parser";
import userRoutes from "./routers/userRoutes.js";
import shopRoutes from "./routers/shopRoutes.js";
import productRoutes from "./routers/productRoutes.js";
import eventRoutes from "./routers/eventRoutes.js";

import cors from "cors";

const app = express();
app.use(cookieParser());
app.use("/", express.static("uploads"));
app.use(express.json());

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

app.use("/api/v1/user", userRoutes);
app.use("/api/v1/shop", shopRoutes);
app.use("/api/v1/product", productRoutes);
app.use("/api/v1/event", eventRoutes);

if (process.env.MODE !== "PRODUCTION") {
  dotenv.config();
}
// Errpr Handling Over Here Using Our Error Handler
app.use(ErrorHandler);
export default app;
