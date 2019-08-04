const path = require("path");
const router = require("express").Router();
const Projects = require("./Projects")

// Model routes
router.use("/Projects", Projects);

// For anything else, render the html page
router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../../client/build/index.html"));
});

module.exports = router;