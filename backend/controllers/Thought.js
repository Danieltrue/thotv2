const thought = require("../model/Thought");
const user = require("../model/User");
const ErrorResponse = require("../utils/errorResponse");
//@Desc create a thought
//@Route /thot/create-post
//@Access Private
exports.createThought = async (req, res, next) => {
  console.log(req.body);
};
//@Desc get all thought
//@Route /thot/post
//@Access Public
exports.getAllThought = async (req, res, next) => {
  try {
    const thoughtData = await thought
      .find()
      .populate({ path: "user", select: "username role profileimage" });

    if (!thoughtData)
      return await next(new ErrorResponse(`Thought Not Found`, 404));

    return await res.status(200).send(thoughtData);
  } catch (err) {
    next(new ErrorResponse(`Something Went Wrong`, 500));
  }
};
