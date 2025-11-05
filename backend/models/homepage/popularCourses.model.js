import { Schema, model } from "mongoose";

const PopularCoursesSchema = new Schema(
  {
    courseId: {
      type: Schema.Types.ObjectId,
      ref: "Course",
      required: [true, "Course ID is required"],
    }
  }
);

const PopularCourses = model("PopularCourses", PopularCoursesSchema);

export default PopularCourses;
