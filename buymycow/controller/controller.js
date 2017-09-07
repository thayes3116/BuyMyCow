//Requiring express and router
var express = require("express");
var router = express.Router();

//Require our model.js
var model = require('../model/model.js');

//Set our root route
router.get("/", function(req, res) {

  res.sendFile(__dirname + "/public/index.html");

});

//Route to handle current bid get request
router.get("/api/bids/", function(req, res) {
    
    // console.log(req.query.cowid, "cowid")
    
   	model.selectBids(req.query.cowid, function(data) {
   		
	    res.send(data);
	
    });

});

//Route to handle current highest bid get request
router.get("/api/highestBid/", function(req, res) {
	   
    model.selectHighestBid(req.query.cowid, function(data){

  	  // console.log("highest bid in controller: ", data);
  	   
      res.send(data);	

    }); 
});

//Route to handle current cows for sale get request
router.get("/api/cows/", function(req, res) {
   
    model.selectCows(function(data){

      // console.log("cows in controller: ", data);
       
      res.send(data); 

    });  
});

//Route to handle new bid post requests
router.post("/api/postBid", function(req, res, next) {

  console.log("Bidder: " + req.body.bidder + "Bid Amount:" + req.body.bidAmount);

  model.newBid(req.body.cowid, req.body.bidder, req.body.bidAmount, function(data) {

      // console.log(data)

      res.redirect("/");
    
  });
});

//export router to use in serever.js
module.exports = router;