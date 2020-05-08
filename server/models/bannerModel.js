const mongoose = require("mongoose");

const bannerSchema = mongoose.Schema({
  name: { type: String, required: true },
  description: String,
  imageUrl: { type: String, required: true },
});

module.exports = mongoose.model("Banner", bannerSchema);
