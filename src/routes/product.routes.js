const { Router } = require("express");

// defining product routes
const productRouter = Router();

// importing controllers
const addProduct = require("../controllers/addProduct");
const addReview = require("../controllers/aaddreview");

// adding products
productRouter.post("/add", async function (req, res) {
  addProduct;
});

// add review to products
productRouter.put("/review/add", async function (req, res) {
  addReview;
});

// exporting router
module.exports = productRouter;
