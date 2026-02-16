import React from "react";

const About = () => {
return ( <div className="container-fluid px-5 py-5">

```
  {/* Hero Section */}
  <div className="text-center mb-5">
    <h1 className="fw-bold mb-3 display-5">About Good Food 🍴</h1>
    <p className="text-muted fs-5">
      Fresh flavors, premium ingredients, and unforgettable dining experiences.
    </p>
  </div>

  {/* Story Section */}
  <div className="row align-items-center mb-5 gy-5">

    <div className="col-lg-6">
      <img
        src="https://images.unsplash.com/photo-1551218808-94e220e084d2"
        alt="restaurant"
        className="img-fluid rounded shadow w-100"
        style={{ height: "500px", objectFit: "cover" }}
      />
    </div>

    <div className="col-lg-6 px-lg-5">

      <h2 className="fw-bold mb-4">Our Journey</h2>

      <p className="mb-4 fs-5">
        Good Food was founded in <strong>2022</strong> with a simple vision —
        to serve fresh, delicious meals that feel like home. What started as a
        small kitchen run by passionate food lovers has grown into a popular
        restaurant trusted by hundreds of happy customers.
      </p>

      <p className="mb-4 fs-5">
        From lunch boxes to full-course meals, we blend traditional recipes
        with modern cooking styles. Every dish is carefully prepared using
        premium ingredients to ensure rich flavor, quality, and hygiene.
      </p>

      <div className="p-4 bg-light rounded shadow-sm fs-5">
        <strong>
          Our mission is simple — serve food that creates happiness and
          brings people together.
        </strong>
      </div>

    </div>

  </div>

  {/* Big Feature Cards */}
  <div className="row text-center g-5 mb-5">

    <div className="col-md-4">
      <div className="p-5 shadow-lg rounded h-100 bg-white">
        <h3 className="mb-4">👨‍🍳 Expert Culinary Team</h3>
        <p className="fs-5">
          Our skilled chefs have years of experience in crafting dishes
          that balance taste, nutrition, and presentation perfectly.
          Every meal is prepared with care and passion.
        </p>
      </div>
    </div>

    <div className="col-md-4">
      <div className="p-5 shadow-lg rounded h-100 bg-white">
        <h3 className="mb-4">🥗 Quality & Hygiene</h3>
        <p className="fs-5">
          We follow strict hygiene standards and use only fresh,
          high-quality ingredients. Clean kitchens and safe cooking
          practices ensure healthy meals every day.
        </p>
      </div>
    </div>

    <div className="col-md-4">
      <div className="p-5 shadow-lg rounded h-100 bg-white">
        <h3 className="mb-4">🚚 Fast & Reliable Delivery</h3>
        <p className="fs-5">
          Our efficient delivery system ensures hot and fresh food
          reaches your doorstep quickly, making every order a smooth
          and satisfying experience.
        </p>
      </div>
    </div>

  </div>

  {/* Restaurant Info Section */}
  <div className="text-center mb-5 px-lg-5">
    <h2 className="fw-bold mb-4">More About Our Restaurant</h2>
    <p className="fs-5 text-muted">
      Since our beginning, Good Food has focused on customer satisfaction,
      affordable pricing, and consistent taste. We proudly serve families,
      students, and working professionals who trust us for their daily meals.
      Our goal is to continue growing while maintaining the warmth and
      authenticity that defines our brand.
    </p>
  </div>

  {/* Stats Section */}
  <div className="row text-center g-5">

    <div className="col-md-4">
      <div className="p-5 shadow rounded">
        <h2 className="fw-bold text-warning display-6">500+</h2>
        <p className="fs-5">Happy Customers</p>
      </div>
    </div>

    <div className="col-md-4">
      <div className="p-5 shadow rounded">
        <h2 className="fw-bold text-warning display-6">50+</h2>
        <p className="fs-5">Menu Items</p>
      </div>
    </div>

    <div className="col-md-4">
      <div className="p-5 shadow rounded">
        <h2 className="fw-bold text-warning display-6">3+</h2>
        <p className="fs-5">Years of Service</p>
      </div>
    </div>

  </div>

</div>


);
};

export default About;
