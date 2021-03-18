const router = require("express").Router();
const playerController = require("../../controllers/playerController");

  router.route("/")
  .get(playerController.searchPlayer);

  router.route("/:season")
  .get(playerController.searchPlayerBySeason);

module.exports = router;