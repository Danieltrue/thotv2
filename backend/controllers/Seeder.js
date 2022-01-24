const thought = require("../model/Thought");
const user = require("../model/User");
const category = require("../model/Category");
const ErrorResponse = require("../utils/errorResponse");

async function clearTheDatabase(types) {
  try {
    const thoughtFound = await thought.find();
    const categoryFound = await category.find();
    const userFound = await user.find();

    // Clear User Data from Database
    if (types === "-clear-user") {
      await user.deleteMany();
    } else if (types === "-clear-cat") {
      // Clear Category Data from Database
      await category.deleteMany();
    } else if (types === "-clear-post") {
      // Clear Thought Post from Database
      await thought.deleteMany();
    }
    await process.exit();
  } catch (err) {
    next(new ErrorResponse(`Something Went Wrong`, 500));
  }
}

module.exports = clearTheDatabase;
