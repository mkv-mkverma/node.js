require("./config/config");

const _ = require("lodash");
const bodyParser = require("body-parser");
const { ObjectID } = require("mongodb");

const { mongoose } = require("./datebase/mongoose");
const { Todo } = require("./models/todo");
const { User } = require("./models/user");
const { authenticate } = require("./middleware/authenticate");
const bcrypt = require("bcryptjs");

const express = require("express");
const app = express();
// const port = process.env.PORT || 3000;

// Parse incoming request bodies in a middleware before your handlers,
// available under the req.body property.
app.use(bodyParser.json());

// Post Route

app.post("/todos", authenticate, (request, response) => {
  let newTodo = new Todo({
    text: request.body.text,
    _creator: request.user._id
  });

  newTodo.save().then(
    doc => {
      response.status(200).send(doc);
    },
    err => {
      response.status(400).send("Unable to connetc to server", err);
    }
  );
  console.log(request.body);
});

// User Model SAVE
app.post("/users", (request, response) => {
  let newUser = new User({
    email: request.body.email
  });

  newUser.save().then(
    doc => {
      response.status(200).send(doc);
    },
    err => {
      response.status(400).send("Unable to connetc to server", err);
    }
  );
  console.log(request.body);
});

// Get Route

app.get("/todos", authenticate, (req, res) => {
  Todo.find({
    _creator: req.user._id
  }).then(
    todos => {
      res.status(200).send({ todos });
    },
    e => {
      res.status(400).send(e);
    }
  );
});

// GET By ID Route

app.get("/todos/:id", authenticate, (request, response) => {
  let id = request.params.id;

  if (!ObjectID.isValid(id)) {
    return response.status(404).send();
  }
  // Todo.findById(id)
  Todo.findOne({
    _id: id,
    _creator: request.user._id
  })
    .then(todo => {
      if (!todo) {
        return response.status(404).send();
      }
      response.send({ todo });
    })
    .catch(e => {
      response.status(400).send();
    });
});

// Delete By ID Route

app.delete("/todos/:id", authenticate,(request, response) => {
  let id = request.params.id;

  if (!ObjectID.isValid(id)) {
    return response.status(404).send();
  }
  Todo.findOneAndRemove({ _id: id, _creator: request.user._id })
    .then(todo => {
      if (!todo) {
        return response.status(404).send();
      }
      response.send({ todo });
      console.log("Todos", todo);
    })
    .catch(e => {
      response.status(400).send();
    });
});

// UPDATE by ID Route
// it's used to update the items
app.patch("/todos/:id", authenticate,(request, response) => {
  let id = request.params.id;
  // this is extract text and completed from request.body object
  let body = _.pick(request.body, ["text", "completed"]);

  if (!ObjectID.isValid(id)) {
    return response.status(404).send();
  }

  if (_.isBoolean(body.completed) && body.completed) {
    body.completedAt = new Date().getTime();
  } else {
    body.completed = false;
    body.completedAt = null;
  }

  Todo.findOneAndUpdate({_id: id, _creator: request.user._id}, { $set: body }, { new: true })
    .then(todo => {
      if (!todo) {
        return response.status(400).send();
      }
      response.send({ todo });
    })
    .catch(e => {
      response.status(400).send();
    });
});

// POST register user
// Sign Up
app.post("/users/signup/token", (request, response) => {
  let body = _.pick(request.body, ["email", "password"]);
  let user = new User(body);

  user
    .save()
    .then(() => {
      return user.generateAuthToken();
    })
    .then(token => {
      response.header("x-auth", token).send(user); // sending the value
    })
    .catch(e => {
      response.status(400).send(e);
    });
});

// SignIn
app.post("/users/login", (request, response) => {
  let body = _.pick(request.body, ["email", "password"]);

  User.findBycredentials(body.email, body.password)
    .then(user => {
      // response.send(body);
      return user.generateAuthToken().then(token => {
        response.header("x-auth", token).send(user); // sending the value
      });
    })
    .catch(e => {
      response.status(400).send(e);
    });
});

app.get("/users/me", authenticate, (request, response) => {
  response.send(request.user);
});

// Loggin Out DELETE/users/me/token
// Make this route private by adding authenticate
app.delete("/users/logout/token", authenticate, (request, response) => {
  request.user.removeToken(request.token).then(
    () => {
      response.status(200).send();
    },
    () => {
      response.status(400).send();
    }
  );
});

// app listen is going to bind the application to a port on our machine.
app.listen(3000, () => {
  console.log(
    "Server is up and running on port: 3000. URL: http://localhost:3000"
  );
});

module.exports = { app };

//User Model

// let newTodo = new Todo({
//   text: "cook dinner"
// });

// newTodo.save().then(
//   doc => {
//     console.log("Save Todo", doc);
//   },
//   err => {
//     console.log("Unable to connetc to server", err);
//   }
// );

// let otherTodo = new Todo({
//   text: "            Edit video          "
//   // completed: true,
//   // completedAt: 5
// });

// otherTodo.save().then(
//   doc => {
//     console.log("Save Todo", doc);
//   },
//   err => {
//     console.log("Unable to connetc to server", err);
//   }
// );

// New instance of user model

// let newUser = new User({
//   email: " manishverma.cse@gmail.com  "
// });

// newUser.save().then(
//   doc => {
//     console.log("Save User", doc);
//   },
//   err => {
//     console.log("Unable to connetc to server", err);
//   }
// );
