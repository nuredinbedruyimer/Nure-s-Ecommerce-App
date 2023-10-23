import ErrorHandler from "../helpers/ErrorHandler.js";
const Error = (error, req, res, next) => {
  error.statusCode = error.statusCode || 500;
  // Internal Server Error When There Is Problem On Our Server WithStatus Code Between 400-500
  // Or We Can also Use
  error.message = error.message || "Internal Server Error";
  if (error.name === "CastError") {
    const Message = `Resource Not Found With This Id Or Some Sort of Client Error ${error.path}`;
    error = new ErrorHandler(Message, 400);
  }
  // if there is Duplicate Value for Primary key like Thing
  if (error.code === 11000) {
    const Message = `Duplicate Key Error On ${Object.keys(error.keyValue)}`;
    error = new ErrorHandler(Message, 400);
  }
  // JWT Error
  if (error.name === "JsonWebTokenError") {
    const Message = `Error In Your Authentication(URL) Please Try Again Later`;
    error = new ErrorHandler(Message, 400);
  }
  if (error.name === "TokenExpiredError") {
    const Message = `Error In Your Authentication(URL) Please Try Again Later`;
    error = new ErrorHandler(Message, 400);
  }
  res.status(error.statusCode).send({
    success: false,
    message: error.message,
  });
};
export default Error;
