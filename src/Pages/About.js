import React from "react";

const About = () => {
  return (
    <div
      className="container-fluid px-5"
      style={{ backgroundColor: "#fff1f1" }}
    >

      {/* Hero Section */}
      <div className="text-center py-5">
        <h1 className="fw-bold mb-4 display-4">
          About Good Food 🍴
        </h1>
        <p className="text-muted fs-4">
          Fresh flavors, premium ingredients, and unforgettable dining experiences.
        </p>
      </div>

      {/* Story Section */}
      <div className="row align-items-center py-5 gy-5">

        <div className="col-lg-6">
          <img
            src="https://images.unsplash.com/photo-1551218808-94e220e084d2"
            alt="restaurant"
            className="img-fluid rounded shadow w-100"
            style={{ height: "420px", objectFit: "cover" }}
          />
        </div>

        <div className="col-lg-6 px-lg-5">
          <h2 className="fw-bold mb-4">Our Journey</h2>

          <p className="mb-4 fs-5 text-secondary">
            Good Food was founded in <strong>2022</strong> with a simple vision —
            to serve fresh, delicious meals that feel like home.
          </p>

          <p className="mb-4 fs-5 text-secondary">
            From lunch boxes to full-course meals, we blend traditional recipes
            with modern cooking styles.
          </p>

          <div
            className="p-4 mt-4 rounded shadow-sm fs-5"
            style={{ backgroundColor: "#ffe5e5" }}
          >
            <strong>
              Our mission is simple — serve food that creates happiness
              and brings people together.
            </strong>
          </div>
        </div>

      </div>

      {/* Feature Cards */}
      <div className="row text-center py-5 g-4">

        {[
          {
            title: "👨‍🍳 Expert Culinary Team",
            desc: "Our skilled chefs craft meals that balance taste and nutrition.",
          },
          {
            title: "🥗 Quality & Hygiene",
            desc: "Fresh ingredients and strict hygiene standards every day.",
          },
          {
            title: "🚚 Fast Delivery",
            desc: "Hot and fresh food delivered quickly to your doorstep.",
          },
        ].map((item, i) => (
          <div key={i} className="col-md-4">
            <div
              className="p-5 rounded shadow-sm h-100"
              style={{ backgroundColor: "#fff6f6" }}
            >
              <h3 className="mb-4">{item.title}</h3>
              <p className="fs-5 text-secondary">{item.desc}</p>
            </div>
          </div>
        ))}

      </div>

      {/* Info Section */}
      <div className="text-center py-5 px-lg-5">
        <h2 className="fw-bold mb-4">More About Our Restaurant</h2>
        <p className="fs-5 text-secondary">
          We focus on customer satisfaction, affordable pricing,
          and consistent taste for families and professionals.
        </p>
      </div>

      {/* Stats Section */}
      <div className="row text-center py-5 g-4">

        {[
          { number: "500+", label: "Happy Customers" },
          { number: "50+", label: "Menu Items" },
          { number: "3+", label: "Years of Service" },
        ].map((stat, i) => (
          <div key={i} className="col-md-4">
            <div
              className="p-5 rounded shadow-sm"
              style={{ backgroundColor: "#ffe5e5" }}
            >
              <h2 className="fw-bold display-6" style={{ color: "#e63946" }}>
                {stat.number}
              </h2>
              <p className="fs-5 text-secondary mt-3">
                {stat.label}
              </p>
            </div>
          </div>
        ))}

      </div>

    </div>
  );
};

export default About;