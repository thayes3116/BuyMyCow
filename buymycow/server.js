//require npm express, bidy parser, morgan, and cors
var express = require("express");
var bodyParser = require("body-parser");
var logger = require("morgan");
var cors = require('cors')


// Initialize Express
var app = express();

//to assist with server to server communication
app.use(cors());

//set up express static
app.use(express.static("public"));

//use morgan for logging
app.use(logger("dev"));

//set up body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

// Import routes and give the server access to them.
var routes = require("./controller/controller.js");
app.use("/", routes);


// Listen on port 3001
app.listen(process.env.PORT || 3001, function() {
  console.log("App running on port 3001!");
});