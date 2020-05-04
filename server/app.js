const morgan = require("morgan");
const debugApp = require("debug")("log:app");
const debugDB = require("debug")("log:db");
const express = require("express");
const app = express();
const mongoose = require("mongoose");

const DB = process.env.DB || "mongodb://localhost/onlineshop_mean";
mongoose
  .connect(DB, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => debugDB(`Connected to Database at ${DB}`))
  .catch((error) => debugDB("Error connecting to Database: ", error));

const apiRouter = require("./routes/apiRouter");

const PORT = process.env.PORT || 3000;

app.use(morgan("dev"));
app.use(express.json());
app.use("/api", apiRouter);

app.listen(PORT, () =>
  debugApp(`The server is listening on url http://localhost:${PORT}/`)
);

module.exports.PORT = PORT;
