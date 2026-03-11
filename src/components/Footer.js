import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function Footer() {
  return (
    <section
      style={{
        background: "#fff1f1",
        color: "#333",
        padding: "90px 0 40px 0",
      }}
    >
      <div className="container">

        <div className="row text-start">

          {/* Brand Section */}
          <div className="col-lg-4 mb-5">
            <div
              style={{
                background: "#ffffff",
                borderRadius: "20px",
                padding: "35px",
                boxShadow: "0 10px 25px rgba(0,0,0,0.08)",
              }}
            >
              <h1
                className="fw-bold mb-4"
                style={{ color: "#e63946", fontSize: "50px" }}
              >
                GOODFOOD
              </h1>

              <p
                className="fw-semibold fs-5"
                style={{ color: "#555", lineHeight: "1.7" }}
              >
                Experience delicious meals delivered at your doorstep.
                Fresh taste, fast service and premium quality.
              </p>

              <div className="mt-4">
                <button
                  className="btn me-3 fw-bold"
                  style={{
                    backgroundColor: "#e63946",
                    color: "white",
                    padding: "12px 28px",
                    borderRadius: "10px",
                    border: "none",
                  }}
                >
                  Order Now
                </button>

                <button
                  className="btn btn-outline-danger fw-bold"
                  style={{
                    padding: "12px 28px",
                    borderRadius: "10px",
                    borderWidth: "2px",
                  }}
                >
                  View Menu
                </button>
              </div>
            </div>
          </div>

          {/* Links */}
          {[
            { title: "Company", links: ["About Us","Careers","Blog","Contact"] },
            { title: "Services", links: ["Online Order","Fast Delivery","Special Offers","24/7 Support"] },
            { title: "Legal", links: ["Privacy Policy","Terms & Conditions","Cookies"] },
          ].map((section, i) => (
            <div key={i} className="col-lg-2 mb-5">

              <h4
                className="fw-bold mb-4"
                style={{ color: "#e63946" }}
              >
                {section.title}
              </h4>

              {section.links.map((link, j) => (
                <p
                  key={j}
                  className="fw-semibold fs-6 mb-3"
                  style={{
                    color: "#000000",
                    cursor: "pointer",
                  }}
                >
                  {link}
                </p>
              ))}

            </div>
          ))}

          {/* Newsletter */}
          <div className="col-lg-2 mb-5">

            <h4 className="fw-bold mb-4" style={{ color: "#e63946" }}>
              Subscribe
            </h4>

            <input
              type="email"
              placeholder="Enter your email"
              className="form-control mb-3 p-3 fw-semibold"
              style={{
                borderRadius: "10px",
                border: "1px solid #ddd",
              }}
            />

            <button
              className="btn w-100 fw-bold p-3"
              style={{
                backgroundColor: "#e63946",
                color: "white",
                borderRadius: "10px",
                border: "none",
              }}
            >
              Subscribe
            </button>

          </div>

        </div>

        {/* Bottom */}
        <div
          className="text-center py-4 fw-semibold"
          style={{
            color: "#000000",
            fontSize: "16px",
            borderTop: "3px solid #e63946",
            marginTop: "40px",
          }}
        >
          © 2026 GOODFOOD. Designed with ❤️ for Food Lovers.
        </div>

      </div>
    </section>
  );
}

export default Footer;