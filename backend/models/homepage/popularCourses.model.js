import { Schema } from "mongoose";

const PopularCoursesSchema = Schema(
);

const PopularCourses = mongoose.model(
  "PopularCourses",
  PopularCoursesSchema
);

export default PopularCourses;
