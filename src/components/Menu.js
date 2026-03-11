import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const categories = [
  { name: "North Indian", img: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=500&q=80" },
  { name: "Desserts", img: "https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&w=500&q=80" },
  { name: "Pizza", img: "https://images.unsplash.com/photo-1601924582970-9238bcb495d9?auto=format&fit=crop&w=500&q=80" },
  { name: "Chinese", img: "https://images.unsplash.com/photo-1585032226651-759b368d7246?auto=format&fit=crop&w=500&q=80" },
  { name: "Burger", img: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=500&q=80" },
  { name: "Biryani", img: "https://images.unsplash.com/photo-1631515243349-e0cb75fb8d3a?auto=format&fit=crop&w=500&q=80" },
  { name: "Noodles", img: "https://images.unsplash.com/photo-1612929633738-8fe44f7ec841?auto=format&fit=crop&w=500&q=80" },
  { name: "Paratha", img: "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=500&q=80" },
  { name: "Pasta", img: "https://images.unsplash.com/photo-1555949258-eb67b1ef0ceb?auto=format&fit=crop&w=500&q=80" },
  { name: "Dosa", img: "https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&w=500&q=80" },
  { name: "Pastry", img: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=500&q=80" },
  { name: "Ice Cream", img: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&w=500&q=80" },
];

function Menu() {
  return (
    <section
      style={{
        backgroundColor: "#ffdddd",
        padding: "100px 0",
      }}
    >
      <div className="container">
        <h2
          className="fw-bold text-center mb-5"
          style={{ fontSize: "42px", color: "#e63946" }}
        >
          Explore Our Delicious Menu
        </h2>

        <div className="row g-5 justify-content-center">
          {categories.map((item, index) => (
            <div key={index} className="col-6 col-md-4 col-lg-3 text-center">
              <div
                style={{
                  background: "linear-gradient(135deg, #fff8f2, #ffeaea)", // modern gradient
                  borderRadius: "20px",
                  padding: "30px 20px",
                  boxShadow: "0 8px 20px rgba(0,0,0,0.1)", // soft shadow
                  transition: "0.3s",
                  cursor: "pointer",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.transform = "translateY(-8px)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.transform = "translateY(0)")
                }
              >
                <div
                  className="mx-auto mb-3"
                  style={{
                    width: "130px",
                    height: "130px",
                    borderRadius: "50%",
                    overflow: "hidden",
                    border: "3px solid #e63946",
                  }}
                >
                  <img
                    src={item.img}
                    alt={item.name}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                </div>
                <h6
                  style={{
                    color: "#333",
                    fontWeight: "600",
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