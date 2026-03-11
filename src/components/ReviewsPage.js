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
        backgroundColor: "#ffdddd",
        padding: "90px 0",
      }}
    >
      <div className="container">

        {/* Heading */}
        <div className="text-center mb-5">
          <h1
            className="fw-bold"
            style={{ fontSize: "42px", color: "#e63946" }}
          >
            What Our Customers Say ❤️
          </h1>
        </div>

        {reviews.map((review, index) => (
          <div
            key={review.id}
            className={`row align-items-center mb-4 ${
              index % 2 !== 0 ? "flex-row-reverse" : ""
            }`}
          >
            {/* Image */}
            <div className="col-md-3 text-center">
              <img
                src={review.img}
                alt={review.name}
                style={{
                  width: "110px",
                  height: "110px",
                  borderRadius: "50%",
                  objectFit: "cover",
                  border: "4px solid #e63946",
                }}
              />
            </div>

            {/* Review Card */}
            <div className="col-md-9 mt-3 mt-md-0">
              <div
                style={{
                  background: "#ffffff",
                  padding: "25px",
                  borderRadius: "15px",
                  boxShadow: "0 6px 18px rgba(0,0,0,0.08)",
                }}
              >
                <h5 className="fw-bold mb-1" style={{ color: "#333" }}>
                  {review.name}
                </h5>

                <div style={{ color: "#e63946", fontSize: "18px" }}>
                  ★★★★★
                </div>

                <p
                  style={{
                    fontSize: "16px",
                    marginTop: "6px",
                    marginBottom: "0",
                    color: "#555",
                  }}
                >
                  "{review.text}"
                </p>
              </div>
            </div>
          </div>
        ))}

      </div>
    </section>
  );
}

export default ReviewsPage;