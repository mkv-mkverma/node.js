const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

let password = "123abc";
// for hasing password
// bcrypt.genSalt(10, (err, salt) => {
//   bcrypt.hash(password, salt, (err, hash) => {
//     console.log(hash);
//   });
// });

let hashedPassword =
  "$2a$10$gmjc4ojpllGB2ESsLiqPcOy3X4A3T7uHQHuCAd9tU9HhB4HYTRA2C";

bcrypt.compare(password, hashedPassword, (err, res) => {
  console.log(res);
});

// jwt token
let data = {
  id: 10
};

// create token
// 123abc is secret key and it can be anything
let token = jwt.sign(data, "123abc");
console.log(token);

// varify token
let decoded = jwt.verify(token, "123abc");
console.log("decoded", decoded);
