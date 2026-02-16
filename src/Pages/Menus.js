import React, { useState } from "react";

const menuItems = [
  {
    id: 1,
    name: "Paneer Pizza",
    price: "$10",
    category: "Veg",
    img: "https://upload.wikimedia.org/wikipedia/commons/d/d3/Supreme_pizza.jpg",


  },
  {
    id: 2,
    name: "Veg Burger",
    price: "$6",
    category: "Veg",
    img: "https://images.unsplash.com/photo-1550547660-d9450f859349",
  },
  {
    id: 3,
    name: "Chicken Pizza",
    price: "$12",
    category: "Non-Veg",
    img: "https://images.unsplash.com/photo-1594007654729-407eedc4be65",
  },
  {
    id: 4,
    name: "Chicken Burger",
    price: "$8",
    category: "Non-Veg",
    img: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd",
  },
  {
    id: 5,
    name: "Cold Coffee",
    price: "$4",
    category: "Drinks",
    img: "https://images.unsplash.com/photo-1509042239860-f550ce710b93",
  },
  {
    id: 6,
    name: "Mango Shake",
    price: "$5",
    category: "Drinks",
    img: "https://images.unsplash.com/photo-1623065422902-30a2d299bbe4",
  },
];

function Menu({ addToCart }) {
  const [filter, setFilter] = useState("All");

  const filteredItems =
    filter === "All"
      ? menuItems
      : menuItems.filter((item) => item.category === filter);

  return (
    <section style={{ background: "#fff7f2" }} className="py-5">
      <div className="container">

        {/* Heading */}
        <div className="text-center mb-4">
          <h1 className="fw-bold">Our Delicious Menu 🍕</h1>
          <p className="text-muted">
            Fresh ingredients • Fast delivery • Best taste
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="text-center mb-5">
          {["All", "Veg", "Non-Veg", "Drinks"].map((cat) => (
            <button
              key={cat}
              className={`btn mx-2 px-4 py-2 fw-bold ${
                filter === cat ? "btn-warning" : "btn-outline-warning"
              }`}
              onClick={() => setFilter(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Menu Cards */}
        <div className="row g-4">
          {filteredItems.map((item) => (
            <div key={item.id} className="col-md-6 col-lg-4">
              <div
                className="card shadow-lg border-0 h-100"
                style={{
                  borderRadius: "20px",
                  overflow: "hidden",
                  transition: "transform 0.3s",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.transform = "scale(1.05)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.transform = "scale(1)")
                }
              >
                <img
                  src={item.img}
                  alt={item.name}
                  style={{
                    height: "220px",
                    objectFit: "cover",
                    width: "100%",
                  }}
                />

                <div className="card-body text-center">
                  <h5 className="fw-bold">{item.name}</h5>
                  <p className="text-success fw-bold fs-5">
                    {item.price}
                  </p>

                  <button
                    className="btn w-100 fw-bold"
                    style={{
                      backgroundColor: "#ff6b35",
                      color: "white",
                      borderRadius: "10px",
                    }}
                    onClick={() => addToCart(item)}
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

export default Menu;
