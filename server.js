const express = require("express");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;
const mysql = require("mysql");
const db = require("./models");
// const jwt = require('express-jwt');
// const jwtAuthz = require('express-jwt-authz');
// const jwksRsa = require('jwks-rsa');

if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL)
} else {
    connection = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "Shalom77&",
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

// const checkJwt = jwt({
//   // Dynamically provide a signing key
//   // based on the kid in the header and 
//   // the signing keys provided by the JWKS endpoint.
//   secret: jwksRsa.expressJwtSecret({
//     cache: true,
//     rateLimit: true,
//     jwksRequestsPerMinute: 5,
//     jwksUri: `https://handshake-project.auth0.com/.well-known/jwks.json`
//   }),

//   // Validate the audience and the issuer.
//   audience: 'https://api/projects',
//   issuer: `https://handshake-project.auth0.com/`,
//   algorithms: ['RS256']
// });

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Add routes, both API and view
app.use(routes(app, db));

// Start the API server
db.sequelize.sync({ force: true }).then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});