const express = require("express");
const router = express.Router();
const UserController = require("../Controllers/usersController");

// Auth Routes
router.post("/sign-up", UserController.AddUser);

module.exports = router;
