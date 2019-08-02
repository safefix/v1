var db = require("../models");

module.exports = function (app) {
    app.get("/api/contractors",
    function (req, res) {
        db.Contractors.findAll({}).then(function(contractors) {
            res.json(contractors);
        });
    });

    app.get("/api/contractors",
    function (req, res) {
        db.Contractors.findOne({where: {
                id: req.params.id
            }
        }).then(function(contractor) {
            res.json(contractor);
        });
    });

    app.post("/api/contractors", function (req, res) {
        db.Contractors.create(req.body).then(function(contractor) {
            res.json(contractor);
        });   
    });

    app.put("/api/contractors/:id", function (req, res) {
        db.Contractors.update({
            where: {
                id: req.params.id
            }
        }).then(function(contractor) {
            res.json(contractor);
        });
    });

    app.delete("/api/contractors/:id", function (req, res) {
        db.Contractors.destroy({
            where: {
                id: req.params.id
            }
        }).then(function(contractor) {
            res.json(contractor);
        });
    });
};