/**
 * Title: Driver segment of this project
 * Description: All driver level task execute here
 * Author: Hasibul Islam
 * Date: 29/10/2022
 */

/* external imports */
const mongoose = require("mongoose");
require("dotenv").config();

/* internal import */
const app = require("./app");
const consoleMessage = require("./utilities/consoleMessage.utility");

/* database connection */
/**
 * DB error connection resolved:
 * -----------------------------
 * https://www.codegrepper.com/code-examples/javascript/MongooseServerSelectionError%3A+connect+ECONNREFUSED+127.0.0.1%3A27017
 */
mongoose
  .connect(process.env.DB_LOCAL, {
    dbName: "user-boilerplate",
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() =>
    consoleMessage.successMessage(
      `Establish connection on ${process.env.DB_LOCAL}`
    )
  )
  .catch((error) => consoleMessage.errorMessage(error.message));

/* establish server port */
app.listen(process.env.PORT, () => {
  consoleMessage.successMessage(`App listening on http://localhost:8080/`);
});
