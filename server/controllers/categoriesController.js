const debug = require("debug")("log:error");
const Category = require("../models/categoryModel");

const getCategories = async (req, res) => {
  try {
    const categories = await Category.find();
    return res.send(categories);
  } catch (error) {
    debug(error);
    return res
      .status(500)
      .send("Some error occurred, while processing the request.");
  }
};

const getCategory = async (req, res) => {
  try {
    const categoryId = req.params.id.trim();
    const category = await Category.findById(categoryId);

    if (!category) {
      return res.status(404).send(`Error: Category Id ${categoryId} not found`);
    }

    return res.send(category);
  } catch (error) {
    debug(error);
    return res
      .status(500)
      .send("Some error occurred, while processing the request.");
  }
};

const createCategory = async (req, res) => {
  try {
    const category = new Category({
      name: req.body.name,
      description: req.body.description,
    });

    const categoryResult = await category.save();

    res.set("Location", `${req.baseUrl}/${categoryResult.id}`);
    return res.status(201).send(categoryResult);
  } catch (error) {
    debug(error);
    return res
      .status(500)
      .send("Some error occurred, while processing the request.");
  }
};

const updateCategory = async (req, res) => {
  try {
    const categoryId = req.params.id.trim();
    const category = await Category.findById(categoryId);

    if (!category) {
      return res.status(404).send(`Error: Category Id ${categoryId} not found`);
    }

    category.name = req.body.name;
    category.description = req.body.description;

    const categoryResult = await category.save();

    return res.send(categoryResult);
  } catch (error) {
    debug(error);
    return res
      .status(500)
      .send("Some error occurred, while processing the request.");
  }
};

const deleteCategory = async (req, res) => {
  try {
    const categoryId = req.params.id.trim();
    const category = await Category.findOneAndDelete({ _id: categoryId });

    if (!category) {
      return res.status(404).send(`Error: Category Id ${categoryId} not found`);
    }

    return res.send(category);
  } catch (error) {
    debug(error);
    return res
      .status(500)
      .send("Some error occurred, while processing the request.");
  }
};

module.exports = {
  getCategories,
  getCategory,
  createCategory,
  updateCategory,
  deleteCategory,
};
