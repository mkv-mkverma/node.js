console.log("Starting app.js");

const fs = require("fs");
const os = require("os");
const notes = require("./notes.js");

// get operating system user name
let user = os.userInfo();
// console.log(user);

let res = notes.addNotes();
console.log(res);

let sum = notes.addNum(3,5);
console.log(sum);


fs.appendFile(
  "greetings.txt",
  `Hello ${user.username} ! you are ${notes.age}`,
  err => {
    if (err) {
      console.log("unable to write file");
    }
  }
);
