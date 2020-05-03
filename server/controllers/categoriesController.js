const { categories } = require("../data");

const getCategories = (req, res) => {
  return res.send(categories);
};

const getCategory = (req, res) => {
  const id = parseInt(req.params.id);
  const category = categories.find((c) => c.id === id);

  if (!category) {
    return res.status(404).send(`Error: Category Id ${id} not found`);
  }

  return res.send(category);
};

const createCategory = (req, res) => {
  const category = {
    id: categories.length + 1,
    name: req.body.name,
    description: req.body.description,
  };
  categories.push(category);
  res.set("Location", `${req.baseUrl}/${category.id}`);
  return res.status(201).send(category);
};

const updateCategory = (req, res) => {
  const id = parseInt(req.params.id);
  const category = categories.find((c) => c.id === id);

  if (!category) {
    return res.status(404).send(`Error: Category Id ${id} not found`);
  }

  category.name = req.body.name;
  category.description = req.body.description;

  return res.send(category);
};

const deleteCategory = (req, res) => {
  const id = parseInt(req.params.id);
  const category = categories.find((c) => c.id === id);

  if (!category) {
    return res.status(404).send(`Error: Category Id ${id} not found`);
  }

  const index = categories.indexOf(category);
  categories.splice(index, 1);

  return res.send(category);
};

module.exports = {
  getCategories,
  getCategory,
  createCategory,
  updateCategory,
  deleteCategory,
};
