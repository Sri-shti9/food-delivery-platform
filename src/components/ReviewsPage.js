import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

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
];

function ReviewsPage() {
  return (
    <section
      style={{
        background: "linear-gradient(135deg, #f9fafb, #fff1f2)",
        padding: "100px 0",
      }}
    >
      <div className="container">

        {/* TITLE */}
        <div className="text-center mb-5">
          <h2 className="fw-bold" style={{ color: "#111827" }}>
            💬 Customer Reviews
          </h2>
          <p className="text-muted">
            What people say about our food
          </p>
        </div>

        <div className="row g-4">

          {reviews.map((review) => (
            <div key={review.id} className="col-lg-4 col-md-6">

              <div className="review-card">

                {/* TOP */}
                <div className="top">
                  <img src={review.img} alt={review.name} />
                  <div>
                    <h6>{review.name}</h6>
                    <div className="stars">
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                    </div>
                  </div>
                </div>

                {/* TEXT */}
                <p className="review-text">
                  <i className="fas fa-quote-left me-2"></i>
                  {review.text}
                </p>

                {/* BOTTOM ICON */}
                <div className="bottom-icon">
                  <i className="fas fa-utensils"></i>
                </div>

              </div>

            </div>
          ))}

        </div>

      </div>

      {/* CSS */}
      <style>{`
        .review-card {
          background: #fff;
          border-radius: 20px;
          padding: 25px;
          position: relative;
          transition: 0.4s;
          border: 1px solid rgba(255, 107, 107, 0.2);
          box-shadow: 0 10px 25px rgba(0,0,0,0.06);
        }

        .review-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 20px 40px rgba(255,107,107,0.2);
        }

        .top {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 15px;
        }

        .top img {
          width: 55px;
          height: 55px;
          border-radius: 50%;
          object-fit: cover;
          border: 3px solid #ff6b6b;
        }

        .top h6 {
          margin: 0;
          font-weight: 600;
          color: #111827;
        }

        .stars i {
          color: #facc15;
          font-size: 14px;
        }

        .review-text {
          font-size: 14px;
          color: #4b5563;
          line-height: 1.6;
        }

        .review-text i {
          color: #ff6b6b;
        }

        .bottom-icon {
          position: absolute;
          bottom: 15px;
          right: 15px;
          color: #ff6b6b;
          font-size: 18px;
          opacity: 0.3;
        }
      `}</style>

    </section>
  );
}

export default ReviewsPage;