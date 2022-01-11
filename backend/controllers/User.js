const user = require("../model/User");
const bcrypt = require("bcrypt");
const ErrorResponse = require("../utils/errorResponse");
const generateToken = require("../utils/generateToken");
//@Desc Register a user
//@Route /thot/register
//@Access Public
exports.registerUser = async (req, res, next) => {
  try {
    //find a user
    const foundUser = await user.findOne({
      email: req.body.email.toLowerCase(),
    });

    if (foundUser)
      return next(new ErrorResponse(`${foundUser.email} has been used`, 401));

    //hash the password
    const salt = bcrypt.genSaltSync(10);
    const hashedPassword = bcrypt.hashSync(req.body.password, salt);

    //create a new user
    const userData = await user.create({
      firstname: req.body.firstname.toLowerCase(),
      lastname: req.body.lastname.toLowerCase(),
      username: "@thot" + req.body.username.toLowerCase(),
      email: req.body.email.toLowerCase(),
      password: hashedPassword,
    });

    //save the user to the database
    await userData.save();
    return res.status(200).send({ success: true, data: userData });
    //return response
  } catch (err) {
    next(new ErrorResponse(`Something Went Wrong`, 400));
  }
};
//@Desc Login a user
//@Route /thot/login
//@Access Public
exports.loginUser = async (req, res, next) => {
  try {
    const foundUser = await user.findOne({ email: req.body.email });

    if (!foundUser)
      return await next(new ErrorResponse(`${req.body.email} was not found`));

    //validate the hashed password
    const correctPassword = await bcrypt.compareSync(
      req.body.password,
      foundUser.password
    );

    //If password is incorrect
    if (!correctPassword)
      return await next(new ErrorResponse("incorrect Password", 401));

    return await res.status(200).json({
      success: true,
      username: foundUser.username,
      firstname: foundUser.firstname,
      lastname: foundUser.lastname,
      id: foundUser._id,
      email: foundUser.email,
      profileimage: foundUser.profileimage,
      followers: foundUser.followers,
      following: foundUser.following,
      thoughts: foundUser.thoughts,
      liked: foundUser.liked,
      token: generateToken(foundUser._id),
    });
  } catch (err) {
    next(new ErrorResponse(`Something Went Wrong`, 401));
  }
};
// //@Desc Get Profile
// //@Route /thot/profile
// //@Access Private
exports.getProfile = async (req, res) => {
  try {
    const foundUser = await user.findById(req.user._id).select("-password");

    if (!foundUser)
      return await new ErrorResponse(`${req.user.email} not found`, 404);
    //if found
    return await res.status(200).json(foundUser);
  } catch (err) {
    next(new ErrorResponse(`Something Went Wrong`, 401));
  }
};
