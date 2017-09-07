var express = require("express");
var bodyParser = require("body-parser");
var logger = require("morgan");
var cors = require('cors')


// Initialize Express
var app = express();

app.use(cors());

app.use(function(req, res, next) {
 res.set('Access-Control-Allow-Origin', 'http://localhost:3000');
 res.set('Access-Control-Allow-Credentials', 'true');
 res.set('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT,DELETE');
 res.set('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers');

 res.set('Cache-Control', 'no-cache');
 next();
});


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
app.listen(process.env.PORT || 3001, function() {
  console.log("App running on port 3001!");
});