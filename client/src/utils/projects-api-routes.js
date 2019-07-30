var db = require("../models");

module.exports = function(app) {
  app.get("/api/projects", function(req, res) {
    db.Projects.findAll({}).then(function(projects) {
      res.json(projects);
    });
  });

  app.get("/api/projects/:id", function(req, res) {
    db.Projects.findOne({
      where: {
        id: req.params.id
      }
    }).then(function(project) {
      res.json(project);
    });
  });

  app.post("/api/projects", function(req, res) {
    console.log(req.body);
    db.Projects.create(req.body).then(function(project) {
      res.json(project);
    });
  });

  app.put("/api/projects/:id", function(req, res) {
    db.Projects.update({
      where: {
        id: req.params.id
      }
    }).then(function(project) {
      res.json(project);
    });
  });

  app.delete("/api/projects/:id", function(req, res) {
    db.Projects.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(project) {
      res.json(project);
    });
  });

};
