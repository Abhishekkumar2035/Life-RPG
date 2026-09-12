const express = require("express");
const router = express.Router();
const Task = require("../models/Task");
const User = require("../models/User");
const auth = require("../middleware/auth");
const { processTaskCompletion } = require("../utils/rpgEngine");

const REWARDS = {
  Easy: { xp: 25, gold: 10 },
  Medium: { xp: 55, gold: 25 },
  Hard: { xp: 120, gold: 50 },
};

router.get("/", auth, async (req, res) => {
  try {
    const tasks = await Task.find({ userId: req.user.id }).sort({
      createdAt: -1,
    });
    res.json(tasks);
  } catch (error) {
    res.status(500).json({ message: "Failed to load quests" });
  }
});

router.post("/", auth, async (req, res) => {
  try {
    const { title, category, difficulty } = req.body;
    if (!title)
      return res.status(400).json({ message: "Quest title is required" });

    const selectedDifficulty = difficulty || "Medium";
    const reward = REWARDS[selectedDifficulty] || REWARDS.Medium;

    const newTask = new Task({
      userId: req.user.id,
      title,
      category: category || "Intellect",
      difficulty: selectedDifficulty,
      xpReward: reward.xp,
      goldReward: reward.gold,
    });

    await newTask.save();
    res.status(201).json(newTask);
  } catch (error) {
    res.status(500).json({ message: "Failed to create quest" });
  }
});

router.patch("/:id/complete", auth, async (req, res) => {
  try {
    const task = await Task.findOne({
      _id: req.params.id,
      userId: req.user.id,
    });
    if (!task) return res.status(404).json({ message: "Quest not found" });
    if (task.isCompleted)
      return res.status(400).json({ message: "Quest already claimed" });

    task.isCompleted = true;
    await task.save();

    const user = await User.findById(req.user.id);
    const updates = processTaskCompletion(user, task);
    Object.assign(user, updates);
    await user.save();

    res.json({
      task,
      user: {
        id: user._id,
        username: user.username,
        level: user.level,
        currentXP: user.currentXP,
        gold: user.gold,
        streak: user.streak,
        stats: user.stats,
      },
      leveledUp: updates.leveledUp,
    });
  } catch (error) {
    res.status(500).json({ message: "Server error processing progression" });
  }
});

router.delete("/:id", auth, async (req, res) => {
  try {
    const deleted = await Task.findOneAndDelete({
      _id: req.params.id,
      userId: req.user.id,
    });
    if (!deleted) return res.status(404).json({ message: "Quest not found" });
    res.json({ message: "Quest abandoned" });
  } catch (error) {
    res.status(500).json({ message: "Failed to delete quest" });
  }
});

module.exports = router;
