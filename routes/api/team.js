const router = require("express").Router();
const teamController = require("../../controllers/teamController");

router.route("/")
  .get(teamController.findAllTeams)
  .post(teamController.create);

  router
  .route("/:season")
  .get(teamController.findTeamsBySeason);

  module.exports = router;