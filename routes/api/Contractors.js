const router = require("express").Router();
const contractorsController = require("../../controllers/contractorsController");

router
  .route("/Contractors")
  .get(contractorsController.findAll)
  .post(contractorsController.create);

router
  .route("/Contractors/:id")
  .get(contractorsController.findById)
  .get(contractorsController.findByOwner)
  .put(contractorsController.update)
  .delete(contractorsController.remove);
  
  router.use(function(req, res) {
    res.sendFile(path.join(__dirname, "../client/public/index.html"));
  });

module.exports = router;