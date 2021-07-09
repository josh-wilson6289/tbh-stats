const router = require("express").Router();
const userController = require("../../controllers/userController");

router.route("/user")
  .get(userController.getUsers);

  module.exports = router; 