import React from "react";

const LunchBox = () => {
  return (
    <div className="container py-5">

      {/* Heading */}
      <div className="text-center mb-5">
        <h1 className="fw-bold display-5">Lunch Box Specials 🍱</h1>
        <p className="text-muted fs-5">
          Fresh homemade lunch boxes prepared daily with premium ingredients.
          Healthy • Hygienic • Affordable
        </p>
      </div>

      {/* Lunch Cards */}
      <div className="row g-4">

        {[
          {
            title: "🥗 Veg Lunch",
            desc: "Rice, dal, sabzi, roti & fresh salad",
            price: "₹149",
          },
          {
            title: "🍛 Deluxe Lunch",
            desc: "Paneer curry, jeera rice, naan & dessert",
            price: "₹199",
          },
          {
            title: "🍗 Non-Veg Lunch",
            desc: "Chicken curry, rice, roti & salad",
            price: "₹229",
          },
          {
            title: "🍽 Mini Lunch",
            desc: "Light meal with rice, dal & 2 rotis",
            price: "₹99",
          },
          {
            title: "👨‍👩‍👧 Family Thali",
            desc: "Full combo for 2 with curry, rice & breads",
            price: "₹399",
          },
          {
            title: "👑 Royal Thali",
            desc: "Premium thali with paneer, dessert & drink",
            price: "₹299",
          },
        ].map((item, index) => (
          <div key={index} className="col-md-4">

            {/* Big Stylish Card */}
            <div
              className="card shadow-lg text-center h-100 border-0"
              style={{
                padding: "30px",
                background: "linear-gradient(135deg, #fff3e0, #ffe0b2)",
                borderRadius: "20px",
              }}
            >
              <h4 className="fw-bold mb-3">{item.title}</h4>

              <p className="mb-4">{item.desc}</p>

              <h5 className="text-success fw-bold mb-4">
                {item.price}
              </h5>

              <button className="btn btn-warning btn-lg">
                Order Now
              </button>
            </div>

          </div>
        ))}

      </div>

      {/* Extra Info */}
      <div className="text-center mt-5 p-4 bg-light rounded shadow-sm">
        <h3 className="fw-bold mb-3">
          Fresh • Fast • Delicious
        </h3>
        <p className="text-muted">
          Our lunch boxes are prepared daily with fresh ingredients and
          delivered hot to your doorstep. Perfect for office, home,
          and family meals.
        </p>
      </div>

    </div>
  );
};

export default LunchBox;
