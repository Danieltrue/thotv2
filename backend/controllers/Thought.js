const thought = require("../model/Thought");
const user = require("../model/User");
const category = require("../model/Category");

const ErrorResponse = require("../utils/errorResponse");
//@Desc create a thought
//@Route POST /thot/create-post
//@Access Private
exports.createThought = async (req, res, next) => {
  try {
    //Find user
    const foundUser = await user.findById(req.body.user.id);

    if (!foundUser) return next(new ErrorResponse(`User Was not Found`, 404));

    //add category
    const categoryName = req.body.category.toLowerCase();
    //Find one
    const foundCategory = await category.findOne({ name: categoryName });

    let categoryId;
    //Found Category
    if (foundCategory) {
      categoryId = foundCategory._id;
    } else {
      const newCat = await category.create({
        name: categoryName,
      });
      categoryId = newCat._id;
    }

    //Create a New Post
    const newPost = await thought.create({
      user: req.body.user.id,
      body: req.body.thought,
    });
    newPost.category.push(categoryId);

    await newPost.save();
    //Add the Article to the user array
    foundUser.thought.push(newPost._id);
    await foundUser.save();
    //return success
    return res.status(200).send({ success: true, newPost });
  } catch (err) {
    next(new ErrorResponse(`Something Went Wrong`, 500));
  }
};
//@Desc get all thought
//@Route GET /thot/post
//@Access Public
exports.getAllThought = async (req, res, next) => {
  try {
    const thoughtData = await thought
      .find()
      .populate({ path: "user", select: "-password" })
      .populate({ path: "category" });

    if (!thoughtData)
      return await next(new ErrorResponse(`Thought Not Found`, 404));

    return await res.status(200).send(thoughtData);
  } catch (err) {}
};
//Like Thoughts
//@Route PUT /thot/post/like/:id?postid=postid
//@Access Private
exports.likeThought = async (req, res, next) => {
  try {
    const userWhoLike = req.params.id;
    const postId = req.query.postid;

    //Find the user
    const userWhoLiked = await user.findOne({ _id: req.params.id });
    const postLiked = await thought.findOne({ _id: req.query.postid });

    if (!userWhoLiked)
      return await next(new ErrorResponse(`Sorry Something Went Wrong`, 404));

    if (userWhoLiked.liked.includes(postId) === true) {
      //if user was found
      userWhoLiked.liked.pop(postId);
      await userWhoLiked.save();
    } else {
      userWhoLiked.liked.push(postId);
      await userWhoLiked.save();
    }

    if (postLiked.wholiked.includes(userWhoLike) === true) {
      postLiked.wholiked.pop(userWhoLike);
      postLiked.likes--;
      await postLiked.save();
    } else {
      postLiked.wholiked.push(userWhoLike);
      postLiked.likes = postLiked.wholiked.length;
      await postLiked.save();
    }
  } catch (err) {
    next(new ErrorResponse(`Something Went Wrong`, 500));
  }
};
//Get User Thoght
//@Route GET /thot/post/:id/thot
//@Access Private
exports.getUserThought = async (req, res, next) => {
  try {
    const findThought = await thought
      .find({ user: req.params.id })
      .populate({ path: "user", select: "-password" })
      .populate({ path: "category" });

    if (!findThought)
      return await next(new ErrorResponse(`Can't Find Thought`, 404));

    return res.status(200).json({
      findThought,
    });
  } catch (err) {
    next(new ErrorResponse(`Something Went Wrong`, 500));
  }
};
//Delete User Thought
//@Route DELETE /thot/post/:id/delete
//@Access Private
exports.deleteUserThought = async (req, res, next) => {
  try {
    const findThought = await thought.findByIdAndDelete(req.params.id);

    if (findThought) return res.status(200).json({ success: true });
  } catch (err) {
    next(new ErrorResponse(`Something Went Wrong`, 500));
  }
};
//@Desc Get Single Thought
//@Route GET /thot/post/:id
//@Access Public
exports.getSingleThought = async (req, res, next) => {
  try {
    const findThought = await thought
      .findById(req.params.id)
      .select("-user")
      .populate({ path: "category", select: "name" });

    if (findThought) return res.status(200).send({ findThought });
  } catch (err) {
    next(new ErrorResponse(`Something Went Wrong`, 500));
  }
};
//@Desc get the Liked Thought
//@Route GET /thot/liked/:id
//@Access Private
exports.getTheUserLikedThought = async (req, res, next) => {};
