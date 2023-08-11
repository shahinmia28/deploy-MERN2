const express = require("express");
const {
  seedCategory,
  seedFood,
  displayFoodData,
} = require("../controllers/dataController");

const seedRouter = express.Router();

seedRouter.get("/fooddata", seedFood);
seedRouter.get("/category", seedCategory);

//  for getting food data from frontend
seedRouter.post("/display_data", displayFoodData);

module.exports = seedRouter;
