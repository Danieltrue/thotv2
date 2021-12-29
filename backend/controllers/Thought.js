const thought = require("../model/Thought");
const user = require("../model/User");
const category = require("../model/Category");

const ErrorResponse = require("../utils/errorResponse");
//@Desc create a thought
//@Route /thot/create-post
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
//@Route /thot/post
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
//@Route /thot/post/like/:id?postid=postid
//@Route Private
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
