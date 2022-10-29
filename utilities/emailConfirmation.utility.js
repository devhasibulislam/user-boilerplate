/**
 * Title: Confirmation token sender
 * Description: Send token through email to user throughout Nodemailer
 * Author: Hasibul Islam
 * Date: 29/10/2022
 */

/* external import */
const nodemailer = require("nodemailer");

/* internal import */
const consoleMessage = require("./consoleMessage.utility");

module.exports = (userEmail, token, protocol, host, slug) => {
  const transporter = nodemailer.createTransport({
    service: process.env.APP_SERVICE,
    auth: {
      user: process.env.APP_EMAIL,
      pass: process.env.APP_PASSWORD,
    },
  });

  var mailOptions = {
    from: process.env.APP_EMAIL,
    to: userEmail,
    subject: "Validation code to confirm registration",
    text: `Thank you for ${
      (slug === "sign-up" && "Signing up") ||
      (slug === "reset-password" && "Forgot password")
    }.
    Please, confirm by clicking here: ${protocol}://${host}/user/${slug}?token=${token}`,
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      //   console.log(error.name);
      consoleMessage.errorMessage(error.name);
    } else {
      //   console.log("Email sent to: " + info.envelope.to[0]);
      consoleMessage.successMessage(`Email sent to: ${info.envelope.to[0]}`);
    }
  });
};
