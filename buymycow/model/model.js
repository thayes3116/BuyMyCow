var connection = require('../connection/connection.js');

var model = {

	selectBids: function(cow, cb) {

		var querystring = "SELECT * FROM `Bids` LEFT JOIN `Cows` ON `Bids`.`cow_id` = `Cows`.`id` WHERE `Cows`.`id` = '" + cow + "';"
		console.log(querystring);

		connection.query(querystring, function(err, result){
			if (err) throw err;

			console.log(result);

			cb(result);
		});

	},

	selectHighestBid : function (cow, cb){
		var querystring = "SELECT * FROM `Bids` LEFT JOIN `Cows` ON `Bids`.`cow_id` = `Cows`.`id` WHERE `Cows`.`id` = "+ cow +" ORDER BY `Bids`.`bidamount` DESC LIMIT 1;"
		
		console.log(querystring);

		connection.query(querystring, function(err, result){
			
			if (err) throw err;

			console.log(result);

			cb(result);
		})
	}
}

module.exports = model;

	
