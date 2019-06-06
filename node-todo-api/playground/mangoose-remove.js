const { ObjectID } = require("mongodb");
const { mongoose } = require("./../server/datebase/mongoose");
const { Todo } = require("./../server/models/todo");
const { User } = require("./../server/models/user");

let id = "5c2f113637956f5274e12278";
let userId = "5c18cdf18cbec7492807affa";

if (!ObjectID.isValid(id)) {
  console.log("ID not valid");
}

// Todo.deleteOne({
//   _id: id
// }).then(result => {
//   console.log("Todos", result);
// });

Todo.findByIdAndRemove({
  _id: id
}).then(result => {
  console.log("Todos", result);
});

// Todo.findByIdAndDelete
// Todo.findByIdAndRemove it returns the object which has been deleted
// Todo.findOneAndDelete
// Todo.findOneAndRemove
// Todo.deleteOne  returns { n: 1, ok: 1 }