const db = require("../config/db");

// ====================== ADD FOOD (ADMIN ONLY) ======================
const addFood = (req, res) => {
  const { name, description, price, isVeg, isAvailable } = req.body;

  if (!name || !price) {
    return res.status(400).json({
      success: false,
      message: "Name and price required",
    });
  }

  const query = `
    INSERT INTO foods (name, description, price, isVeg, isAvailable)
    VALUES (?, ?, ?, ?, ?)
  `;

  db.query(
    query,
    [name, description, price, isVeg, isAvailable],
    (err, result) => {
      if (err) {
        return res.status(500).json({
          success: false,
          message: "Error adding food",
        });
      }

      res.status(201).json({
        success: true,
        message: "Food added successfully ✅",
      });
    }
  );
};

// ====================== GET ALL FOODS ======================
const getFoods = (req, res) => {
  const query = "SELECT * FROM foods";

  db.query(query, (err, result) => {
    if (err) {
      return res.status(500).json({
        success: false, 
        message: "Error fetching foods",
      });
    }

    res.status(200).json({
      success: true,
      foods: result,
    });
  });
};

module.exports = { addFood, getFoods };