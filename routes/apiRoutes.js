const router = require("express").Router();
const db = require("../models");

router.get("/player", (req, res) => {
  console.log("get route");

  // db.Stats.find({
  //   id: req.body.id
  // })
  // .then(stats => res.json(stats))
  // .catch(err => res.status(422).end());
});

module.exports = router;