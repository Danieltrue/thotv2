const jwt = require("jsonwebtoken");
const user = require("../model/User");
const ErrorResponse = require("../utils/errorResponse");

const protect = async (req, res, next) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      token = req.headers.authorization.split(" ")[1];
      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      req.user = await user.findById(decoded.id).select("-password");
      //nexter
      next();
    } catch (err) {
      res.status(401);
      next(new ErrorResponse(`Not Authorized`, 401));
    }
  }
  if (!token) {
    res.status(401);
    next(new ErrorResponse(`Not Authorized`, 401));
  }
};

module.exports = protect;
