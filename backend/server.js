import express from "express";
import dotenv from "dotenv";
import userRoutes from "./routes/userRoutes.js";
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";
dotenv.config();
//PORT
const PORT = process.env.PORT || 5000;
//App initializer:
const application = express();

//Routes:
application.use("/api/v1/users", userRoutes);
application.get("/", (request, response) => response.send("Server is ready"));

//error handler:
application.use(notFound);
application.use(errorHandler);
//App listener:
application.listen(PORT, () => console.log(`Server listening at ${PORT}`));
