import mongoose from "mongoose";
import { CAREER_CATEGORY } from "../../utils/constants.js";

const careersSchema = new mongoose.Schema({
  role: {
    type: String,
    required: true,
    trim: true,
  },
  category: {
    type: String,
    required: true,
    enum: Object.values(CAREER_CATEGORY),
  },
  location: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
    trim: true,
    default: "",
  },
  requirements: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Requirement",
    },
  ],
}, { timestamps: true });

const Career = mongoose.model("Career", careersSchema);
export default Career;


