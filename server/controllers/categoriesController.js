const Category = require("../models/categoryModel");

const getCategories = async (req, res) => {
  const categories = await Category.find();
  return res.send(categories);
};

const getCategory = async (req, res) => {
  const category = await Category.findById(req.params.id);

  if (!category) {
    return res
      .status(404)
      .send(`Error: Category Id ${req.params.id} not found`);
  }

  return res.send(category);
};

const createCategory = async (req, res) => {
  const category = new Category({
    name: req.body.name,
    description: req.body.description,
  });

  const categoryResult = await category.save();

  res.set("Location", `${req.baseUrl}/${categoryResult.id}`);
  return res.status(201).send(categoryResult);
};

const updateCategory = async (req, res) => {
  const category = await Category.findById(req.params.id);

  if (!category) {
    return res
      .status(404)
      .send(`Error: Category Id ${req.params.id} not found`);
  }

  category.name = req.body.name;
  category.description = req.body.description;

  const categoryResult = await category.save();

  return res.send(categoryResult);
};

const deleteCategory = async (req, res) => {
  const category = await Category.findOneAndDelete({ _id: req.params.id });

  if (!category) {
    return res
      .status(404)
      .send(`Error: Category Id ${req.params.id} not found`);
  }

  return res.send(category);
};

module.exports = {
  getCategories,
  getCategory,
  createCategory,
  updateCategory,
  deleteCategory,
};
