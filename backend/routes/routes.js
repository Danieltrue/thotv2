const express = require("express");
const router = express.Router();
const protect = require("../middleware/auth");
//Controllers
//USER CONTROLLER
const { registerUser, loginUser, getProfile } = require("../controllers/User");
//THOUGHT CONTROLLER
const {
  createThought,
  getAllThought,
  likeThought,
  getUserThought,
  deleteUserThought,
} = require("../controllers/Thought");
//Route
router.route("/register").post(registerUser);
router.route("/login").post(loginUser);
router.route("/profile").get(protect, getProfile);
//
router.route("/create-post").post(protect, createThought);
router.route("/post").get(getAllThought);
router.route("/post/like/:id").put(protect, likeThought);
router.route("/post/:id/thot").get(protect, getUserThought);
router.route("/post/:id/delete").delete(protect, deleteUserThought);
module.exports = router;
