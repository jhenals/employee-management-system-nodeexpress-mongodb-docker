const express = require("express");
//const router = express.Router();
const User = require("../models/user");

router.post("/post", async (req, res) => {
  try {
    const { name, password } = req.body;
    if (name === "admin" && password === "admin") {
      return res.status(200).send("Welcome to the Admin page");
    }

    if (!(name && password)) {
      return res.status(200).json("Please enter a name and password");
    }

    const checkUser = await User.findOne({ name, password });
    if (checkUser) {
      return res.status(409).json({ message: "User already exists" });
    }
    const user = new User({
      name,
      password,
    });
    await user.save();
    res.status(201).json({ message: "User created successfully", user });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: "Internal Server Error" });
  }
});

//module.exports = router;
