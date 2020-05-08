const Banner = require("./models/bannerModel");
const Category = require("./models/categoryModel");
const Pie = require("./models/pieModel");

const debugDB = require("debug")("log:db");
const mongoose = require("mongoose");

const DB = process.env.DB || "mongodb://localhost/onlineshop_mean";
mongoose
  .connect(DB, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => debugDB(`Connected to Database at ${DB}`))
  .catch((error) => debugDB("Error connecting to Database: ", error));

async function purgeDB() {
  const piesCount = await Pie.find().countDocuments();
  await Pie.deleteMany();
  debugDB(`Purged Pie Data. Count = ${piesCount}.`);

  const categoriesCount = await Category.find().countDocuments();
  await Category.deleteMany();
  debugDB(`Purged Category Data. Count = ${categoriesCount}.`);

  const bannersCount = await Banner.find().countDocuments();
  await Banner.deleteMany();
  debugDB(`Purged Banner Data. Count = ${bannersCount}.`);
}

debugDB("Database purging starting...");
purgeDB()
  .then(() => debugDB("Database purging complete."))
  .catch((error) => debugDB(error));
