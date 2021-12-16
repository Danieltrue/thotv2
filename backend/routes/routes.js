const express = require("express");
const router = express.Router();
const protect = require("../middleware/auth");
//Controllers
//USER CONTROLLER
const { registerUser, loginUser, getProfile } = require("../controllers/User");
//THOUGHT CONTROLLER
const { createThought, getAllThought } = require("../controllers/Thought");
//Route
router.route("/register").post(registerUser);
router.route("/login").post(loginUser);
router.route("/profile").get(protect, getProfile);
//
router.route("/create-post").post(createThought);
router.route("/post").get(getAllThought);
module.exports = router;
