const { banners, categories, pies } = require("./data");
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

async function seedDB() {
  debugDB(`Seeding Banner Data. Count = ${banners.length}.`);
  debugDB(`Seeding Category Data. Count = ${categories.length}.`);
  debugDB(`Seeding Pie Data. Count = ${pies.length}.`);

  banners.forEach(async (b) => {
    const banner = new Banner({
      name: b.name,
      description: b.description,
      imageUrl: b.imageUrl,
    });

    await banner.save();
  });

  categories.forEach(async (c) => {
    const category = new Category({
      name: c.name,
      description: c.description,
    });

    const categoryResult = await category.save();

    pies
      .filter((p) => p.categoryId === c.id)
      .forEach(async (p) => {
        const pie = new Pie({
          name: p.name,
          price: p.price,
          shortDescription: p.shortDescription,
          longDescription: p.longDescription,
          inStock: p.inStock,
          isPieOfTheWeek: p.isPieOfTheWeek,
          imageUrl: p.imageUrl,
          thumbnailImageUrl: p.thumbnailImageUrl,
          categoryId: categoryResult.id,
        });

        await pie.save();
      });
  });
}

debugDB("Database seeding starting...");
seedDB()
  .then(() => debugDB("Database seeding complete."))
  .catch((error) => debugDB(error));
