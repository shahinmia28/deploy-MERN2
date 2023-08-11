require("dotenv").config();

const mongoDBURL =
  process.env.MONGODB_ATLAS_URL ||
  "mongodb+srv://gofood:gofood@cluster0.zdkjv4t.mongodb.net/goFoodDB";

module.exports = {
  mongoDBURL,
};
