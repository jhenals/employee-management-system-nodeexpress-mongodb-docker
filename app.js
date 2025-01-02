const express = require("express");
const dotenv = require("dotenv");
dotenv.config();
const connectDB = require("./config/db");

const app = express();

connectDB();
const port = process.env.NODE_LOCAL_PORT || 3020;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

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

app.get("/", (req, res) => {
  res.send(
    "Welcome to Apollonia Dental Practice Employee Management System API"
  );
});

//require("./routes/api.routes")(app);

app.use("/", require("./routes/api.js"));

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
