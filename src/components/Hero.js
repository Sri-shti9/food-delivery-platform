import React from "react";

function Hero() {
  return (
    <div
      style={{
        background: "linear-gradient(135deg,#ff4d4d,#e63946,#b11226)",
        padding: "120px 0",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* MAIN CONTAINER */}
      <div
        className="container"
        style={{
          background: "rgba(255,255,255,0.9)",
          borderRadius: "25px",
          padding: "60px",
          boxShadow: "0 15px 40px rgba(0,0,0,0.15)",
        }}
      >
        <div className="row align-items-center">

          {/* LEFT CONTENT */}
          <div className="col-md-6">

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
                marginTop: "25px",
                color: "#555",
                maxWidth: "500px",
              }}
            >
              We deliver premium quality dishes crafted with love.
              Experience restaurant-style dining at your home.
            </p>

            {/* PHONE BUTTON */}
            <div className="mt-4">
              <button
                className="btn"
                style={{
                  background: "#e63946",
                  color: "white",
                  padding: "14px 30px",
                  borderRadius: "30px",
                  fontWeight: "600",
                  border: "none",
                  fontSize: "17px",
                  boxShadow: "0 8px 20px rgba(230,57,70,0.4)",
                }}
              >
                📞 +1 (800) 231-89-74
              </button>
            </div>

            {/* STATS */}
            <div className="d-flex gap-5 mt-5">
              <div>
                <h3 style={{ fontWeight: "700", color: "#e63946" }}>1000+</h3>
                <p style={{ color: "#555" }}>Happy Clients</p>
              </div>

              <div>
                <h3 style={{ fontWeight: "700", color: "#e63946" }}>80+</h3>
                <p style={{ color: "#555" }}>Dishes</p>
              </div>

              <div>
                <h3 style={{ fontWeight: "700", color: "#e63946" }}>15+</h3>
                <p style={{ color: "#555" }}>Expert Chefs</p>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE IMAGES */}
          <div className="col-md-6 position-relative text-center mt-5 mt-md-0">

            {/* Main Image */}
            <img
              src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80"
              alt="main food"
              style={{
                width: "420px",
                borderRadius: "25px",
                boxShadow: "0 25px 50px rgba(0,0,0,0.3)",
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
    </div>
  );
}

export default Hero;