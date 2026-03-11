import React from "react";

function OrderSection() {
  return (
    <section
      style={{
        background: "#ffe0e0",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        padding: "100px 0",
      }}
    >
      <div className="container">
        <div className="row align-items-center">

          {/* Left Text */}
          <div className="col-lg-6">
            <div
              style={{
                background: "#ffffff",
                borderRadius: "25px",
                padding: "40px",
                boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
              }}
            >
              <h1
                className="fw-bold mb-4"
                style={{ fontSize: "48px", color: "#333" }}
              >
                Order Food From Any of
                <br />
                <span style={{ color: "#e63946" }}>40+ Restaurants</span>
              </h1>

              <p style={{ color: "#555", fontSize: "18px" }} className="mb-4">
                Have your favorite dishes delivered to your home
                or office. Enjoy our fast delivery service.
              </p>

              <ul
                className="list-unstyled mb-4"
                style={{ color: "#555", fontSize: "18px" }}
              >
                <li>✔ Easy 24-hour delivery</li>
                <li>✔ Fresh food in 30 minutes</li>
                <li>✔ Live tracking of your order</li>
              </ul>

              <button
                className="btn"
                style={{
                  backgroundColor: "#e63946",
                  color: "white",
                  padding: "12px 30px",
                  fontSize: "18px",
                  borderRadius: "10px",
                  border: "none",
                  boxShadow: "0 6px 18px rgba(230,57,70,0.4)",
                }}
              >
                Learn More
              </button>
            </div>
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
    </section>
  );
}

export default OrderSection;