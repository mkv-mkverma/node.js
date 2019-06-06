const { ObjectID } = require("mongodb");
const jwt = require("jsonwebtoken");

const { Todo } = require("./../../models/todo");
const { User } = require("./../../models/user");

const userOneId = new ObjectID();
const userTwoId = new ObjectID();

const users = [
  {
    _id: userOneId,
    email: "mvmanish2@gmail.com",
    password: "userOnePass",
    tokens: [
      {
        access: "auth",
        token: jwt.sign({ _id: userOneId, access: "auth" }, process.env.JWT_SECRET).toString()
      }
    ]
  },
  {
    _id: userTwoId,
    email: "jen@gmail.com",
    password: "userTwoPass",
    tokens: [
        {
          access: "auth",
          token: jwt.sign({ _id: userTwoId, access: "auth" }, process.env.JWT_SECRET).toString()
        }
      ]
  }
];

const todos = [
  {
    _id: new ObjectID(),
    text: "First test todo",
    _creator: userOneId
  },
  {
    _id: new ObjectID(),
    text: "Second test todo",
    completed: true,
    completedAt: 333,
    _creator: userTwoId
  }
];

const populateTodos = done => {
  Todo.remove({})
    .then(() => {
      return Todo.insertMany(todos);
    })
    .then(() => done());
};

const populateUsers = done => {
  User.remove({})
    .then(() => {
      let userOne = new User(users[0]).save();
      let userTwo = new User(users[1]).save();
      // The method to run many promises in parallel and wait till all of them are ready.
      // It takes an iterable object with promises, technically it can be any iterable, but usually it’s an array, and returns a new promise. The new promise resolves with when all of them are settled and has an array of their results.
      return Promise.all([userOne, userTwo]);
    })
    .then(() => done());
};

module.exports = { todos, populateTodos, users, populateUsers };
