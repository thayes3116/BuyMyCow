var connection = require('../connection/connection.js');

var model = {

	selectBids: function(cow, cb) {

		var querystring = "SELECT * FROM `Bids` LEFT JOIN `Cows` ON `Bids`.`cow_id` = `Cows`.`id` WHERE `Cows`.`id` = '" + cow + "';"
		// console.log(querystring);

		connection.query(querystring, function(err, result){
			
			if (err) throw err;

			// console.log(result);

			cb(result);
		});

	},

	selectHighestBid: function (cow, cb){

		var queryString = "SELECT * FROM `Bids` LEFT JOIN `Cows` ON `Bids`.`cow_id` = `Cows`.`id` WHERE `Cows`.`id` = "+ cow +" ORDER BY `Bids`.`bidamount` DESC LIMIT 1;"
		
		// console.log(queryString);

		connection.query(queryString, function(err, result){
			
			if (err) throw err;

			// console.log(result);

			cb(result);
		});
	},

	selectCows: function (cb){

		var queryString = "SELECT * FROM `Cows`;";

		connection.query(queryString, function(err, result){

			if (err) throw err;

			// console.log(result);

			cb(result);
		});
	},

	newBid: function(cowid, bidder, bidAmount, cb){

		var queryString = "INSERT INTO `Bids` (`bidder`, `bidamount`, `cow_id`) VALUES ('"+ bidder +"', "+ bidAmount + ", "+ cowid +");";

		console.log(queryString);

		connection.query(queryString, function(err, result){

			if (err) throw err;

			console.log(result);

			cb(result);
		})

	}
}

module.exports = model;

	
