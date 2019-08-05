const db = require("../models");

module.exports = {
    findAll: function (req, res) {
        db.Tenants
            .findAll({
                ownerid: req.body.owner
            })
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    findByOwner: function (req, res) {
        db.Tenants
            .findAll({
                ownerid: req.body.owner
            })
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    findById: function (req, res) {
        db.Tenants
            .findOne({
                idTenants: req.params.id
            })
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    create: function (req, res) {
        db.Tenants
            .create(req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    update: function (req, res) {
        const newData = req.body;
        db.Tenants
            .update(newData, { where: { id: req.params.id } })
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    remove: function (req, res) {
        db.Tenants
            .destroy({ where: { id: req.params.id } })
            .then(dbModel => dbModel.remove())
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    }
};
