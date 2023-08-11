const { body } = require("express-validator");
const validateUserRegistration = [
  body("name")
    .trim()
    .notEmpty()
    .withMessage("Name is required")
    .isLength({ min: 3 })
    .withMessage("Name Should be at least 3 character"),
  body("email")
    .trim()
    .notEmpty()
    .withMessage("email is required")
    .isEmail()
    .withMessage("invalid email address"),
  body("password")
    .trim()
    .notEmpty()
    .withMessage("password is required")
    .isLength({ min: 6 })
    .withMessage("password Should be at least 6 character"),
  body("location")
    .trim()
    .notEmpty()
    .withMessage("location is required")
    .withMessage("location is required"),
];
const validateUserLogin = [
  body("email")
    .trim()
    .notEmpty()
    .withMessage("email is required")
    .isEmail()
    .withMessage("invalid email address"),
  body("password")
    .trim()
    .notEmpty()
    .withMessage("password is required")
    .isLength({ min: 6 })
    .withMessage("password Should be at least 6 character"),
];

module.exports = { validateUserRegistration, validateUserLogin };
