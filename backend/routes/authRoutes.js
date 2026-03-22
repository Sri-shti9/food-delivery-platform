const express = require("express");
const router = express.Router();

const { signup, login } = require("../controllers/authController");
const verifyToken = require("../middleware/authMiddleware");
const authorizeRole = require("../middleware/authorizeRole");

router.post("/signup", signup);
router.post("/login", login);
router.get("/admin",
  verifyToken,
  authorizeRole("admin"),
  (req, res) => {
    res.json({ message: "Welcome Admin ✅" });
  }
);
router.get("/supplier",
  verifyToken,
  authorizeRole("supplier", "admin"),
  (req, res) => {
    res.json({ message: "Supplier Access ✅" });
  }
);
router.get("/user",
  verifyToken,
  authorizeRole("user", "admin"),
  (req, res) => {
    res.json({ message: "User Access ✅" });
  }
);

module.exports = router;