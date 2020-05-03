const express = require("express");
const router = express.Router();

const categoriesController = require("../controllers/categoriesController");

router.get("/", (req, res) => {
  return categoriesController.getCategories(req, res);
});

router.get("/:id", (req, res) => {
  return categoriesController.getCategory(req, res);
});

router.post("/", (req, res) => {
  return categoriesController.createCategory(req, res);
});

router.put("/:id", (req, res) => {
  return categoriesController.updateCategory(req, res);
});

router.delete("/:id", (req, res) => {
  return categoriesController.deleteCategory(req, res);
});

module.exports = router;
