const express = require("express");
const AuthController = require("../Controller/AuthController");
const app = express();
const router = express.Router();
router.post("/login", AuthController.login);
router.post("/register", AuthController.register);

module.exports = router;
