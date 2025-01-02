const mongoose = require("mongoose");
const url = "mongodb://mongo:27017/node-mongo-docker";
const connectDB = async () => {
  try {
    mongoose.set("strictQuery", false);
    mongoose.connect(url);
    console.log("Connected to MongoDB");
  } catch (err) {
    console.log(err);
  }
};

module.exports = connectDB;
// In the above code snippet, we are connecting to MongoDB using the mongoose.connect() method. We are setting the strictQuery to false to avoid the deprecation warning. We are exporting the connectDB function so that we can use it in other files.
