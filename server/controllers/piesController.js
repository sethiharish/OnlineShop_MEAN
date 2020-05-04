const Pie = require("../models/pieModel");
const Category = require("../models/categoryModel");

const getPies = async (req, res) => {
  const pies = await Pie.find();
  return res.send(pies);
};

const getPie = async (req, res) => {
  const pie = await Pie.findById(req.params.id);

  if (!pie) {
    return res.status(404).send(`Error: Pie Id ${req.params.id} not found`);
  }

  return res.send(pie);
};

const createPie = async (req, res) => {
  const category = await Category.findById(req.body.categoryId);

  if (!category) {
    return res
      .status(400)
      .send(`Error: Category Id ${req.body.categoryId} not found`);
  }

  const pie = new Pie({
    name: req.body.name,
    price: req.body.price,
    shortDescription: req.body.shortDescription,
    longDescription: req.body.longDescription,
    inStock: req.body.inStock,
    isPieOfTheWeek: req.body.isPieOfTheWeek,
    imageUrl: req.body.imageUrl,
    thumbnailImageUrl: req.body.thumbnailImageUrl,
    categoryId: category.id,
  });

  const pieResult = await pie.save();

  res.set("Location", `${req.baseUrl}/${pieResult.id}`);
  return res.status(201).send(pieResult);
};

const updatePie = async (req, res) => {
  const pie = await Pie.findById(req.params.id);

  if (!pie) {
    return res.status(404).send(`Error: Pie Id ${req.params.id} not found`);
  }

  const category = await Category.findById(req.body.categoryId);

  if (!category) {
    return res
      .status(400)
      .send(`Error: Category Id ${req.body.categoryId} not found`);
  }

  pie.name = req.body.name;
  pie.price = req.body.price;
  pie.shortDescription = req.body.shortDescription;
  pie.longDescription = req.body.longDescription;
  pie.inStock = req.body.inStock;
  pie.isPieOfTheWeek = req.body.isPieOfTheWeek;
  pie.imageUrl = req.body.imageUrl;
  pie.thumbnailImageUrl = req.body.thumbnailImageUrl;
  pie.categoryId = req.body.categoryId;

  const pieResult = await pie.save();

  return res.send(pieResult);
};

const deletePie = async (req, res) => {
  const pie = await Pie.findByIdAndDelete({ _id: req.params.id });

  if (!pie) {
    return res.status(404).send(`Error: Pie Id ${req.params.id} not found`);
  }

  return res.send(pie);
};

module.exports = {
  getPies,
  getPie,
  createPie,
  updatePie,
  deletePie,
};
