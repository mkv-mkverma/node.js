const mongoose = require("mongoose");

mongoose.Promise = global.Promise;
// mongoose.connect("mongodb://localhost:27017/TodoApp",{ useNewUrlParser: true });
mongoose.connect(process.env.MONGODB_URI);

module.exports = { mongoose };
