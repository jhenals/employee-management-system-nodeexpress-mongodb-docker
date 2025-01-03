const express = require("express");
const app = express();

const dotenv = require("dotenv");
dotenv.config();

//DB
const connectDB = require("./config/db");
connectDB();
const port = process.env.NODE_LOCAL_PORT || 3020;

//Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public")); //this will helps to use style.css file

//CORS
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  if (req.method === "OPTIONS") {
    res.header("Access-Control-Allow-Methods", "PUT, POST, PATCH, DELETE, GET");
    return res.status(200).json({});
  }
  next();
});

const path = require("path");

//Register view engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.resolve(__dirname, "public")));

const apiRouter = require("./routes/api");
app.use(apiRouter);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
