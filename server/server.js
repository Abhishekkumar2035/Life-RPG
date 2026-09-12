const express = require("express");
const cors = require("cors");
require("dotenv").config();
const connectDB = require("./config/db");

const app = express();
connectDB();

app.use(cors({ origin: "*" }));
app.use(express.json());

app.use("/api/auth", require("./routes/auth"));
app.use("/api/tasks", require("./routes/tasks"));

app.get("/api/health", (req, res) =>
  res.json({ status: "Online", engine: "RPG-Core v2.1" }),
);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`[Server] Live on port ${PORT}`));
