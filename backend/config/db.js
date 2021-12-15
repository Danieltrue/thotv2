const mongoose = require("mongoose");

async function connectDB() {
  const con = await mongoose.connect(process.env.DB);
  console.log(
    `Connected to Database From ${con.connection.host}`.bgYellow.black
  );
}

module.exports = connectDB;
