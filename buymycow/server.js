var express = require("express");
var bodyParser = require("body-parser");
var logger = require("morgan");
var mongoose = require("mongoose");

// Initialize Express
var app = express();

app.use(express.static("public"));
app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

// Import routes and give the server access to them.
var routes = require("./controller/controller.js");
app.use("/", routes);



// Listen on port 3000
app.listen(process.env.PORT || 8080, function() {
  console.log("App running on port 8080!");
});