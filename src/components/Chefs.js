import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const chefs = [
  {
    id: 1,
    name: "Chef Rahul Sharma",
    text: "Expert in North Indian cuisine.",
    img: "https://randomuser.me/api/portraits/men/11.jpg",
  },
  {
    id: 2,
    name: "Chef Maria Fernandes",
    text: "Italian pasta and pizza specialist.",
    img: "https://randomuser.me/api/portraits/women/21.jpg",
  },
  {
    id: 3,
    name: "Chef Aman Verma",
    text: "Chinese and Asian food expert.",
    img: "https://randomuser.me/api/portraits/men/31.jpg",
  },
  {
    id: 4,
    name: "Chef Neha Gupta",
    text: "Desserts and bakery specialist.",
    img: "https://randomuser.me/api/portraits/women/41.jpg",
  },
  {
    id: 5,
    name: "Chef Karan Mehta",
    text: "BBQ and grilled food master.",
    img: "https://randomuser.me/api/portraits/men/51.jpg",
  },
  {
    id: 6,
    name: "Chef Sneha Patel",
    text: "Modern fusion cuisine expert.",
    img: "https://randomuser.me/api/portraits/women/61.jpg",
  },
];

function ChefPage() {
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
            Meet Our Expert Chefs 👨‍🍳
          </h1>
        </div>

        <div className="row">

          {chefs.map((chef) => (
            <div key={chef.id} className="col-md-4 mb-4">

              <div
                className="card text-center"
                style={{
                  border: "none",
                  borderRadius: "18px",
                  boxShadow: "0 6px 18px rgba(0,0,0,0.1)",
                  padding: "25px",
                }}
              >

                {/* Image */}
                <img
                  src={chef.img}
                  alt={chef.name}
                  style={{
                    width: "100px",
                    height: "100px",
                    borderRadius: "50%",
                    objectFit: "cover",
                    margin: "0 auto",
                    border: "4px solid #e63946",
                  }}
                />

                {/* Name */}
                <h5 className="fw-bold mt-3">{chef.name}</h5>

                {/* Role */}
                <div style={{ color: "#e63946" }}>
                  👨‍🍳 Professional Chef
                </div>

                {/* Description */}
                <p style={{ color: "#555", fontSize: "15px", marginTop: "6px" }}>
                  {chef.text}
                </p>

              </div>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
}

export default ChefPage;