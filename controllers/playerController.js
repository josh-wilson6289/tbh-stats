const db = require("../models");
const { where } = require("../models/player");

module.exports = {
  findPlayersBySeason: function(req, res) {
    console.log("season search");
    db.Player.aggregate([
      { $match: { "seasons.season": req.query.season }}   
    ])
      .sort({ lastName: 1 })
      .then(dbPlayer => res.json(dbPlayer))
      .catch(err => res.status(422).json(err));
  },

  findAllPlayers: function(req, res) {
    db.Player.find(req.query)
    .sort({ lastName: 1 })
    .then(dbPlayer => res.json(dbPlayer))
    .catch(err => res.status(422).json(err));
  },

  searchPlayer: function(req, res) {
    db.Player.find( { $or: [{ firstName: req.query.search}, {lastName: req.query.search} ]})


    .sort({lastName: 1 })
    .then(console.log("search player"))
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