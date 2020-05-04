const mongoose = require("mongoose");

const pieSchema = mongoose.Schema({
  name: { type: String, required: true },
  price: { type: String, required: true },
  shortDescription: String,
  longDescription: String,
  inStock: { type: Boolean, required: true },
  isPieOfTheWeek: { type: Boolean, required: true },
  imageUrl: String,
  thumbnailImageUrl: String,
  categoryId: { type: mongoose.Schema.Types.ObjectId, required: true },
});

module.exports = mongoose.model("Pie", pieSchema);
