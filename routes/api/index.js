const router = require("express").Router();
const playerRoute = require("./player");
const teamRoute = require("./team");
const userRoute = require("./user");

router.use("/player", playerRoute);
router.use("/team", teamRoute);
router.use("/user", userRoute);

module.exports = router;