const db = require("../models");
const { where } = require("../models/user");

module.exports = {
  getUsers: function(req, res) {
    db.User.find(req.query)
    .then(dbUser => res.json(dbUser))
    .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    db.User.create(req.body)
    .then(dbUser => res.json(dbUser))
    .catch(err => res.status(422).json(err));
  }
};