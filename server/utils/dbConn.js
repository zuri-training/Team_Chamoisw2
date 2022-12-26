require("dotenv").config();
const mongoose = require("mongoose");

const connectDB = () => {
  if(process.env.NODE_ENV === "test")return
  try {
    mongoose.connect(process.env.MONGODB_URL, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
  } catch (err) {
    console.log(err);
  }
};

module.exports = connectDB;
