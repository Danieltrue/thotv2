const express = require("express");
const dotenv = require("dotenv").config({ path: "./config/.env" });
const colors = require("colors");
const middleware = require("./middleware/middleware");
//init
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
const port = process.env.PORT || 400;
middleware(app);

//Listening to Server
app.listen(port, () =>
  console.log(`Server is Running on Port ${port}`.bgCyan.black)
);
