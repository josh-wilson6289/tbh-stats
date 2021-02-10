const router = require("express").Router();
const playerController = require("../../controllers/playerController");

router.route("/")
  .get(playerController.findAll)
  .post(playerController.create);
  
module.exports = router;