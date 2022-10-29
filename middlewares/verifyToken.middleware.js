/**
 * Title: Token verification
 * Description: Verify token to access routes
 * Author: Hasibul Islam
 * Date: 29/10/2022
 */

/* external imports */
const jwt = require("jsonwebtoken");
const { promisify } = require("util");

module.exports = async (req, res, next) => {
  try {
    // catch the token from user header
    const token = req.headers?.authorization?.split(" ")[1];

    // no token explicitly give error
    if (!token) {
      return res.status(401).json({
        acknowledgement: false,
        message: "Unauthorized",
        description:
          "The request was a legal request, but the server is refusing to respond to it. For use when authentication is possible but has failed or not yet been provided",
      });
    }

    // fetching token set the user on request
    const decoded = await promisify(jwt.verify)(
      token,
      process.env.TOKEN_SECRET
    );
    req.user = decoded;

    next();
  } catch (error) {
    next(error);
  }
};
