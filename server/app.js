const morgan = require("morgan");
const debug = require("debug")("log:app");
const express = require("express");
const app = express();

const apiRouter = require("./routes/apiRouter");

const PORT = process.env.PORT || 3000;

app.use(morgan("dev"));
app.use(express.json());
app.use("/api", apiRouter);

app.listen(PORT, () =>
  debug(`The server is listening on url http://localhost:${PORT}/`)
);

module.exports.PORT = PORT;
