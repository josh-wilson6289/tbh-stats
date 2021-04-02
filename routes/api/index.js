const router = require("express").Router();
const playerRoute = require("./player");
const teamRoute = require("./team");

router.use("/player", playerRoute);
router.use("/team", teamRoute);

module.exports = router;