const router = require("express").Router();
const ownersController = require("../../controllers/ownersController");

router
  .route("/Owners")
  .get(ownersController.findAll)
  .post(ownersController.create);

router
  .route("/Owners/:id")
  .get(ownersController.findById)
  .get(ownersController.findByOwner)
  .put(ownersController.update)
  .delete(ownersController.remove);
  
  router.use(function(req, res) {
    res.sendFile(path.join(__dirname, "../client/public/index.html"));
  });

module.exports = router;