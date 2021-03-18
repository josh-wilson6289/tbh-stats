const router = require("express").Router();
const teamController = require("../../controllers/teamController");

  router.route("/")
  .get(teamController.searchTeam);

  router.route("/:season")
  .get(teamController.searchTeamBySeason);

module.exports = router;