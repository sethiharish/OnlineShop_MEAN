const express = require("express");
const router = express.Router();

const piesController = require("../controllers/piesController");

router.get("/", (req, res) => {
  return piesController.getPies(req, res);
});

router.get("/:id", (req, res) => {
  return piesController.getPie(req, res);
});

router.post("/", (req, res) => {
  return piesController.createPie(req, res);
});

router.put("/:id", (req, res) => {
  return piesController.updatePie(req, res);
});

router.delete("/:id", (req, res) => {
  return piesController.deletePie(req, res);
});

module.exports = router;
