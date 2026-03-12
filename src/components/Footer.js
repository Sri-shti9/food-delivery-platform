import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

function Footer() {
  return (
    <footer
      style={{
        backgroundColor: "#f8f9fa",
        color: "#000",
        padding: "60px 0 20px",
      }}
    >
      <div className="container">

        <div className="row">

          {/* Brand Section */}
          <div className="col-lg-3 mb-4">
            <h3 className="fw-bold mb-3" style={{ color: "#000" }}>
              GOODFOOD
            </h3>

            <p style={{ color: "#555", lineHeight: "1.7" }}>
              Delicious meals delivered to your doorstep.
              Fresh ingredients, fast delivery and
              premium quality food experience.
            </p>
          </div>

          {/* Products */}
          <div className="col-lg-2 col-md-6 mb-4">
            <h6 className="fw-bold mb-3">Products</h6>

            <p className="mb-2">Menu</p>
            <p className="mb-2">Popular Foods</p>
            <p className="mb-2">Offers</p>
            <p className="mb-2">Delivery</p>
          </div>

          {/* Company */}
          <div className="col-lg-2 col-md-6 mb-4">
            <h6 className="fw-bold mb-3">Company</h6>

            <p className="mb-2">About Us</p>
            <p className="mb-2">Careers</p>
            <p className="mb-2">Blog</p>
            <p className="mb-2">Contact</p>
          </div>

          {/* Partner */}
          <div className="col-lg-2 col-md-6 mb-4">
            <h6 className="fw-bold mb-3">Partner</h6>

            <p className="mb-2">Restaurants</p>
            <p className="mb-2">Delivery Partner</p>
            <p className="mb-2">Affiliates</p>
            <p className="mb-2">Support</p>
          </div>

          {/* Resources */}
          <div className="col-lg-3 col-md-6 mb-4">
            <h6 className="fw-bold mb-3">Resources</h6>

            <p className="mb-2">Help Center</p>
            <p className="mb-2">Privacy Policy</p>
            <p className="mb-2">Terms & Conditions</p>
            <p className="mb-2">Security</p>

            {/* Social Icons */}
            <div className="mt-3">
              <i className="fab fa-instagram me-3 fs-5"></i>
              <i className="fab fa-facebook me-3 fs-5"></i>
              <i className="fab fa-twitter me-3 fs-5"></i>
              <i className="fab fa-youtube fs-5"></i>
            </div>
          </div>

        </div>

        {/* Bottom */}
        <hr />

        <div className="d-flex justify-content-between flex-wrap">

          <p className="mb-0" style={{ color: "#666" }}>
            © 2026 GOODFOOD. All rights reserved.
          </p>

          <div>
            <i className="fas fa-envelope me-3"></i>
            <i className="fas fa-globe me-3"></i>
            <i className="fas fa-cog"></i>
          </div>

        </div>

      </div>
    </footer>
  );
}

export default Footer;