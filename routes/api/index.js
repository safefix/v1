const path = require("path");
const router = require("express").Router();
const Projects = require("./Projects");
const Comments = require("./Comments");
const Contractors = require("./Contractors");
const Owners = require("./Owners");
const Tenants = require("./Tenants");
const ThirdParties = require("./ThirdParties")

// Model routes
router.use("/Comments", Comments);
router.use("/Contractors", Contractors);
router.use("/Owners", Owners);
router.use("/Projects", Projects);
router.use("/Tenants", Tenants);
router.use("/ThirdParties", ThirdParties);

// For anything else, render the html page
router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../../client/build/index.html"));
});

module.exports = router;