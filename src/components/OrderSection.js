import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaLeaf, FaCheckCircle, FaTruck } from "react-icons/fa";

function WhyChooseUs() {
  return (
    <section
      style={{
        background: "linear-gradient(135deg, #fff8f2, #ffeaea)",
        padding: "90px 0",
      }}
    >
      <div className="container">

        <div className="row align-items-center">

          {/* LEFT CONTENT */}
          <div className="col-lg-6">

            <div
              className="p-5 shadow"
              style={{
                background: "#ffffff",
                borderRadius: "25px",
              }}
            >
              <h1 className="fw-bold mb-3">
                Order Food From Any of
                <span style={{ color: "#e63946" }}> 40+ Restaurants</span>
              </h1>

              <p className="text-muted mb-4">
                Enjoy delicious meals delivered directly to your home.
                We provide high quality food, fast delivery and a great
                ordering experience.
              </p>

              <ul className="list-unstyled mb-4">

                <li className="mb-2">
                  <FaCheckCircle className="me-2 text-success" />
                  Easy 24-hour delivery
                </li>

                <li className="mb-2">
                  <FaCheckCircle className="me-2 text-success" />
                  Fresh food in 30 minutes
                </li>

                <li className="mb-2">
                  <FaCheckCircle className="me-2 text-success" />
                  Live tracking of your order
                </li>

              </ul>

              <button
                className="btn"
                style={{
                  background: "#e63946",
                  color: "#fff",
                  padding: "10px 25px",
                  borderRadius: "10px",
                }}
              >
                Learn More
              </button>

            </div>

          </div>

          {/* RIGHT IMAGE */}
          <div className="col-lg-6 text-center">

            <img
              src="https://cdn-icons-png.flaticon.com/512/5787/5787016.png"
              alt="food"
              className="img-fluid"
              style={{ maxWidth: "350px" }}
            />

          </div>

        </div>

        {/* WHY CHOOSE US */}
        <div className="text-center mt-5 mb-4">

          <h2 className="fw-bold">
            Why Choose Us?
          </h2>

          <p className="text-muted">
            We provide the best food quality and fast delivery service.
          </p>

        </div>

        <div className="row text-center">

          {/* CARD 1 */}
          <div className="col-md-4 mb-4">

            <div
              className="p-4 shadow-sm"
              style={{
                background: "#fff",
                borderRadius: "15px",
              }}
            >
              <FaLeaf size={40} className="text-success" />

              <h5 className="fw-bold mt-3">
                Serve Healthy Food
              </h5>

              <p className="text-muted">
                We serve healthy and tasty food prepared with fresh ingredients.
              </p>

            </div>

          </div>

          {/* CARD 2 */}
          <div className="col-md-4 mb-4">

            <div
              className="p-4 shadow-sm"
              style={{
                background: "#fff",
                borderRadius: "15px",
              }}
            >
              <FaCheckCircle size={40} className="text-success" />

              <h5 className="fw-bold mt-3">
                Best Quality
              </h5>

              <p className="text-muted">
                Our food quality is excellent and we always maintain hygiene.
              </p>

            </div>

          </div>

          {/* CARD 3 */}
          <div className="col-md-4 mb-4">

            <div
              className="p-4 shadow-sm"
              style={{
                background: "#fff",
                borderRadius: "15px",
              }}
            >
              <FaTruck size={40} className="text-success" />

              <h5 className="fw-bold mt-3">
                Fast Delivery
              </h5>

              <p className="text-muted">
                Get your food delivered quickly with our fast delivery service.
              </p>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default WhyChooseUs;