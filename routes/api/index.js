const router = require("express").Router();
const playerRoute = require("./player");

router.use("/player", playerRoute);

module.exports = router;