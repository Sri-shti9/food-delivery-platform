import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

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
        background: "linear-gradient(135deg, #fff8f2, #ffeaea)",
        padding: "100px 0",
      }}
    >
      <div className="container">

        {/* Heading */}
        <div className="text-center mb-5">
          <h1 className="fw-bold" style={{ color: "#e63946" }}>
            What Our Customers Say
          </h1>
          <p className="text-muted">
            Real experiences from our happy customers
          </p>
        </div>

        <div className="row g-4">

          {reviews.map((review) => (
            <div className="col-lg-4 col-md-6" key={review.id}>

              <div
                className="card border-0 shadow text-center p-4 h-100"
                style={{
                  borderRadius: "20px",
                  transition: "0.3s",
                }}
              >

                {/* Quote Icon */}
                <div className="mb-3" style={{ color: "#e63946" }}>
                  <i className="fa-solid fa-quote-left fa-2x"></i>
                </div>

                {/* Review Text */}
                <p className="text-muted">
                  "{review.text}"
                </p>

                {/* Stars */}
                <div className="mb-3" style={{ color: "#ffc107" }}>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                </div>

                {/* User */}
                <div className="d-flex align-items-center justify-content-center mt-3">

                  <img
                    src={review.img}
                    alt={review.name}
                    className="rounded-circle me-3"
                    width="60"
                    height="60"
                    style={{
                      border: "3px solid #e63946",
                      objectFit: "cover",
                    }}
                  />

                  <h6 className="mb-0 fw-bold">
                    {review.name}
                  </h6>

                </div>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default ReviewsPage;