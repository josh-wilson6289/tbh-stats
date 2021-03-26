const router = require("express").Router();
const playerController = require("../../controllers/playerController");

router.route("/")
  .get(playerController.findAllPlayers)
  .post(playerController.create);

  router.route("/season/:season")
  .get(playerController.findPlayersBySeason);

  router.route("/:id")
  .get(playerController.findById);

module.exports = router;