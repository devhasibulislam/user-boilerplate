/**
 * Title: Role authorization
 * Description: Authorize routes based on role or roles
 * Author: Hasibul Islam
 * Date: 29/10/2022
 */

module.exports = (...role) => {
  return (req, res, next) => {
    // catch & match the user role
    const userRole = req.user.role;

    // revoke access based on role
    if (!role.includes(userRole)) {
      return res.status(403).json({
        acknowledgement: false,
        message: "Forbidden",
        description:
          "The request was a legal request, but the server is refusing to respond to it",
      });
    }

    next();
  };
};
