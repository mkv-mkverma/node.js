const { User } = require("./../models/user");
// middleware function to make them private

let authenticate = (request, response, next) => {
  let token = request.header("x-auth"); // getting the value

  User.findByToken(token)
    .then(user => {
      if (!user) {
        return Promise.reject();
      }
      request.user = user;
      request.token = token;
      next();
    })
    .catch(e => {
      response.status(401).send();
    });
};

module.exports = { authenticate };
