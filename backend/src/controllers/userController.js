const User = require("../models/userSchema");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const secretKey = "lkadsfertjhionusdfhasdfhfjksdhfnudhf";

const createUser = async (req, res, next) => {
  try {
    const userExist = await User.exists({ email: req.body.email });
    if (userExist) {
      throw Error("The email is already register. please Login");
    }
    const user = await User.create({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
      location: req.body.location,
    });
    res.status(201).send({
      success: true,
      data: user,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({ success: false });
  }
};
const login = async (req, res, next) => {
  try {
    const userExist = await User.findOne({ email: req.body.email });

    if (!userExist) {
      throw Error("Invalid credential");
    }
    const pwdCompare = await bcrypt.compare(
      req.body.password,
      userExist.password
    );
    if (!pwdCompare) {
      throw Error("Invalid credential");
    }
    const data = {
      user: {
        id: userExist._id,
      },
    };
    const userAuth = jwt.sign(data, secretKey);

    res.status(200).json({
      success: true,
      message: "Login successful",
      userAuth: userAuth,
      userEmail: req.body.email,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({ success: false });
  }
};

module.exports = {
  createUser,
  login,
};
