const { ObjectID } = require("mongodb");
const { mongoose } = require("./../server/datebase/mongoose");
const { Todo } = require("./../server/models/todo");
const { User } = require("./../server/models/user");

let id = "5c29ec1d05ccf9348ca4a822";
let userId = "5c18cdf18cbec7492807affa";

if (!ObjectID.isValid(id)) {
  console.log("ID not valid");
}

Todo.find({
  _id: id
}).then(todos => {
  console.log("Todos", todos);
});

Todo.findOne({
  _id: id
}).then(todo => {
  console.log("Todos", todo);
});

Todo.findById(id)
  .then(todo => {
    if (!todo) {
      return console.log("Id not found");
    }
    console.log("Todos", todo);
  })
  .catch(e => {
    console.log(e);
  });

//   User

User.find({
  _id: userId
}).then(user => {
  console.log("User", user);
});

User.findOne({
  _id: userId
}).then(user => {
  console.log("User", user);
});

User.findById(userId)
  .then(user => {
    if (!user) {
      return console.log("Id not found");
    }
    console.log("User", user);
  })
  .catch(e => {
    console.log(e);
  });
