 import React from "react";

function Hero() {
  return (
    <div className="container py-5">
      <div className="row align-items-center bg-#fff3e8"
           style={{ height: "80vh" }} >
        
        <div className="col-md-6">
          <h1
            style={{
              fontSize: "60px",
              fontWeight: "700",
              color: "#1b4332",
              fontFamily: "Georgia, serif",
            }}
          >
            Experience <br /> new flavors
          </h1>

          <p className="text-muted my-4 fs-5">
            Meet our brand new soup
          </p>

          <button
            className="btn"
            style={{
              backgroundColor: "#ff6b35",
              color: "white",
              padding: "12px 22px",
              borderRadius: "8px",
              fontWeight: "600",
            }}
          >
            📞 +1 (800) 231-89-74
          </button>
        </div>

        <div className="col-md-6 text-center mt-4 mt-md-0">
          <img
            src="https://images.unsplash.com/photo-1547592180-85f173990554"
            alt="food"
            className="img-fluid"
            style={{
              maxWidth: "420px",
              borderRadius: "50%",
              boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
            }}
          />
        </div>

      </div>
    </div>
  );
}

export default Hero;
