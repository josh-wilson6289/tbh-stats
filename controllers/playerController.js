const db = require("../models");
const { where } = require("../models/player");

module.exports = {
  findAll: function(req, res) {
    db.Player.aggregate([
      { $match: { "seasons.season": req.query.season }}
        
    ])
      .then(dbPlayer => res.json(dbPlayer))
      .catch(err => res.status(422).json(err));
  },

  create: function(req, res) {
    db.Player.create(req.body)
      .then(dbPlayer => res.json(dbPlayer))
      .catch(err => res.status(422).json(err));
  },

  findById: function(req, res) {
    db.Player.findById(req.params.id) 
      .then(dbPlayer => res.json(dbPlayer))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.Player.findOneAndUpdate({ id: req.params.id }, req.body)
    .then(dbPlayer => res.json(dbPlayer))
    .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.Player.findById(req.params.id) 
    .then(dbPlayer => dbPlayer.remove())
    .then(dbPlayer => res.json(dbPlayer))
    .catch(err => res.status(422).json(err));
  }
};