import mongoose from "mongoose";

const LatestUpdatesSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Update title is required"],
      trim: true,
      maxlength: [200, "Title cannot exceed 200 characters"],
    },
    content: {
      type: String,
      required: [true, "Update content is required"],
      trim: true,
      maxlength: [5000, "Content cannot exceed 5000 characters"],
    },
    publishedDate: {
      type: Date,
      default: Date.now,
    },
    isActive: {
      type: Boolean,
      default: true,
    },
  },
);

const LatestUpdates = mongoose.model("HomepageLatestUpdates", LatestUpdatesSchema);

export default LatestUpdates;