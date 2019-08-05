const router = require("express").Router();
const thirdpartiesController = require("../../controllers/thirdpartiesController");

router
  .route("/ThirdParties")
  .get(thirdpartiesController.findAll)
  .post(thirdpartiesController.create);

router
  .route("/ThirdParties/:id")
  .get(thirdpartiesController.findById)
  .get(thirdpartiesController.findByOwner)
  .put(thirdpartiesController.update)
  .delete(thirdpartiesController.remove);
  
  router.use(function(req, res) {
    res.sendFile(path.join(__dirname, "../client/public/index.html"));
  });

module.exports = router;