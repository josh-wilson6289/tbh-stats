const router = require("express").Router();
const playerController = require("../../controllers/playerController");

router.route("/search")
  router.route("/:search")
  .get(playerController.searchPlayer);

module.exports = router;