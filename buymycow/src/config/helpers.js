// Include the axios package for performing HTTP requests (promise based alternative to request)
var axios = require("axios");

// Helper functions for making API Calls
var helper = {

	
  	getBids: function() {
    	return axios.get("https://localhost:8080/api/saved/");
  	},

}

// We export the API helper
module.exports = helper;