const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/User");
const auth = require("../middleware/auth");

router.post("/register", async (req, res) => {
  try {
    const { username, email, password } = req.body;
    if (!username || !email || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const existingUser = await User.findOne({ $or: [{ email }, { username }] });
    if (existingUser) {
      return res
        .status(400)
        .json({ message: "Username or Email already in use" });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new User({ username, email, password: hashedPassword });
    await newUser.save();

    const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });
    res.status(201).json({
      token,
      user: {
        id: newUser._id,
        username: newUser.username,
        email: newUser.email,
        level: newUser.level,
        currentXP: newUser.currentXP,
        gold: newUser.gold,
        streak: newUser.streak,
        stats: newUser.stats,
      },
    });
  } catch (error) {
    res.status(500).json({ message: "Server error during registration" });
  }
});

router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ message: "Invalid credentials" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch)
      return res.status(400).json({ message: "Invalid credentials" });

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });
    res.json({
      token,
      user: {
        id: user._id,
        username: user.username,
        email: user.email,
        level: user.level,
        currentXP: user.currentXP,
        gold: user.gold,
        streak: user.streak,
        stats: user.stats,
      },
    });
  } catch (error) {
    res.status(500).json({ message: "Server error during login" });
  }
});

router.get("/me", auth, async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select("-password");
    if (!user) return res.status(404).json({ message: "User not found" });
    res.json(user);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch user" });
  }
});

// Available catalog in Armory
const SHOP_CATALOG = [
  {
    id: "shadow_ninja",
    name: "SHADOW NINJA",
    cost: 50,
    description: "Agility specialist rank",
  },
  {
    id: "cyber_mage",
    name: "CYBER MAGE",
    cost: 100,
    description: "Master of raw intellect",
  },
  {
    id: "iron_berserker",
    name: "BERSERKER",
    cost: 150,
    description: "Unmatched strength title",
  },
  {
    id: "grandmaster",
    name: "GRANDMASTER",
    cost: 300,
    description: "Elite RPG legend status",
  },
];

// 1. Get Shop Catalog
router.get("/shop", auth, (req, res) => {
  res.json(SHOP_CATALOG);
});

// 2. Buy & Equip Item
router.post("/shop/buy", auth, async (req, res) => {
  try {
    const { itemId } = req.body;
    const item = SHOP_CATALOG.find((i) => i.id === itemId);
    if (!item)
      return res.status(404).json({ message: "Item not found in catalog" });

    const user = await User.findById(req.user.id);

    // If already owned, just equip it
    if (user.inventory && user.inventory.includes(item.name)) {
      user.equippedTitle = item.name;
      await user.save();
      return res.json({ user, message: `${item.name} equipped!` });
    }

    // Check gold balance
    if (user.gold < item.cost) {
      return res.status(400).json({ message: "Insufficient Gold in cache" });
    }

    // Deduct gold, add to inventory & equip
    user.gold -= item.cost;
    if (!user.inventory) user.inventory = ["HUNTER"];
    user.inventory.push(item.name);
    user.equippedTitle = item.name;

    await user.save();
    res.json({ user, message: `Acquired and equipped ${item.name}!` });
  } catch (error) {
    res.status(500).json({ message: "Failed to process purchase" });
  }
});

module.exports = router;
