const express = require("express");
const handlebars = require("handlebars");
const hbs = require("hbs");
const fs = require("fs");

let app = express();



hbs.registerHelper("getCurrentDate", () => {
  return new Date().getFullYear();
});

hbs.registerHelper("upperCasePipe", text => {
  return text.toUpperCase();
});

app.set("view engine", "hbs");

// http://localhost:3000/help.html
// express middleware let you configure how your express works
app.use(express.static(__dirname + "/public"));

// The express.static() function returns a function with req, res, and next as its parameter.
// It'll call next() internally if it can't find any file in the public directory that matches the request.

// You always need next() if you're using app.use() as middleware (i.e. it sits in front of any route handlers)
// or else the request will never reach those routes.

// middleware to keep track how our server is working
app.use((request, response, next) => {
  let currentDate = new Date().toString();
  let log = `Date: ${currentDate} , Path: ${request.path} , Method: ${
    request.method
  }`;
  fs.appendFile("server.log", log + "\n", error => {
    if (error) {
      console.log("Unable to connect to server");
    }
  });
  next();
});

// below code will not allow the user to visit other pages
// app.use((request, response, next) => {
//   response.render("maintenance.hbs", {
//     pageTitle: "Will be right back",
//     title: "About Page | Node"
//   });
// });

hbs.registerPartials(__dirname + "/views/partials");

// request stores the ton of info like header, body, method
// app.get("/", (request, response) => {
//   // response.send('<h1>Hello Express !</h1>');
//   response.send({
//     name: "Manish",
//     likes: ["Biking", "Swimming"]
//   });
// });

app.get("/about", (request, response) => {
  //   response.send("<h1>About Page !</h1>");
  response.render("about.hbs", {
    pageTitle: "About Page",
    title: "About Page | Node"
    // currentYear: new Date().getFullYear()
  });
});

app.get("/", (request, response) => {
  response.render("home.hbs", {
    pageTitle: "Home Page",
    title: "Home Page | Node",
    message: "Welcome To Home Page"
    // currentYear: new Date().getFullYear()
  });
});

app.get("/bad", (request, response) => {
  response.send({
    errorMessage: "Unable to handel request"
  });
});

// app listen is going to bind the application to a port on our machine.
app.listen(3000, () => {
  console.log(
    "Server is up and running on port: 3000. URL: http://localhost:3000"
  );
});
