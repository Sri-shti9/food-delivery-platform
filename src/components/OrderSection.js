import React from "react";

function OrderSection() {
  return (
    <div
      style={{
        backgroundColor: "#fff3e8",
        minHeight: "100vh", // 👈 full screen height
        display: "flex",
        alignItems: "center",
      }}
    >
      <div className="container">
        <div className="row align-items-center">

          {/* Left Text */}
          <div className="col-lg-6">

            <h1
              className="fw-bold mb-4"
              style={{ fontSize: "48px", color: "#1b4332" }}
            >
              Order Food From Any of
              <br />
              <span style={{ color: "#ff6b35" }}>
                40+ Restaurants
              </span>
            </h1>

            <p className="text-muted mb-4 fs-5">
              Have your favorite dishes delivered to your home
              or office. Enjoy our fast delivery service.
            </p>

            <ul className="list-unstyled text-muted mb-4 fs-5">
              <li>✔ Easy 24-hour delivery</li>
              <li>✔ Fresh food in 30 minutes</li>
              <li>✔ Live tracking of your order</li>
            </ul>

            <button
              className="btn btn-success px-4 py-3 fs-5"
              style={{ borderRadius: "10px" }}
            >
              Learn More
            </button>

          </div>

          {/* Right Image */}
          <div className="col-lg-6 text-center mt-4 mt-lg-0">

            <img
              src="https://cdn-icons-png.flaticon.com/512/2921/2921822.png"
              alt="delivery"
              className="img-fluid"
              style={{ maxWidth: "520px" }}
            />

          </div>

        </div>
      </div>
    </div>
  );
}

export default OrderSection;
