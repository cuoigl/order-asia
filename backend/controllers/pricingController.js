import asyncHandler from "../middleware/asyncHandler.js";
import Pricing from "../models/pricingModel.js";

const getPricing = asyncHandler(async (req, res) => {
  const pricing = await Pricing.find({});
  res.json(pricing);
});

const createPricing = asyncHandler(async (req, res) => {
  const pricing = new Pricing({
    image: "/images/sample.jpg",
  });

  const createPricing = await pricing.save();
  res.status(201).json(createPricing);
});

const getPricingById = asyncHandler(async (req, res) => {
  const pricing = await Pricing.findById(req.params.id);
  if (pricing) {
    return res.json(pricing);
  } else {
    res.status(404);
    throw new Error("pricing not found");
  }
});

const updatePricing = asyncHandler(async (req, res) => {
  const { image } = req.body;

  const pricing = await Pricing.findById(req.params.id);

  if (pricing) {
    pricing.image = image;
    const updatePricing = await pricing.save();
    res.json(updatePricing);
  } else {
    res.status(404);
    throw new Error("Pricing not found");
  }
});

export { getPricing, getPricingById, updatePricing, createPricing };
