const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    username: { type: String, required: true, unique: true, trim: true },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
    password: { type: String, required: true },
    level: { type: Number, default: 1 },
    currentXP: { type: Number, default: 0 },
    gold: { type: Number, default: 50 },
    streak: { type: Number, default: 0 },
    lastActiveDate: { type: String, default: null },
    equippedTitle: { type: String, default: "HUNTER" }, // Current active title
    inventory: [{ type: String, default: ["HUNTER"] }], // Owned titles/items
    stats: {
      strength: { type: Number, default: 10 },
      intellect: { type: Number, default: 10 },
      vitality: { type: Number, default: 10 },
      agility: { type: Number, default: 10 },
    },
  },
  { timestamps: true },
);

module.exports = mongoose.model("User", userSchema);
