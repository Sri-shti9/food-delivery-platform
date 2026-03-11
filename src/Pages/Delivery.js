import React from "react";

const Delivery = () => {
  return (
    <div
      className="container-fluid px-5 py-5"
      style={{ backgroundColor: "#fff1f1" }}
    >

      {/* Hero */}
      <div className="text-center mb-5">
        <h1 className="fw-bold display-5 mb-3">
          Fast & Fresh Delivery 🚚
        </h1>
        <p className="fs-5 text-muted">
          Hot meals delivered quickly and safely to your doorstep.
        </p>
      </div>

      {/* Delivery Info */}
      <div className="row align-items-center mb-5 gy-5">

        <div className="col-lg-6">
          <img
            src="https://images.pexels.com/photos/4393665/pexels-photo-4393665.jpeg"
            alt="delivery"
            className="img-fluid rounded shadow w-100"
            style={{ height: "450px", objectFit: "cover" }}
          />
        </div>

        <div className="col-lg-6 px-lg-5">

          <h2 className="fw-bold mb-4">
            Reliable Delivery Service
          </h2>

          <p className="fs-5 mb-4">
            Our trained delivery team ensures every order reaches you hot,
            fresh, and perfectly packed.
          </p>

          <div
            className="p-4 rounded shadow-sm fs-5"
            style={{ backgroundColor: "#ffe5e5" }}
          >
            <strong>
              Average delivery time: 30–40 minutes
            </strong>
          </div>

        </div>

      </div>

      {/* Timeline */}
      <div className="mb-5 text-center">

        <h2 className="fw-bold mb-5">
          How Delivery Works
        </h2>

        <div className="row g-4">

          {[
            "🛒 Order Placed",
            "👨‍🍳 Preparing",
            "🚚 On The Way",
            "🍽 Delivered",
          ].map((step, i) => (
            <div key={i} className="col-md-3">
              <div
                className="p-4 shadow rounded h-100"
                style={{ backgroundColor: "#fff6f6" }}
              >
                <h4>{step}</h4>
              </div>
            </div>
          ))}

        </div>

      </div>

      {/* Charges */}
      <div className="mb-5">

        <h2 className="fw-bold text-center mb-4">
          Delivery Charges
        </h2>

        <div className="table-responsive px-lg-5">
          <table className="table table-bordered text-center shadow bg-white">
            <thead style={{ backgroundColor: "#ffe5e5" }}>
              <tr>
                <th>Distance</th>
                <th>Fee</th>
                <th>Time</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>0–3 km</td>
                <td style={{ color: "#e63946", fontWeight: "bold" }}>Free</td>
                <td>20–30 mins</td>
              </tr>
              <tr>
                <td>3–6 km</td>
                <td>₹30</td>
                <td>30–40 mins</td>
              </tr>
              <tr>
                <td>6–10 km</td>
                <td>₹50</td>
                <td>40–50 mins</td>
              </tr>
            </tbody>
          </table>
        </div>

      </div>

      {/* Tracking */}
      <div className="text-center">

        <h2 className="fw-bold mb-4">
          Track Your Order
        </h2>

        <div className="row justify-content-center">
          <div className="col-md-6">

            <div
              className="p-5 shadow rounded"
              style={{ backgroundColor: "#fff6f6" }}
            >
              <input
                type="text"
                className="form-control mb-3"
                placeholder="Enter Order ID"
              />

              <button
                className="btn px-4 mb-3"
                style={{
                  backgroundColor: "#e63946",
                  color: "white",
                  border: "none",
                }}
              >
                Track Order
              </button>

              <div className="progress">
                <div
                  className="progress-bar progress-bar-striped progress-bar-animated"
                  style={{
                    width: "70%",
                    backgroundColor: "#e63946",
                  }}
                >
                  On the way 🚚
                </div>
              </div>

            </div>

          </div>
        </div>

      </div>

    </div>
  );
};

export default Delivery;