const db = require("../models");
const { where } = require("../models/team");

module.exports = {
  findAll: function (req, res) {
    db.Team.aggregate([
      { $match: { "season": req.query.season }} 
    ])
      .then(dbTeam => res.json(dbTeam))
      .catch(err => res.status(422).json(err));
  },

  create: function (req, res) {
    db.Team.create(req.body)
      .then(dbTeam => res.json(dbTeam))
      .catch(err => res.status(422).json(err));
  },

  findById: function (req, res) {
    db.Team.findById(req.params.id)
      .then(dbTeam => res.json(dbTeam))
      .catch(err => res.status(422).json(err));
  },
  update: function (req, res) {
    db.Team.findOneAndUpdate({ id: req.params.id }, req.body)
    .then(dbTeam => res.json(dbTeam))
    .catch(err => res.status(422).json(err));
  },
  remove: function (req, res) {
    db.Team.findById(req.params.id)
    .then(dbTeam => dbTeam.remove())
    .then(dbTeam => res.json(dbTeam))
    .catch(err => res.status(422).json(err));
  }
};