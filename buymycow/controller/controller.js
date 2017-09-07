//Requiring express and router
var express = require("express");
var router = express.Router();
var cors = require('cors')

var app =express();

app.use(cors());

app.use(function(req, res, next) {
 res.set('Access-Control-Allow-Origin', 'http://localhost:3000');
 res.set('Access-Control-Allow-Credentials', 'true');
 res.set('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT,DELETE');
 res.set('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers');

 res.set('Cache-Control', 'no-cache');
 next();
});

var model = require('../model/model.js');

router.get("/", function(req, res) {
  res.sendFile(__dirname + "/public/index.html");
});


router.get("/api/bids/", function(req, res) {

	var cowid = 1;

   	model.selectBids(cowid, function(data) {
   		
   		console.log("all bids in controller: ", data);
   		
	res.send(data);
	
  });
});

router.get("/api/highestBid/", function(req, res) {
	
	var cowid = 1;
  
    model.selectHighestBid(cowid, function(data){

	    console.log("highest bid in controller: ", data);
	     // res.send(data);	

    });
	
  
});

router.post("/api/bid", function(req, res, next) {

  console.log("BODY: " + req.body.title);

  model.newBid(cow, bidder, bidAmount, function(err) {
    if (err) throw err;

      res.redirect("/");
    
  });
});

module.exports = router;