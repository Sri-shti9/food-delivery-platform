import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import api from "../axiosSetup/axios";

function Menu() {
  const [categories, setCategories] = useState([]);

  // 🔥 fallback data (jab tak backend ready nahi)
  const fallbackData = [
    { id: 1, name: "North Indian", icon: "fa-bowl-food", img: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398" },
    { id: 2, name: "Desserts", icon: "fa-ice-cream", img: "https://images.unsplash.com/photo-1551024601-bec78aea704b" },
    { id: 3, name: "Pizza", icon: "fa-pizza-slice", img: "https://images.unsplash.com/photo-1601924582970-9238bcb495d9" },
    { id: 4, name: "Chinese", icon: "fa-bowl-rice", img: "https://images.unsplash.com/photo-1585032226651-759b368d7246" },
    { id: 5, name: "Burger", icon: "fa-burger", img: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd" },
    { id: 6, name: "Biryani", icon: "fa-drumstick-bite", img: "https://images.unsplash.com/photo-1631515243349-e0cb75fb8d3a" },
  ];

  // 🔥 API call
  const fetchCategories = async () => {
    try {
      const res = await api.get("/categories"); // backend endpoint

      if (res.data && res.data.length > 0) {
        setCategories(res.data);
      } else {
        setCategories(fallbackData);
      }
    } catch (error) {
      console.error("API error:", error);
      setCategories(fallbackData); // fallback use
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  return (
    <section
      style={{
        background: "linear-gradient(135deg, #1e293b, #0f172a)",
        padding: "100px 0",
      }}
    >
      <div className="container">

        <div className="text-center mb-5">
          <h2 className="fw-bold text-white">🍽 Explore Menu</h2>
        </div>

        <div className="row g-4">

          {categories.map((item) => (
            <div key={item.id} className="col-6 col-md-4 col-lg-3">

              <div className="menu-card">

                <div className="img-box">
                  <img src={item.img} alt={item.name} />
                  <div className="overlay"></div>
                </div>

                <div className="content text-center">
                  <i className={`fas ${item.icon} icon`}></i>
                  <h6>{item.name}</h6>
                </div>

              </div>

            </div>
          ))}

        </div>
      </div>

      {/* CSS */}
      <style>{`
        .menu-card {
          border-radius: 18px;
          overflow: hidden;
          background: rgba(255,255,255,0.05);
          backdrop-filter: blur(12px);
          transition: 0.4s;
          cursor: pointer;
        }

        .menu-card:hover {
          transform: translateY(-10px) scale(1.03);
          box-shadow: 0 20px 40px rgba(0,0,0,0.5);
        }

        .img-box {
          height: 160px;
          overflow: hidden;
          position: relative;
        }

        .img-box img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: 0.4s;
        }

        .menu-card:hover img {
          transform: scale(1.1);
        }

        .overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, rgba(0,0,0,0.7), transparent);
        }

        .content {
          padding: 15px;
          color: white;
        }

        .icon {
          color: #ff6b6b;
          margin-bottom: 5px;
        }
      `}</style>

    </section>
  );
}

export default Menu;