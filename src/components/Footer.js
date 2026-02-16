import React from "react";

function Footer() {
  return (
    <footer
      style={{
        backgroundColor:" #ffd6c2",
        color: "#1b4332",
        padding: "50px 0 20px",
      }}
    >
      <div className="container">
        <div className="row">

          {/* Logo + About */}
          <div className="col-md-4 mb-4">
            <h3 className="fw-bold">
              <span style={{ color: "#2d6a4f" }}>Good</span>{" "}
              <span style={{ color: "#ff6b35" }}>Food</span>
            </h3>
            <p className="mt-3">
              Delicious food delivered fresh to your doorstep.
              We serve quality meals with love and care.
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-md-4 mb-4">
            <h5 className="fw-bold mb-3">Quick Links</h5>
            <ul className="list-unstyled">
              <li>Home</li>
              <li>Menu</li>
              <li>Chefs</li>
              <li>Contact</li>
            </ul>
          </div>

          {/* Contact */}
          <div className="col-md-4 mb-4">
            <h5 className="fw-bold mb-3">Contact Us</h5>
            <p>📍 New Delhi, India</p>
            <p>📞 +91 98765 43210</p>
            <p>✉️ goodfood@email.com</p>
          </div>

        </div>

        {/* Bottom Line */}
        <hr style={{ borderColor: "#ff6b35" }} />

        <div className="text-center">
          <p className="mb-0">
            © 2026 GoodFood. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
