import asyncHandler from "../middleware/asyncHandler.js";
import New from "../models/newModel.js";

const getNews = asyncHandler(async (req, res) => {
  const news = await New.find({});
  res.json(news);
});

const getNewsCustomer = asyncHandler(async (req, res) => {
  const newsCustomer = await New.find({ type: "customer" });
  res.json(newsCustomer);
});

const getNewsTransport = asyncHandler(async (req, res) => {
  const newsTransport = await New.find({ type: "transport" });
  res.json(newsTransport);
});

const getNewsGoods = asyncHandler(async (req, res) => {
  const newsGoods = await New.find({ type: "goods" });
  res.json(newsGoods);
});

const createNew = asyncHandler(async (req, res) => {
  const { title, description, image, type } = req.body;

  const newasia = await New.create({
    title,
    description,
    image,
    type,
  });

  if (newasia) {
    res.status(201).json({
      title: newasia.title,
      description: newasia.description,
      image: newasia.image,
      type: newasia.type,
    });
  } else {
    res.status(400);
    throw new Error("Invalid user data");
  }
});

const getNewById = asyncHandler(async (req, res) => {
  // NOTE: checking for valid ObjectId to prevent CastError moved to separate
  // middleware. See README for more info.

  const newCurrent = await New.findById(req.params.id);
  if (newCurrent) {
    return res.json(newCurrent);
  } else {
    // NOTE: this will run if a valid ObjectId but no product was found
    // i.e. product may be null
    res.status(404);
    throw new Error("New not found");
  }
});

const updateNew = asyncHandler(async (req, res) => {
  const { title, description, image, type } = req.body;

  const newCurrent = await New.findById(req.params.id);

  if (newCurrent) {
    newCurrent.title = title;
    newCurrent.description = description;
    newCurrent.image = image;
    newCurrent.type = type;
    const updatedNew = await newCurrent.save();
    res.json(updatedNew);
  } else {
    res.status(404);
    throw new Error("New not found");
  }
});

const deleteNew = asyncHandler(async (req, res) => {
  const newCurrent = await New.findById(req.params.id);

  if (newCurrent) {
    await New.deleteOne({ _id: newCurrent._id });
    res.json({ message: "New removed" });
  } else {
    res.status(404);
    throw new Error("New not found");
  }
});

export {
  getNews,
  createNew,
  updateNew,
  getNewById,
  deleteNew,
  getNewsCustomer,
  getNewsTransport,
  getNewsGoods,
};
