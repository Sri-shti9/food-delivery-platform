import { useEffect, useState } from "react";
import api from "../axiosSetup/axios";

const FoodList = () => {
  const [foods, setFoods] = useState([]);

  // 🔥 API call
  const fetchFoods = async () => {
    try {
      const res = await api.get("/food/all");
      setFoods(res.data.foods);
    } catch (err) {
      console.error("Error fetching foods", err);
    }
  };

  useEffect(() => {
    fetchFoods();
  }, []);

  return (
    <div className="food-container">

      <h2 className="title">Our Delicious Food 🍔</h2>

      <div className="grid">

        {foods.map((item) => (
          <div key={item.id} className="card">

            {/* IMAGE (static for now) */}
            <img
              src="https://source.unsplash.com/300x200/?food"
              alt={item.name}
            />

            <h4>{item.name}</h4>

            <div className="stars">
              ⭐⭐⭐⭐⭐
            </div>

            <p className="price">₹{item.price}</p>

            <button>Add To Cart</button>

          </div>
        ))}

      </div>

      {/* CSS */}
      <style>{`
        .food-container {
          padding: 40px;
          background: #f3f4f6;
          min-height: 100vh;
        }

        .title {
          text-align: center;
          margin-bottom: 30px;
          font-weight: bold;
        }

        .grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          gap: 20px;
        }

        .card {
          background: white;
          border-radius: 12px;
          padding: 15px;
          text-align: center;
          box-shadow: 0 8px 20px rgba(0,0,0,0.1);
          transition: 0.3s;
        }

        .card:hover {
          transform: translateY(-8px);
        }

        .card img {
          width: 100%;
          height: 140px;
          object-fit: cover;
          border-radius: 10px;
        }

        .card h4 {
          margin: 10px 0;
        }

        .stars {
          color: green;
          font-size: 14px;
        }

        .price {
          font-weight: bold;
          color: green;
        }

        button {
          margin-top: 10px;
          padding: 8px 15px;
          border: none;
          border-radius: 8px;
          background: #1f2937;
          color: white;
          cursor: pointer;
        }

        button:hover {
          background: #111827;
        }
      `}</style>

    </div>
  );
};

export default FoodList;