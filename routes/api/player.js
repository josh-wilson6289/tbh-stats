const router = require("express").Router();
const playerController = require("../../controllers/playerController");

router.route("/")
  .get(playerController.findAllPlayers)
  .post(playerController.create);

  router.route("/:season")
  .get(playerController.findPlayersBySeason);


module.exports = router;