var db = require("../models");

module.exports = function (app) {
    app.get("/api/comments",
    function (req, res) {
        db.Comments.findAll({}).then(function(comments) {
            res.json(comments);
        });
    });

    app.get("/api/comments", function (req, res) {
        db.Comments.findOne({
            where: {
                id: req.params.id
            }
        }).then(function(comment) {
            res.json(comment);
        });
    });

    app.post("/api/comments",
    function (req, res) {
        db.Comments.create(req.body).then(function(comment) {
            res.json(comment);
        });
    });

    app.put("/api/comments/:id", function (req, res) {
        db.Comments.update({
            where: {
                id: req.params.id
            }
        }).then(function(comment) {
            res.json(comment);
        });
    });

    app.delete("/api/comments/:id", function (req, res) {
        db.Comments.destroy({
            where: {
                id: req.params.id
            }
        }).then(function(comment) {
            res.json(comment);
        });
    });

};