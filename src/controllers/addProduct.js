// importing modals
const productModel = require("../models/product.model");

// controller function to add product in the db
async function addProduct(req, res) {
  try {
    console.log("Hello");
    const { image, name, price, discount } = req.body;
    const newProduct = new productModel({
      image,
      name,
      original_price: price,
      discount_percentage: discount,
    });
    const status = await newProduct.save();
    return res.json({
      ok: true,
      message: "Product saved successfully!",
      status,
    });
  } catch (err) {
    return res.json({ ok: false, error: err });
  }
}

module.exports = addProduct;
