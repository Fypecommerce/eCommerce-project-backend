// controller function to add review to the product
async function addReview(req, res) {
  try {
    const { productId, username, review } = req.body;
    const product_in_db = await productModel.findOneAndUpdate(
      { _id: productId },
      {
        $push: { reviews: { username, review } },
      },
      function (err, success) {
        if (err) {
          return res.json({ ok: false, error: err });
        }
        if (success) {
          return res.json({
            ok: true,
            message: "Review added successfully!",
            meta: product_in_db,
          });
        }
      }
    );
  } catch (err) {
    return res.json({ ok: false, error: err });
  }
}

module.exports = addReview;
