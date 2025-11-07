import { Schema, model} from "mongoose";

const LatestUpdatesSchema = new Schema(
  {
    label: {
      type: String,
      required: [true, "Update label is required"],
      trim: true,
    },
    header: {
      type: String,
      required: [true, "Update content is required"],
      trim: true,
    },
    description: {
      type: String,
      required: [true, "Update description is required"],
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

const LatestUpdates = model("LatestUpdates", LatestUpdatesSchema);

export default LatestUpdates;