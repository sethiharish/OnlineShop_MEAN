const express = require("express");
const router = express.Router();

const categoriesRouter = require("./categoriesRouter");
const piesRouter = require("./piesRouter");

router.use("/categories", categoriesRouter);
router.use("/pies", piesRouter);

module.exports = router;
