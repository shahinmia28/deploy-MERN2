const { data } = require("../data");
const { Fooddata, Category } = require("../models/foodDataSchema");

const seedFood = async (req, res, next) => {
  try {
    await Fooddata.deleteMany({});
    const foodData = await Fooddata.insertMany(data.foodData);
    res.status(201).json(foodData);
  } catch (error) {
    next(error);
  }
};

const seedCategory = async (req, res, next) => {
  try {
    await Category.deleteMany({});
    const foodCategory = await Category.insertMany(data.foodCategory);

    res.status(201).json(foodCategory);
  } catch (error) {
    console.error(error);
    next(error);
  }
};

const displayFoodData = async (req, res, next) => {
  try {
    res.status(200).send([global.food_data, global.category_data]);
  } catch (error) {
    console.error(error.message);
    res.status(404).send(error.message);
  }
};

module.exports = { seedCategory, seedFood, displayFoodData };
