const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://gofood:gofood@cluster0.zdkjv4t.mongodb.net/goFoodDB"
    );
    console.log("DB is Connected");

    let fetched_food_data = await mongoose.connection.db.collection(
      "fooddatas"
    );
    let fetched_category_data = await mongoose.connection.db.collection(
      "foodcategories"
    );

    global.food_data = await fetched_food_data.find({}).toArray();
    global.category_data = await fetched_category_data.find({}).toArray();
  } catch (error) {
    console.log("err: ", error);
  }
};

module.exports = connectDB;
