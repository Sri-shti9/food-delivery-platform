import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

function WhyChooseUs() {
  return (
    <section
      style={{
        background: "linear-gradient(135deg, #1f2937, #111827)",
        padding: "100px 0",
      }}
    >
      <div className="container">

        <div className="row align-items-center">

          {/* LEFT CONTENT */}
          <div className="col-lg-6">

            <div className="main-card">

              <h1 className="fw-bold mb-3 text-white">
                Order Food From Any of
                <span className="highlight"> 40+ Restaurants</span>
              </h1>

              <p className="text-secondary mb-4">
                Enjoy delicious meals delivered directly to your home.
                We provide high quality food, fast delivery and a great experience.
              </p>

              <ul className="list-unstyled mb-4 text-light">

                <li className="mb-2">
                  <i className="fas fa-check-circle me-2 icon"></i>
                  Easy 24-hour delivery
                </li>

                <li className="mb-2">
                  <i className="fas fa-check-circle me-2 icon"></i>
                  Fresh food in 30 minutes
                </li>

                <li className="mb-2">
                  <i className="fas fa-check-circle me-2 icon"></i>
                  Live tracking of your order
                </li>

              </ul>

              <button className="btn btn-custom">
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
              style={{ maxWidth: "320px" }}
            />

          </div>

        </div>

        {/* WHY CHOOSE US */}
        <div className="text-center mt-5 mb-4">
          <h2 className="fw-bold text-white">Why Choose Us?</h2>
          <p className="text-secondary">
            We provide the best food quality and fast delivery service.
          </p>
        </div>

        <div className="row text-center">

          {/* CARD 1 */}
          <div className="col-md-4 mb-4">
            <div className="feature-card">
              <i className="fas fa-leaf fa-2x icon"></i>
              <h5 className="fw-bold mt-3 text-white">Healthy Food</h5>
              <p className="text-secondary">
                Fresh ingredients and hygienic preparation.
              </p>
            </div>
          </div>

          {/* CARD 2 */}
          <div className="col-md-4 mb-4">
            <div className="feature-card">
              <i className="fas fa-star fa-2x icon"></i>
              <h5 className="fw-bold mt-3 text-white">Best Quality</h5>
              <p className="text-secondary">
                Premium quality meals with great taste.
              </p>
            </div>
          </div>

          {/* CARD 3 */}
          <div className="col-md-4 mb-4">
            <div className="feature-card">
              <i className="fas fa-truck fa-2x icon"></i>
              <h5 className="fw-bold mt-3 text-white">Fast Delivery</h5>
              <p className="text-secondary">
                Lightning fast delivery at your doorstep.
              </p>
            </div>
          </div>

        </div>

      </div>

      {/* CSS */}
      <style>{`
        .main-card {
          background: rgba(255,255,255,0.06);
          backdrop-filter: blur(12px);
          padding: 40px;
          border-radius: 25px;
          box-shadow: 0 10px 30px rgba(0,0,0,0.4);
        }

        .highlight {
          color: #ff6b6b;
        }

        .icon {
          color: #ff6b6b;
        }

        .btn-custom {
          background: linear-gradient(135deg, #ff6b6b, #ff3b3b);
          color: white;
          padding: 10px 25px;
          border-radius: 10px;
          border: none;
          transition: 0.3s;
        }

        .btn-custom:hover {
          transform: scale(1.05);
          box-shadow: 0 10px 20px rgba(255,107,107,0.4);
        }

        .feature-card {
          background: rgba(255,255,255,0.06);
          backdrop-filter: blur(10px);
          padding: 30px;
          border-radius: 18px;
          transition: 0.4s;
        }

        .feature-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 15px 30px rgba(0,0,0,0.5);
        }
      `}</style>

    </section>
  );
}

export default WhyChooseUs;