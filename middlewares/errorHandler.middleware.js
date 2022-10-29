/**
 * Title: Global error handler
 * Description: Handle all errors from all ends
 * Author: Hasibul Islam
 * Date: 29/10/2022
 */

module.exports = async (error, request, response, next) => {
  response.status(500).json({
    acknowledgement: false,
    message: error.name,
    description: error.message,
  });
};
