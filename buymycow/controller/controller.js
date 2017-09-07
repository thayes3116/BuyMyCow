//Requiring express and router
var express = require("express");
var router = express.Router();

var model = require('../model/model.js');
  var cowid = 1;

router.get("/", function(req, res) {

  res.sendFile(__dirname + "/public/index.html");

});


router.get("/api/bids/", function(req, res) {

   	model.selectBids(cowid, function(data) {
   		
   		console.log("all bids in controller: ", data);
   		
	    res.send(data);
	
    });

});

router.get("/api/highestBid/", function(req, res) {
	 
    model.selectHighestBid(cowid, function(data){

  	  console.log("highest bid in controller: ", data);
  	   
      res.send(data);	

    });
	
  
});

router.get("/api/cows/", function(req, res) {
   
    model.selectCows(function(data){

      console.log("cows in controller: ", data);
       
      res.send(data); 

    });
  
  
});

router.post("/api/postBid", function(req, res, next) {

  console.log("Bidder: " + req.body.bidder + "Bid Amount:" + req.body.bidAmount);

  model.newBid(cowid, req.body.bidder, req.body.bidAmount, function(data) {

      console.log(data)

      res.redirect("/api/bids/");
    
  });
});

module.exports = router;