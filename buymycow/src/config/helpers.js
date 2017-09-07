// Include the axios package for performing HTTP requests (promise based alternative to request)
var axios = require("axios");

var api_url = process.env.API_URL || 'http://localhost:3001'
// Helper functions for making API Calls
var helper = {

	
  	getBids: function() {
  		// console.log(api_url);
    	return axios.get(api_url + '/api/bids/');
  	},

  	getHighestBid: function() {
  		return axios.get(api_url + '/api/highestBid/');
  	},

  	getCows: function() {
  		return axios.get(api_url + '/api/cows/');
  	},

  	postBid: function(bidder, bidAmount){
  		return axios.post(api_url + '/api/postBid/',
  			{bidder: bidder,
  				bidAmount: bidAmount
  			}
  		).then(function(response){

  			console.log(response);

  			if(response){
  				return response;
  			}

  		}).catch(function(error){
  			console.log("error", error);
  		});
  	}

}

// We export the API helper
module.exports = helper;