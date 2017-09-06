// Require packages
var mysql = require('mysql');

// Create \
var connection;
if(process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
    }
else {
    connection = mysql.createConnection({
        port: 3306,
        host: "localhost",
        user: "root",
        password: "",
        database: "cowauction"
    });
};

// Establish connection 
connection.connect(function(err) {
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
    }
    console.log("connected as id " + connection.threadId);
});

// Export connection for our model to use
module.exports = connection;