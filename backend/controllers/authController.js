const db = require("../config/db");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// ====================== SIGNUP ======================
const signup = async (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    return res.status(400).json({
      success: false,
      message: "All fields are required",
    });
  }

  db.query("SELECT * FROM users WHERE email = ?", [email], async (err, result) => {
    if (err) {
      return res.status(500).json({
        success: false,
        message: "Database error",
      });
    }

    if (result.length > 0) {
      return res.status(400).json({
        success: false,
        message: "User already exists",
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const role = "user"; // 🔥 always user

    db.query(
      "INSERT INTO users (name, email, password, role) VALUES (?, ?, ?, ?)",
      [name, email, hashedPassword, role],
      (err, result) => {
        if (err) {
          return res.status(500).json({
            success: false,
            message: "Error creating user",
          });
        }

        res.status(201).json({
          success: true,
          message: "Signup successful ✅",
        });
      }
    );
  });
};

// ====================== LOGIN ======================
const login = (req, res) => {
  const { email, password, role } = req.body;

  if (!email || !password) {
    return res.status(400).json({
      success: false,
      message: "Email and password required",
    });
  }

  db.query("SELECT * FROM users WHERE email = ?", [email], async (err, result) => {
    if (err) {
      return res.status(500).json({
        success: false,
        message: "Database error",
      });
    }

    if (result.length === 0) {
      return res.status(400).json({
        success: false,
        message: "User not found",
      });
    }

    const user = result[0];

    // 🔥 DEBUG LOGS (important)
    console.log("👉 REQUEST ROLE:", role);
    console.log("👉 DB ROLE:", user.role);

    // password check
    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(400).json({
        success: false,
        message: "Invalid password",
      });
    }

    // 🔥 STRICT ROLE VALIDATION (FINAL FIX)
    if (!user.role || !role || role !== user.role) {
      return res.status(403).json({
        success: false,
        message: `Login as ${role} not allowed. You are registered as ${user.role}`,
      });
    }

    // token generate
    const token = jwt.sign(
      { id: user.id, email: user.email, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: "1d" }
    );

    // response
    res.status(200).json({
      success: true,
      message: "Login successful ✅",
      token,
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        role: user.role, // 🔥 IMPORTANT
      },
    });
  });
};

module.exports = { signup, login };