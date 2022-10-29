/**
 * Title: Initial segment of this project
 * Description: All application level tasks execute here
 * Author: Hasibul Islam
 * Date: 29/10/2022
 */

/* external imports */
const express = require("express");
const cors = require("cors");

/* internal imports */
const errorHandlerMiddleware = require("./middlewares/errorHandler.middleware");

/* router level imports */
const userRoute = require("./routes/user.route");

/* application level connections */
const app = express();

/* middlewares connections */
app.use(cors());
app.use(express.json());

/* router level connections */
app.use("/user", userRoute);

/* global error handlers */
app.use(errorHandlerMiddleware);

/* enable connection */
app.get("/", (req, res) => {
  try {
    res.status(200).json({
      acknowledgement: true,
      message: "Establishing server connection complete",
      description:
        "The request is processing well & returning success message E-Commerce project",
    });
  } catch (error) {
    res.status(204).json({
      acknowledgement: false,
      message: error.name,
      description: error.message,
    });
  }
});

/* export application */
module.exports = app;
