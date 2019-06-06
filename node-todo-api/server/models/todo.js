const mongoose = require("mongoose");

let Todo = mongoose.model("Todo", {
  text: {
    type: String,
    required: true,
    minlength: 2,
    trim: true // trim off white space in begning or end of the value
  },
  completed: {
    type: Boolean,
    default: false
  },
  completedAt: {
    type: Number,
    default: null
  },
  _creator:{
    type: mongoose.Schema.Types.ObjectId,
    required: true
  }
});

module.exports = { Todo };
