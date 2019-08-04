const path = require("path");
const apiRoutes = require("./api");

// API Routes
module.exports = (app, db) => {
  app.use("/api/projects", apiRoutes)(app, db);
// If no API routes are hit, send the React app
  app.use(function(req, res) {
    res.sendFile(path.join(__dirname, "../client/public/index.html"));
  });
};
