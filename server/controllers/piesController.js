const { pies, categories } = require("../data");

const getPies = (req, res) => {
  return res.send(pies);
};

const getPie = (req, res) => {
  const id = parseInt(req.params.id);
  const pie = pies.find((p) => p.id === id);

  if (!pie) {
    return res.status(404).send(`Error: Pie Id ${id} not found`);
  }

  return res.send(pie);
};

const createPie = (req, res) => {
  const category = categories.find(
    (c) => c.id === parseInt(req.body.categoryId)
  );

  if (!category) {
    return res
      .status(400)
      .send(`Error: Category Id ${req.body.categoryId} not found`);
  }

  const pie = {
    id: pies.length + 1,
    name: req.body.name,
    price: req.body.price,
    shortDescription: req.body.shortDescription,
    longDescription: req.body.longDescription,
    inStock: req.body.inStock,
    isPieOfTheWeek: req.body.isPieOfTheWeek,
    imageUrl: req.body.imageUrl,
    thumbnailImageUrl: req.body.thumbnailImageUrl,
    categoryId: req.body.categoryId,
  };
  pies.push(pie);
  res.set("Location", `${req.baseUrl}/${pie.id}`);
  return res.status(201).send(pie);
};

const updatePie = (req, res) => {
  const id = parseInt(req.params.id);
  const pie = pies.find((p) => p.id === id);

  if (!pie) {
    return res.status(404).send(`Error: Pie Id ${id} not found`);
  }

  const category = categories.find(
    (c) => c.id === parseInt(req.body.categoryId)
  );

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

  return res.send(pie);
};

const deletePie = (req, res) => {
  const id = parseInt(req.params.id);
  const pie = pies.find((p) => p.id === id);

  if (!pie) {
    return res.status(404).send(`Error: Pie Id ${id} not found`);
  }

  const index = pies.indexOf(pie);
  pies.splice(index, 1);

  return res.send(pie);
};

module.exports = {
  getPies,
  getPie,
  createPie,
  updatePie,
  deletePie,
};
