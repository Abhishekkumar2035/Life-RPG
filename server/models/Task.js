const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    title: { type: String, required: true, trim: true },
    category: {
      type: String,
      enum: ["Strength", "Intellect", "Vitality", "Agility"],
      default: "Intellect",
    },
    difficulty: {
      type: String,
      enum: ["Easy", "Medium", "Hard"],
      default: "Medium",
    },
    xpReward: { type: Number, required: true },
    goldReward: { type: Number, required: true },
    isCompleted: { type: Boolean, default: false },
  },
  { timestamps: true },
);

module.exports = mongoose.model("Task", taskSchema);
