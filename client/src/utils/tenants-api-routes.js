var db = require("../models");

module.exports = function (app) {
    app.get("/api/tenants", function (req, res) {
        db.Tenants.findAll({}).then(function(tenants) {
            res.json(tenants);
        });
    });

    app.get("/api/tenants", function (req, res) {
        db.Tenants.findOne({
            where: {
                id: req.params.id
            }
        }).then(function(tenant) {
            res.json(tenant);
        });
    });

    app.post("/api/tenants", function (req, res) {
        db.Tenants.create(req.body).then(function(tenant) {
            res.json(tenant);
        });
    });

    app.put("/api/tenants/:id", function (req, res) {
        db.Tenants.update({
            where: {
                id: req.params.id
            }
        }).then(function(tenant) {
            res.json(tenant);
        });
    });

    app.delete("/api/tenants/:id", function (req, res) {
        db.Tenants.destroy({
            where: {
                id: req.params.id
            }
        }).then(function(tenant) {
            res.json(tenant);
        });
    });

};

