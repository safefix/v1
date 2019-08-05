const router = require("express").Router();
const commentsController = require("../../controllers/commentsController");

router
  .route("/Comments")
  .get(commentsController.findAll)
  .post(commentsController.create);

router
  .route("/Comments/:id")
  .get(commentsController.findById)
  .get(commentsController.findByOwner)
  .put(commentsController.update)
  .delete(commentsController.remove);
  
  router.use(function(req, res) {
    res.sendFile(path.join(__dirname, "../client/public/index.html"));
  });

module.exports = router;