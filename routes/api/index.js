const router = require("express").Router();
const controller = require("../../controllers/controller");

router
  .route("/api/projects")
  .get(controller.findAll());

module.exports = router;