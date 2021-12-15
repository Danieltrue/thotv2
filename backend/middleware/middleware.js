const morgan = require("morgan");
const helmet = require("helmet");
const api_url = process.env.API_URL;
const router = require("../routes/routes");
const connectDB = require("../config/db");
const upload = require("express-fileupload");
const errorHandler = require("./errorHandler");

function middleware(app) {
  app.use(morgan("tiny"));
  app.use(helmet());
  app.use(upload());
  app.use(api_url, router);
  app.use(errorHandler);
  connectDB();
}

module.exports = middleware;
