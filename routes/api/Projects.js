const router = require("express").Router();
const controller = require("../../controllers/projectsController");

router
  .route("/Projects")
  .get(controller.findAll)
  .post(controller.create);

router
  .route("/Projects/:id")
  .get(controller.findById)
  .get(controller.findByOwner)
  .put(controller.update)
  .delete(controller.remove);
  // app.get( "/Projects", (req, res) =>
  //   db.Projects.findAll().then( (result) => res.json(result) )
  // );

  // app.get( "/Projects/:id", (req, res) =>
  //   db.Projects.findById(req.params.id).then( (result) => res.json(result))
  // );

  // app.post("/Projects", (req, res) => 
  //   db.Projects.create({
  //   projectName: req.body.projectName,
  //   residenceAddr: req.body.residenceAddr,
  //   residenceCity: req.body.residenceCity,
  //   residenceState: req.body.residenceState,
  //   residenceZip: req.body.residenceZip,
  //   thirdPartyId: req.body.thirdPartyId,
  //   repairCategory: req.body.repairCategory,
  //   repairTimeline: req.body.repairTimeline,
  //   repairDetail: req.body.repairDetail,
  //   repairComments: req.body.repairComments,
  //   submitDate: req.body.submitDate,
  //   commentId: req.body.commentId,
  //   ownerId: req.body.ownerId,
  //   contractorId: req.body.contractorId,
  //   projectState: req.body.projectState,
  //   calendly: req.body.calendly,
  //   tenantId: req.body.tenantId,
  //   googleDrive: req.body.googleDrive
  //   }).then((result) => res.json(result) )
  // );

  // app.put( "/Projects/:id", (req, res) =>
  //   db.Projects.update({
  //   projectName: req.body.projectName,
  //   residenceAddr: req.body.residenceAddr,
  //   residenceCity: req.body.residenceCity,
  //   residenceState: req.body.residenceState,
  //   residenceZip: req.body.residenceZip,
  //   thirdPartyId: req.body.thirdPartyId,
  //   repairCategory: req.body.repairCategory,
  //   repairTimeline: req.body.repairTimeline,
  //   repairDetail: req.body.repairDetail,
  //   repairComments: req.body.repairComments,
  //   submitDate: req.body.submitDate,
  //   commentId: req.body.commentId,
  //   ownerId: req.body.ownerId,
  //   contractorId: req.body.contractorId,
  //   projectState: req.body.projectState,
  //   calendly: req.body.calendly,
  //   tenantId: req.body.tenantId,
  //   },
  //   {
  //     where: {
  //       idprojects: req.params.id
  //     }
  //   }).then( (result) => res.json(result) )
  // );

  // app.delete( "/Projects/:id", (req, res) =>
  //   db.Projects.destroy({
  //     where: {
  //       idprojects: req.params.id
  //     }
  //   }).then( (result) => res.json(result) )
  // );
  // If no API routes are hit, send the React app
  router.use(function(req, res) {
    res.sendFile(path.join(__dirname, "../client/public/index.html"));
  });

module.exports = router;