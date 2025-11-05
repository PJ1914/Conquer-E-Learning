import mongoose from "mongoose";
import { WORK_TYPE } from "../../utils/constants.js";

const requirementSchema = new mongoose.Schema({
  type: {
    type: String,
    enum: WORK_TYPE,
    required: true,
  },
  minyears: {
    type: Number,
    required: true,
    min: 0,
  },
  maxyears: {
    type: Number,
    required: true,
    min: 0,
    validate: {
      validator: function (v) {
        return v >= this.minyears;
      },
      message: "maxyears must be greater than or equal to minyears",
    },
  },
  details: {
    type: [String],
    default: [],
  },
}, { timestamps: true });

const Requirement = mongoose.model("Requirement", requirementSchema);
export default Requirement;


