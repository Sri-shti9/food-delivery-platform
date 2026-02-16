import React from "react";

const menuItems = [
  {
    id: 1,
    name: "Cheese Burger",
    price: "$8.99",
    img: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd",
    tag: "Popular",
  },
  {
  id: 2,
  name: "Italian Pizza",
  price: "$12.99",
  img: "https://images.unsplash.com/photo-1601924582970-9238bcb495d9?q=80&w=1000&auto=format&fit=crop",
  tag: "Best Seller",
},

  {
    id: 3,
    name: "Pasta Alfredo",
    price: "$10.49",
    img: "https://images.unsplash.com/photo-1555949258-eb67b1ef0ceb",
    tag: "Chef Special",
  },
  {
    id: 4,
    name: "French Fries",
    price: "$4.99",
    img: "https://images.unsplash.com/photo-1576107232684-1279f390859f",
    tag: "Snack",
  },
  {
    id: 5,
    name: "Grilled Sandwich",
    price: "$6.49",
    img: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af",
    tag: "Fresh",
  },
  {
    id: 6,
    name: "Chicken Salad",
    price: "$9.29",
    img: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c",
    tag: "Healthy",
  },
];

function Menu() {
  return (
    <section
      style={{
        background: "linear-gradient(135deg, #ffe5d9, #ffd7ba)",
        minHeight: "100vh",
        padding: "70px 0",
      }}
    >
      <div className="container">

        {/* Heading */}
        <div className="text-center mb-5 ">
          <h1 className="fw-bold display-5">Our Popular Menu 🍽️</h1>
          <p className="text-muted fs-5">
            Delicious food made fresh with love
          </p>
        </div>

        <div className="row g-4">
          {menuItems.map((item) => (
            <div key={item.id} className="col-md-6 col-lg-4">

              <div
                className="card shadow-lg border-0 h-100 overflow-hidden"
                style={{
                  borderRadius: "18px",
                  transition: "transform 0.3s ease",
                  cursor: "pointer",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.transform = "scale(1.03)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.transform = "scale(1)")
                }
              >

                {/* Image */}
                <div style={{ position: "relative" }}>
                  <img
                    src={item.img}
                    alt={item.name}
                    className="card-img-top"
                    style={{
                      height: "240px",
                      objectFit: "cover",
                    }}
                  />

                  {/* Tag Badge */}
                  <span
                    className="badge"
                    style={{
                      position: "absolute",
                      top: "12px",
                      left: "12px",
                      backgroundColor: "#ff6b35",
                      padding: "8px 12px",
                      fontSize: "12px",
                    }}
                  >
                    {item.tag}
                  </span>
                </div>

                {/* Card Body */}
                <div className="card-body text-center p-4">

                  <h5 className="fw-bold mb-2">{item.name}</h5>

                  <p className="text-success fw-bold fs-5 mb-3">
                    {item.price}
                  </p>

                  <button
                    className="btn btn-lg w-100"
                    style={{
                      backgroundColor: "#ff6b35",
                      color: "white",
                      borderRadius: "10px",
                    }}
                  >
                    Order Now 🚀
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
