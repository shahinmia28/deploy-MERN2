const { Schema, model } = require("mongoose");

const orderSchema = new Schema({
  email: {
    type: String,
    required: true,
  },
  order_data: {
    type: Array,
    required: true,
  },
});

const Order = model("order", orderSchema);

module.exports = Order;
