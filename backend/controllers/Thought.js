const thought = require("../model/Thought");
const user = require("../model/User");
const ErrorResponse = require("../utils/errorResponse");
//@Desc create a thought
//@Route /thot/create-post
//@Access Private
exports.createThought = async (req, res, next) => {
  try {
    const thoughtData = await thought.create({
      user: req.body.user,
      body: req.body.body,
    });
    const foundUser = await user.findById({ _id: req.body.user });

    if (!foundUser) {
      return await next(new ErrorResponse(`User Not Found`, 404));
    } else {
      await foundUser.thought.push(thoughtData._id);
      await thoughtData.save();
      await foundUser.save();
    }

    await res.status(200).send(thoughtData);
  } catch (err) {
    next(new ErrorResponse(`Something Went Wrong`, 500));
  }
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
