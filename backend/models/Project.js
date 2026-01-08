import mongoose from "mongoose";

const projectSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      required: true,
    },
    techStack: [
      {
        type: String,
        required: true,
      },
    ],
    category: {
      type: String,
      enum: ["Full-Stack", "Frontend", "Backend"],
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    liveUrl: {
      type: String,
    },
    githubUrl: {
      type: String,
      required: true,
    },
    featured: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Project", projectSchema);
