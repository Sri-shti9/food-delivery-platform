const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");

const authRoutes = require("./routes/authRoutes");
const foodRoutes = require("./routes/foodRoutes"); // ✅ ADD THIS
const verifyToken = require("./middleware/authMiddleware");

const app = express();

app.use(cors({
  origin: ["http://localhost:3000"],
  credentials: true
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// 🔐 auth routes
app.use("/api/auth", authRoutes);

// 🍔 food routes (NEW)
app.use("/api/food", foodRoutes);

// 🔐 protected route
app.get("/api/protected", verifyToken, (req, res) => {
  res.json({
    message: "Protected route accessed ✅",
    user: req.user
  });
});

module.exports = app;