// Importing Packages
import app from "./app.js";
import connectDB from "./database/db.js";
import dotenv from "dotenv";

// Variables Declarations
const PORT = process.env.PORT;

// Handling Uncaught Error
process.on("uncaughtException", (err) => {
  console.log(`Error ${err.message}`);
  console.log("Stop Server Due to Uncaught Exception ");
});
// Configure Mongo Database To our server
connectDB();

if (process.env.MODE !== "PRODUCTION") {
  dotenv.config();
}
// Creating Our Server
const server = app.listen(PORT, () => {
  console.log(`Server Running On http://localhost:${PORT}`);
});

// Unhandled Promise Exceptions
process.on("unhandledRejection", (err) => {
  console.log(`Stop Server due to ${err}`);
  // Shut Down The server
  server.close(() => {
    process.exit(1);
  });
});
