//catch all for the routes that don't exist:
const notFound = (request, response, next) => {
  const error = new Error("Route not found");
  response.status(404);
  next(error);
};

const errorHandler = (error, request, response) => {
  ///Since we don't want the status to be remained at success(200/201):
  let statusCode =
    response.statusCode === 200 || 201 ? 500 : response.statusCode;
  let message = error.message;

  //Mongoose cast error handling.
  if (error.name === "CastError" && error.kind === "ObjectId") {
    statusCode = 404;
    message = "Resource not found";
  }
  response.status(statusCode).json({
    message,
    stack: process.env.NODE_ENV === "production" ? null : error.stack,
  });
};

export { notFound, errorHandler };
