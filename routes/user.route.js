/**
 * Title: User authenticate credentials
 * Description: All user credential convey execute from here
 * Author: Hasibul Islam
 * Date: 29/10/2022
 */

/* external import */
const express = require("express");

/* internal import */
const userController = require("../controllers/user.controller");
const verifyTokenMiddleware = require("../middlewares/verifyToken.middleware");
const authorizeRoleMiddleware = require("../middlewares/authorizeRole.middleware");

/* router level connection */
const router = express.Router();

/* router methods integration */
// sign up an user with confirmation
router
  .route("/sign-up")
  .get(userController.confirmSignedUpUser)
  .post(userController.signUpAnUser);

//   sign in an user
router.post("/sign-in", userController.signInAnUser);

// persist an user to logged in
router.get("/myself", verifyTokenMiddleware, userController.persistMeLogin);

// fetch all user
router.get(
  "/all-users",
  verifyTokenMiddleware,
  authorizeRoleMiddleware("admin"),
  userController.displayAllUsers
);

// reset password
router
  .route("/reset-password")
  .get(userController.confirmPasswordReset)
  .patch(userController.forgotPassword);

/* export user router */
module.exports = router;
