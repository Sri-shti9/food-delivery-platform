import React, { useState } from "react";

const menuItems = [
  {
    id: 1,
    name: "Paneer Pizza",
    price: 299,
    category: "Veg",
    img: "https://upload.wikimedia.org/wikipedia/commons/d/d3/Supreme_pizza.jpg",
  },
  {
    id: 2,
    name: "Veg Burger",
    price: 149,
    category: "Veg",
    img: "https://images.unsplash.com/photo-1550547660-d9450f859349",
  },
  {
    id: 3,
    name: "Chicken Pizza",
    price: 349,
    category: "Non-Veg",
    img: "https://images.unsplash.com/photo-1594007654729-407eedc4be65",
  },
  {
    id: 4,
    name: "Chicken Burger",
    price: 199,
    category: "Non-Veg",
    img: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd",
  },
  {
    id: 5,
    name: "Cold Coffee",
    price: 99,
    category: "Drinks",
    img: "https://images.unsplash.com/photo-1509042239860-f550ce710b93",
  },
  {
    id: 6,
    name: "Mango Shake",
    price: 119,
    category: "Drinks",
    img: "https://images.unsplash.com/photo-1623065422902-30a2d299bbe4",
  },
];

function Menus({ addToCart }) {
  const [filter, setFilter] = useState("All");

  const filteredItems =
    filter === "All"
      ? menuItems
      : menuItems.filter((item) => item.category === filter);

  return (
    <section style={{ background: "#fff1f1" }} className="py-5">
      <div className="container">

        {/* Heading */}
        <div className="text-center mb-4">
          <h2 className="fw-bold">Our Delicious Menu 🍕</h2>
          <p className="text-muted">
            Fresh ingredients • Fast delivery • Best taste
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="text-center mb-4">
          {["All", "Veg", "Non-Veg", "Drinks"].map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              style={{
                backgroundColor: filter === cat ? "#c1121f" : "#e63946",
                color: "white",
                border: "none",
                padding: "8px 22px",
                borderRadius: "25px",
                fontWeight: "600",
                margin: "0 6px",
                cursor: "pointer",
                fontSize: "14px",
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Cards */}
        <div className="row g-3">
          {filteredItems.map((item) => (
            <div key={item.id} className="col-md-4 col-lg-3">
              <div
                className="card shadow border-0 h-100"
                style={{
                  borderRadius: "15px",
                  overflow: "hidden",
                  transition: "0.3s",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.transform = "scale(1.03)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.transform = "scale(1)")
                }
              >
                <img
                  src={item.img}
                  alt={item.name}
                  style={{
                    height: "160px",
                    objectFit: "cover",
                    width: "100%",
                  }}
                />

                <div className="card-body text-center py-3">
                  <h6 className="fw-bold mb-1">{item.name}</h6>

                  <p
                    style={{
                      color: "#e63946",
                      fontWeight: "bold",
                      fontSize: "16px",
                      marginBottom: "10px",
                    }}
                  >
                    ₹{item.price}
                  </p>

                  <button
                    onClick={() => addToCart(item)}
                    style={{
                      backgroundColor: "#e63946",
                      color: "white",
                      border: "none",
                      padding: "8px 25px",
                      borderRadius: "6px",
                      fontWeight: "600",
                      fontSize: "14px",
                      cursor: "pointer",
                    }}
                  >
                    Add to Cart 🛒
                  </button>

                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Menus;