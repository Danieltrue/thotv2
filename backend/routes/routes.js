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
  getSingleThought,
  getTheUserLikedThought,
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
router.route("/post/:id").get(getSingleThought);
router.route("/liked/:id").get(protect, getTheUserLikedThought);
module.exports = router;
