import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const categories = [
  { name: "North Indian", icon: "fa-bowl-food", img: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=500&q=80" },
  { name: "Desserts", icon: "fa-ice-cream", img: "https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&w=500&q=80" },
  { name: "Pizza", icon: "fa-pizza-slice", img: "https://images.unsplash.com/photo-1601924582970-9238bcb495d9?auto=format&fit=crop&w=500&q=80" },
  { name: "Chinese", icon: "fa-bowl-rice", img: "https://images.unsplash.com/photo-1585032226651-759b368d7246?auto=format&fit=crop&w=500&q=80" },
  { name: "Burger", icon: "fa-burger", img: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=500&q=80" },
  { name: "Biryani", icon: "fa-drumstick-bite", img: "https://images.unsplash.com/photo-1631515243349-e0cb75fb8d3a?auto=format&fit=crop&w=500&q=80" },
  { name: "Noodles", icon: "fa-utensils", img: "https://images.unsplash.com/photo-1612929633738-8fe44f7ec841?auto=format&fit=crop&w=500&q=80" },
  { name: "Paratha", icon: "fa-bread-slice", img: "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=500&q=80" },
  { name: "Pasta", icon: "fa-cheese", img: "https://images.unsplash.com/photo-1555949258-eb67b1ef0ceb?auto=format&fit=crop&w=500&q=80" },
  { name: "Dosa", icon: "fa-plate-wheat", img: "https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&w=500&q=80" },
  { name: "Pastry", icon: "fa-cake-candles", img: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=500&q=80" },
  { name: "Ice Cream", icon: "fa-ice-cream", img: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&w=500&q=80" },
];

function Menu() {
  return (
    <section
      style={{
        background: "linear-gradient(135deg,#0f0f0f,#1b1b1b,#111)",
        padding: "100px 0",
      }}
    >
      <div className="container">

        {/* TITLE */}
        <div className="text-center mb-5">
          <h2
            className="fw-bold"
            style={{ fontSize: "42px", color: "#fff" }}
          >
            <i className="fas fa-utensils me-2"></i>
            Explore Our Delicious Menu
          </h2>

          <p
            style={{
              color: "#aaa",
              maxWidth: "600px",
              margin: "auto",
            }}
          >
            Discover a variety of mouth-watering dishes crafted with
            authentic ingredients and premium taste.
          </p>
        </div>

        {/* GRID */}
        <div className="row g-4 justify-content-center">

          {categories.map((item, index) => (
            <div key={index} className="col-6 col-md-4 col-lg-3">

              <div
                className="text-center h-100"
                style={{
                  background: "#ffffff",
                  borderRadius: "20px",
                  padding: "30px 20px",
                  boxShadow: "0 10px 25px rgba(0,0,0,0.15)",
                  transition: "0.35s",
                  cursor: "pointer",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-10px)";
                  e.currentTarget.style.boxShadow =
                    "0 18px 35px rgba(0,0,0,0.25)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow =
                    "0 10px 25px rgba(0,0,0,0.15)";
                }}
              >

                {/* IMAGE */}
                <div
                  style={{
                    width: "120px",
                    height: "120px",
                    margin: "auto",
                    borderRadius: "50%",
                    overflow: "hidden",
                    boxShadow: "0 6px 15px rgba(0,0,0,0.2)",
                  }}
                >
                  <img
                    src={item.img}
                    alt={item.name}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      transition: "0.4s",
                    }}
                  />
                </div>

                {/* ICON */}
                <div
                  style={{
                    marginTop: "15px",
                    fontSize: "20px",
                    color: "#444",
                  }}
                >
                  <i className={`fas ${item.icon}`}></i>
                </div>

                {/* NAME */}
                <h6
                  style={{
                    marginTop: "8px",
                    fontWeight: "600",
                    color: "#333",
                  }}
                >
                  {item.name}
                </h6>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Menu;