const express = require("express");
const { orderData, myOrderData } = require("../controllers/orderController");

const orderRouter = express.Router();

orderRouter.post("/order_data", orderData);
orderRouter.post("/myorderdata", myOrderData);
module.exports = orderRouter;
