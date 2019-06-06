const express = require("express");

let app = express();

app.get("/", (request, response) => {
  response.status(200).send("Hello World !");
});

app.get("/user", function(req, res) {
  res.status(200).json({ name: "john", error: "Page not found" });
});

app.get("/userInfo", function(req, res) {
  res
    .status(200)
    .json([{ name: "john", age: 26 }, { name: "Manish", error: 27 }]);
});

// app listen is going to bind the application to a port on our machine.
app.listen(3000, () => {
  console.log(
    "Server is up and running on port: 3000. URL: http://localhost:3000"
  );
});

module.exports = { app };
