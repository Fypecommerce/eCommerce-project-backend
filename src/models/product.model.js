const { Schema, model } = require("mongoose");

// reviews schema
const reviewSchema = new Schema({
  username: { type: String, required: true, unique: true },
  review: { type: String, required: true },
});

// product schema
const productSchema = new Schema({
  image: { type: String, required: String, unique: false },
  name: { type: String, required: String, unique: true },
  original_price: { type: String, required: String },
  discount_percentage: { type: Number, required: true },
  reviews: { type: [reviewSchema], required: false },
});

const productModel = model("product", productSchema);

module.exports = productModel;
