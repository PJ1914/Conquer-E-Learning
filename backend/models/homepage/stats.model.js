import { Schema, model } from "mongoose";

const StatsSchema = new Schema(
  {
    label: {
        type: String,
        required: [true, "Stat label is required"],
        trim: true,
    },
    value: {
        type: String,
        required: [true, "Stat value is required"],
        trim: true,
    },
    symbol: {
        type: String,
        required: [true, "Stat symbol is required"],
        trim: true,
    },
  },
);

const Stats = model("Stats", StatsSchema);

export default Stats;
