import mongoose from "mongoose";

const newSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      enum: ["customer", "transport", "goods"],
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const New = mongoose.model("New", newSchema);

export default New;
