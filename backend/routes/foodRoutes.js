const express = require("express");
const router = express.Router();

const { addFood, getFoods } = require("../controllers/foodController");
const verifyToken = require("../middleware/authMiddleware");
const authorizeRole = require("../middleware/authorizeRole");

// 🔥 POST (Only Admin)
router.post(
  "/add",
  verifyToken,
  authorizeRole("admin"),
  addFood
);

// 🔥 GET (Public / All users)
router.get("/all", getFoods);

module.exports = router;