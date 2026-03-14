import React from "react";

function Hero() {
  return (
    <section
      style={{
        background: "linear-gradient(135deg,#fff,#f8f9fa)",
        padding: "80px 0",
      }}
    >
      <div
        className="container"
        style={{
          background: "rgba(255,255,255,0.95)",
          borderRadius: "25px",
          padding: "60px",
          boxShadow: "0 20px 50px rgba(0,0,0,0.12)",
        }}
      >
        <div className="row align-items-center">

          {/* LEFT CONTENT */}
          <div className="col-lg-6">

            <h1
              style={{
                fontSize: "60px",
                fontWeight: "800",
                lineHeight: "1.2",
                color: "#333",
              }}
            >
              Taste the <br />
              <span style={{ color: "#e63946" }}>Luxury Food</span>
            </h1>

            <p
              style={{
                fontSize: "18px",
                marginTop: "20px",
                color: "#555",
                maxWidth: "500px",
              }}
            >
              We deliver premium quality dishes crafted with love.
              Experience restaurant-style dining at your home.
            </p>

            {/* BUTTONS */}
            <div className="d-flex gap-3 mt-4 flex-wrap">

              <button
                className="btn"
                style={{
                  background: "#e63946",
                  color: "white",
                  padding: "14px 28px",
                  borderRadius: "30px",
                  fontWeight: "600",
                  border: "none",
                  fontSize: "16px",
                  boxShadow: "0 10px 25px rgba(230,57,70,0.4)",
                }}
              >
                <i className="fas fa-phone me-2"></i>
                +1 (800) 231-89-74
              </button>

              <button
                className="btn btn-outline-dark"
                style={{
                  borderRadius: "30px",
                  padding: "14px 26px",
                  fontWeight: "600",
                }}
              >
                <i className="fas fa-utensils me-2"></i>
                View Menu
              </button>

            </div>

            {/* STATS */}
            <div className="d-flex gap-5 mt-5 flex-wrap">

              <div>
                <h3 style={{ fontWeight: "700", color: "#e63946" }}>
                  <i className="fas fa-smile me-2"></i>
                  1000+
                </h3>
                <p style={{ color: "#555" }}>Happy Clients</p>
              </div>

              <div>
                <h3 style={{ fontWeight: "700", color: "#e63946" }}>
                  <i className="fas fa-utensils me-2"></i>
                  80+
                </h3>
                <p style={{ color: "#555" }}>Dishes</p>
              </div>

              <div>
                <h3 style={{ fontWeight: "700", color: "#e63946" }}>
                  <i className="fas fa-user-chef me-2"></i>
                  15+
                </h3>
                <p style={{ color: "#555" }}>Expert Chefs</p>
              </div>

            </div>
          </div>

          {/* RIGHT SIDE IMAGES */}
          <div className="col-lg-6 position-relative text-center mt-5 mt-lg-0">

            {/* Main Image */}
            <img
              src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80"
              alt="main food"
              style={{
                width: "420px",
                borderRadius: "25px",
                boxShadow: "0 25px 50px rgba(0,0,0,0.25)",
              }}
            />

            {/* Floating Image 1 */}
            <img
              src="https://images.unsplash.com/photo-1551782450-a2132b4ba21d?auto=format&fit=crop&w=400&q=80"
              alt="food"
              style={{
                width: "180px",
                borderRadius: "20px",
                position: "absolute",
                top: "-40px",
                right: "20px",
                boxShadow: "0 15px 30px rgba(0,0,0,0.3)",
              }}
            />

            {/* Floating Image 2 */}
            <img
              src="https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&w=400&q=80"
              alt="food"
              style={{
                width: "160px",
                borderRadius: "20px",
                position: "absolute",
                bottom: "-40px",
                left: "40px",
                boxShadow: "0 15px 30px rgba(0,0,0,0.3)",
              }}
            />

          </div>

        </div>
      </div>
    </section>
  );
}

export default Hero;