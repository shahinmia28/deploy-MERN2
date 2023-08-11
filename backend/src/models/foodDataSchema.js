const { Schema, model } = require("mongoose");

const foodDataSchema = new Schema({
  CategoryName: {
    type: String,
  },
  name: {
    type: String,
  },
  img: {
    type: String,
  },
  options: {
    type: Array,
  },
  finalPrize: {
    type: String,
  },
  description: {
    type: String,
  },
});

const Fooddata = model("fooddata", foodDataSchema);

const categorySchema = new Schema({
  categoryname: {
    type: String,
  },
});
const Category = model("foodcategory", categorySchema);

module.exports = { Fooddata, Category };
