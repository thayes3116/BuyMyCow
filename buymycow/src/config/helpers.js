// Include the axios package for performing HTTP requests (promise based alternative to request)
var axios = require("axios");

var api_url = process.env.API_URL || 'https://localhost:3001'
// Helper functions for making API Calls
var helper = {

	
  	getBids: function() {
  		console.log(api_url);
    	return axios.get('http://localhost:3001/api/bids/');
  	}

}

// We export the API helper
module.exports = helper;