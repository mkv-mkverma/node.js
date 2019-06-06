const mongoose = require("mongoose");
const validator = require("validator"); // to validate email
const jwt = require("jsonwebtoken");
const _ = require("lodash");
const bcrypt = require("bcryptjs");

// {
//   email:'manish@example.com',
//   password:'apsodhgkjkjkjfsdfsf',
//   tokens:[{
//     access: 'auth',
//     token:'sdfsfwchtyhtryhctwtwtw'
//   }]
// }

let UserSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    trim: true,
    minlength: 1,
    unique: true,
    validate: {
      validator: validator.isEmail,
      message: "{VALUE} is not a valid email"
    }
  },
  password: {
    type: String,
    require: true,
    minlength: 6
  },
  tokens: [
    {
      access: {
        type: String,
        required: true
      },
      token: {
        type: String,
        required: true
      }
    }
  ]
});

// this override a method and we send only those data what we want to display

UserSchema.methods.toJSON = function() {
  let user = this;
  let userObject = user.toObject();

  return _.pick(userObject, ["_id", "email"]);
};

UserSchema.methods.generateAuthToken = function() {
  let user = this;
  let access = "auth";
  let token = jwt
    .sign({ _id: user._id.toHexString(), access }, process.env.JWT_SECRET)
    .toString();

  user.tokens.push({ access, token });

  return user.save().then(() => {
    return token;
  });
};

// Instance method

UserSchema.methods.removeToken = function(token) {
  let user = this;

  return user.update({
    $pull: {
      tokens: {
        token: token
      }
    }
  });

  // let you remove item from an Array that matches certain cretria
};

UserSchema.statics.findByToken = function(token) {
  let User = this;
  let decoded;

  try {
    decoded = jwt.verify(token, process.env.JWT_SECRET);
  } catch (e) {
    return Promise.reject();
  }

  return User.findOne({
    _id: decoded._id,
    "tokens.token": token,
    "tokens.access": "auth"
  });
};

// method to check credentials
UserSchema.statics.findBycredentials = function(email, password) {
  let user = this;
  return User.findOne({ email }).then(user => {
    if (!user) {
      return Promise.reject();
    }
    return new Promise((resolve, reject) => {
      bcrypt.compare(password, user.password, (err, res) => {
        if (res) {
          setTimeout(function() {
            resolve(user); // Yay! Everything went well!
          }, 250);
        } else {
          reject();
        }
      });
    });
  });
};

UserSchema.pre("save", function(next) {
  let user = this;

  if (user.isModified("password")) {
    bcrypt.genSalt(10, (err, salt) => {
      bcrypt.hash(user.password, salt, (err, hash) => {
        user.password = hash;
        next();
      });
    });
  } else {
    next();
  }
});

let User = mongoose.model("User", UserSchema);

module.exports = { User };
