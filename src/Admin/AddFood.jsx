import { useState } from "react";
import api from "../axiosSetup/axios";

const AddFood = () => {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    price: "",
    isVeg: true,
    isAvailable: true,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };
const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const res = await api.post("/food/add", formData);

    alert(res.data.message || "Food added successfully ✅");

    // reset form
    setFormData({
      name: "",
      description: "",
      price: "",
      isVeg: true,
      isAvailable: true,
    });

  } catch (err) {
    console.error(err);

    const msg =
      err.response?.data?.message ||
      "Something went wrong";

    alert(msg);
  }
};

  return (
    <div className="add-food-container">

      <form onSubmit={handleSubmit} className="food-form">

        <h2>Add Food Item 🍔</h2>

        <input
          type="text"
          name="name"
          placeholder="Food Name"
          value={formData.name}
          onChange={handleChange}
        />

        <textarea
          name="description"
          placeholder="Description"
          value={formData.description}
          onChange={handleChange}
        />

        <input
          type="number"
          name="price"
          placeholder="Price"
          value={formData.price}
          onChange={handleChange}
        />

        {/* Veg Toggle */}
        <div className="toggle-group">
          <label>
            <input
              type="checkbox"
              name="isVeg"
              checked={formData.isVeg}
              onChange={handleChange}
            />
            Veg
          </label>

          <label>
            <input
              type="checkbox"
              name="isAvailable"
              checked={formData.isAvailable}
              onChange={handleChange}
            />
            Available
          </label>
        </div>

        <button type="submit">Add Food</button>

      </form>

      {/* CSS */}
      <style>{`
        .add-food-container {
          height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
          background: linear-gradient(135deg, #1f2937, #111827);
        }

        .food-form {
          background: rgba(255,255,255,0.08);
          backdrop-filter: blur(12px);
          padding: 30px;
          border-radius: 20px;
          width: 350px;
          color: white;
        }

        .food-form h2 {
          text-align: center;
          margin-bottom: 20px;
        }

        input, textarea {
          width: 100%;
          margin-bottom: 15px;
          padding: 10px;
          border-radius: 8px;
          border: none;
          background: rgba(255,255,255,0.1);
          color: white;
        }

        textarea {
          height: 80px;
        }

        input::placeholder, textarea::placeholder {
          color: #d1d5db;
        }

        .toggle-group {
          display: flex;
          justify-content: space-between;
          margin-bottom: 15px;
        }

        button {
          width: 100%;
          padding: 10px;
          border-radius: 10px;
          border: none;
          background: linear-gradient(135deg, #ff6b6b, #ff3b3b);
          color: white;
          font-weight: bold;
        }

        button:hover {
          transform: scale(1.05);
        }
      `}</style>

    </div>
  );
};

export default AddFood;