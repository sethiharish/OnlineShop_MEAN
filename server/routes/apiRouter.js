const express = require("express");
const router = express.Router();

const swaggerUi = require("swagger-ui-express");
const specs = require("../swagger");
router.use("/swagger", swaggerUi.serve, swaggerUi.setup(specs));

const bannersRouter = require("./bannersRouter");
const categoriesRouter = require("./categoriesRouter");
const piesRouter = require("./piesRouter");

router.use("/banners", bannersRouter);
router.use("/categories", categoriesRouter);
router.use("/pies", piesRouter);

module.exports = router;
