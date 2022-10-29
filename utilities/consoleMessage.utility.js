/**
 * Title: Colored console messages
 * Description: Display proper colored messages in console
 * Author: Hasibul Islam
 * Date: 29/10/2022
 */

/* external import */
const colors = require("colors");

/* set colors as theme */
colors.setTheme({
  success: "green",
  error: "red",
});

exports.successMessage = (message) => {
//   console.log(colors.green.bold.italic(`Success: ${message}`));
  console.log(`Success: ${message}`.success.bold);
};

exports.errorMessage = (message) => {
//   console.log(colors.red.bold.italic(`Error: ${message}`));
  console.log(`Error: ${message}`.error.bold.italic);
};
