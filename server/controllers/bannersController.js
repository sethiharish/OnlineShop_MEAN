const debug = require("debug")("log:error");
const Banner = require("../models/bannerModel");

const getBanners = async (req, res) => {
  try {
    const banners = await Banner.find();
    return res.send(banners);
  } catch (error) {
    debug(error);
    return res
      .status(500)
      .send("Some error occurred, while processing the request.");
  }
};

const getBanner = async (req, res) => {
  try {
    const bannerId = req.params.id.trim();
    const banner = await Banner.findById(bannerId);

    if (!banner) {
      return res.status(404).send(`Error: Banner Id ${bannerId} not found`);
    }

    return res.send(banner);
  } catch (error) {
    debug(error);
    return res
      .status(500)
      .send("Some error occurred, while processing the request.");
  }
};

const createBanner = async (req, res) => {
  try {
    const banner = new Banner({
      name: req.body.name,
      description: req.body.description,
      imageUrl: req.body.imageUrl,
    });

    const bannerResult = await banner.save();

    res.set("Location", `${req.baseUrl}/${bannerResult.id}`);
    return res.status(201).send(bannerResult);
  } catch (error) {
    debug(error);
    return res
      .status(500)
      .send("Some error occurred, while processing the request.");
  }
};

const updateBanner = async (req, res) => {
  try {
    const bannerId = req.params.id.trim();
    const banner = await Banner.findById(bannerId);

    if (!banner) {
      return res.status(404).send(`Error: Banner Id ${bannerId} not found`);
    }

    banner.name = req.body.name;
    banner.description = req.body.description;
    banner.imageUrl = req.body.imageUrl;

    const bannerResult = await banner.save();

    return res.send(bannerResult);
  } catch (error) {
    debug(error);
    return res
      .status(500)
      .send("Some error occurred, while processing the request.");
  }
};

const deleteBanner = async (req, res) => {
  try {
    const bannerId = req.params.id.trim();
    const banner = await Banner.findOneAndDelete({ _id: bannerId });

    if (!banner) {
      return res.status(404).send(`Error: Banner Id ${bannerId} not found`);
    }

    return res.send(banner);
  } catch (error) {
    debug(error);
    return res
      .status(500)
      .send("Some error occurred, while processing the request.");
  }
};

module.exports = {
  getBanners,
  getBanner,
  createBanner,
  updateBanner,
  deleteBanner,
};
