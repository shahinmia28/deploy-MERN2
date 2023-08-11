const express = require("express");
const { createUser, login } = require("../controllers/userController");
const {
  validateUserRegistration,
  validateUserLogin,
} = require("../validator/userValidator");
const runValidation = require("../validator/runValidator");

const userRouter = express.Router();

userRouter.post("/create", validateUserRegistration, runValidation, createUser);
userRouter.post("/login", validateUserLogin, runValidation, login);

module.exports = userRouter;
