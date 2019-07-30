const express = require("express");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;
const mysql = require("mysql");
var db = require("./models");

if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL)
} else {
    connection = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: null,
        database: "handShake"
    });
}; 

connection.connect();
module.exports = connection;

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Static directory
app.use(express.static("public"));

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Add routes, both API and view
app.use(routes)(app);

// Start the API server
db.sequelize.sync({ force: true }).then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});