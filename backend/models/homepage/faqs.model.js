import { Schema, model } from "mongoose";

const FaqsSchema = new Schema(
  {
    question: {
      type: String,
      required: [true, "FAQ question is required"],
      trim: true,
    },
    answer: {
      type: String,
      required: [true, "FAQ answer is required"],
      trim: true,
    },
    isActive: {
      type: Boolean,
      default: true,
    },
    views: {
      type: Number,
      default: 0,
      min: [0, "Views cannot be negative"],
    },
  },

);

const Faqs = model("Faqs", FaqsSchema);

export default Faqs;
