const router = require("express").Router();
const playerRoute = require("./player");
const teamRoute = require("./team");
const searchRoute = require("./search");

router.use("/player", playerRoute);
router.use("/team", teamRoute);
router.use("/search", searchRoute);

module.exports = router;