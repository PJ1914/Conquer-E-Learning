import mongoose from "mongoose";

const homepageStatsSchema = new mongoose.Schema(
  {
    label: {
        type: String,
        required: [true, "Stat label is required"],
        trim: true,
        maxlength: [100, "Label cannot exceed 100 characters"],
    },
    value: {
        type: Number,
        required: [true, "Stat value is required"],
        min: [0, "Value cannot be negative"],
    },
    symbol: {
        type: String,
        trim: true,
        maxlength: [10, "Symbol cannot exceed 10 characters"],
    },
  },
);

// Index for faster queries
homepageStatsSchema.index({ isActive: 1 });

const HomepageStats = mongoose.model("Stats", homepageStatsSchema);

export default HomepageStats;
