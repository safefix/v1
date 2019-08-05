const router = require("express").Router();
const tenantsController = require("../../controllers/tenantsController");

router
  .route("/Owners")
  .get(tenantsController.findAll)
  .post(tenantsController.create);

router
  .route("/Owners/:id")
  .get(tenantsController.findById)
  .get(tenantsController.findByOwner)
  .put(tenantsController.update)
  .delete(tenantsController.remove);
  
  router.use(function(req, res) {
    res.sendFile(path.join(__dirname, "../client/public/index.html"));
  });

module.exports = router;