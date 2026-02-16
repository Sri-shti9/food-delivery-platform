 import React from "react";

const reviews = [
  {
    id: 1,
    name: "Aman Sharma",
    text: "Amazing food and super fast delivery! Taste was perfect.",
    img: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    id: 2,
    name: "Priya Verma",
    text: "Loved the burger and pasta. Fresh and delicious!",
    img: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    id: 3,
    name: "Rahul Singh",
    text: "Best food service in town. Highly recommended!",
    img: "https://randomuser.me/api/portraits/men/76.jpg",
  },
  {
    id: 4,
    name: "Neha Gupta",
    text: "Beautiful packaging and tasty meals. Great experience!",
    img: "https://randomuser.me/api/portraits/women/65.jpg",
  },
  {
    id: 5,
    name: "Karan Mehta",
    text: "Quick delivery and awesome flavors. Loved it!",
    img: "https://randomuser.me/api/portraits/men/22.jpg",
  },
  {
    id: 6,
    name: "Sneha Patel",
    text: "Affordable and delicious food. Will order again!",
    img: "https://randomuser.me/api/portraits/women/50.jpg",
  },
];

function ReviewsPage() {
  return (
    <section
      style={{
        backgroundColor: "#fff1e6",
        minHeight: "100vh",
        padding: "70px 0",
      }}
    >
      <div className="container">

        {/* Title */}
        <h1 className="text-center fw-bold mb-5">
          Customer Reviews
        </h1>

        {/* Review Grid */}
        <div className="row g-4">
          {reviews.map((review) => (
            <div key={review.id} className="col-md-6 col-lg-4">
              <div
                className="card border-0 shadow-lg h-100 text-center p-4"
                style={{ borderRadius: "15px" }}
              >
                <img
                  src={review.img}
                  alt={review.name}
                  className="rounded-circle mx-auto mb-3"
                  style={{
                    width: "90px",
                    height: "90px",
                    objectFit: "cover",
                  }}
                />

                <h5 className="fw-bold">{review.name}</h5>

                <div style={{ color: "#ff6b35", fontSize: "20px" }}>
                  ★★★★★
                </div>

                <p className="text-muted mt-3">
                  "{review.text}"
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default ReviewsPage;
