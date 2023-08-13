const express = require("express");
const seedRouter = require("./routers/seedData");
const userRouter = require("./routers/userRouter");
const cors = require("cors");
const app = express();
var bodyParser = require("body-parser");
const orderRouter = require("./routers/orderRouter");

var corsOptions = {
  origin: "https://deploy-mern-frontend-five.vercel.app",
  optionsSuccessStatus: 200,
};
app.use(cors(corsOptions));

app.use(function (req, res, next) {
  res.header(
    "Access-Control-Allow-Origin",
    "https://deploy-mern-frontend-five.vercel.app"
  );
  res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.status(200).json("Welcome to MERN Stack server");
});
app.use("/seed", seedRouter);
app.use("/user", userRouter);
app.use("/user", orderRouter);

module.exports = app;
