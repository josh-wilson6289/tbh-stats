const db = require("../models");

module.exports = {
  findAll: function(req, res) {
    db.Player.find(req.query)
      .then(dbPlayers => res.json(dbPlayers))
      .catch(err => res.status(422).json(err));
  },

  create: function(req, res) {
    db.Player.create(req.body)
      .then(dbPlayers => res.json(dbPlayers))
      .catch(err => res.status(422).json(err));
  },

  findById: function(req, res) {
    db.Player.findById(req.params.id) 
      .then(dbPlayers => res.json(dbPlayers))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.Player.findOneAndUpdate({ id: req.params.id }, req.body)
    .then(dbPlayers => res.json(dbPlayers))
    .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.Player.findById(req.params.id) 
    .then(dbPlayers => dbPlayers.remove())
    .then(dbPlayers => res.json(dbPlayers))
    .catch(err => res.status(422).json(err));
  }
};