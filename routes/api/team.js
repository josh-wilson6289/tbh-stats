const router = require("express").Router();
const teamController = require("../../controllers/teamController");

router.route("/")
  .get(teamController.findAllTeams)
  .post(teamController.create);

router.route("/season")
  .get(teamController.findTeamsBySeason);

router.route("/search")
  .get(teamController.searchTeam);

router.route("/search/:season")
  .get(teamController.searchTeamBySeason);

  module.exports = router;