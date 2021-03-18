const router = require("express").Router();
const playerRoute = require("./player");
const teamRoute = require("./team");
const searchPlayerRoute = require("./searchPlayer");
const searchTeamRoute = require("./searchTeam");

router.use("/player", playerRoute);
router.use("/team", teamRoute);
router.use("/searchPlayer", searchPlayerRoute);
router.use("/searchTeam", searchTeamRoute)

module.exports = router;