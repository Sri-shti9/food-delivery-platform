import React from "react";

const LunchBox = () => {
  const menu = [
    {
      title: "Veg Lunch",
      desc: "Rice, dal, sabzi, roti & fresh salad",
      price: "₹149",
      img: "https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg",
    },
    {
      title: "Deluxe Lunch",
      desc: "Paneer curry, jeera rice, naan & dessert",
      price: "₹199",
      img: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg",
    },
    {
      title: "Non-Veg Lunch",
      desc: "Chicken curry, rice, roti & salad",
      price: "₹229",
      img: "https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg",
    },
    {
      title: "Mini Lunch",
      desc: "Light meal with rice, dal & 2 rotis",
      price: "₹99",
      img: "https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg",
    },
    {
      title: "Family Thali",
      desc: "Full combo for 2 with curry, rice & breads",
      price: "₹399",
      img: "https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg",
    },
    {
      title: "Royal Thali",
      desc: "Premium thali with paneer & dessert",
      price: "₹299",
      img: "https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg",
    },
  ];

  return (
    <div
      className="container-fluid py-5"
      style={{
        backgroundColor: "#fff1f1", // light red theme
      }}
    >
      <div className="container">

        <div className="text-center mb-5">
          <h1 className="fw-bold display-5">
            Lunch Box Specials 🍱
          </h1>
          <p className="text-muted fs-5">
            Fresh homemade lunch boxes prepared daily
          </p>
        </div>

        <div className="row g-4">
          {menu.map((item, index) => (
            <div key={index} className="col-md-4">

              <div
                className="card h-100 border-0 shadow-sm"
                style={{
                  borderRadius: "18px",
                  backgroundColor: "#ffffff",
                  overflow: "hidden",
                  transition: "0.3s",
                }}
              >
                <img
                  src={item.img}
                  alt={item.title}
                  style={{
                    height: "200px",
                    width: "100%",
                    objectFit: "cover",
                  }}
                />

                <div className="text-center p-4">
                  <h4 className="fw-bold mb-2">
                    {item.title}
                  </h4>

                  <p className="text-muted mb-2">
                    {item.desc}
                  </p>

                  <h5
                    className="fw-bold"
                    style={{ color: "#e63946" }}
                  >
                    {item.price}
                  </h5>

                  <button
                    className="btn mt-3 px-4"
                    style={{
                      backgroundColor: "#e63946",
                      color: "white",
                      border: "none",
                      borderRadius: "8px",
                    }}
                  >
                    Order Now
                  </button>

                </div>

              </div>

            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default LunchBox;