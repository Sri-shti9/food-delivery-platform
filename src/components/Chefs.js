import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

function Chefs() {

  const chefs = [
    {
      name: "Chef Rahul Sharma",
      role: "Expert in North Indian cuisine",
      img: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
      name: "Chef Maria Fernandes",
      role: "Italian pasta & pizza specialist",
      img: "https://randomuser.me/api/portraits/women/44.jpg",
    },
    {
      name: "Chef Aman Verma",
      role: "Chinese & Asian food expert",
      img: "https://randomuser.me/api/portraits/men/65.jpg",
    },
    {
      name: "Chef Neha Gupta",
      role: "Desserts & bakery specialist",
      img: "https://randomuser.me/api/portraits/women/68.jpg",
    },
    {
      name: "Chef Karan Mehta",
      role: "BBQ & grilled food master",
      img: "https://randomuser.me/api/portraits/men/75.jpg",
    },
    {
      name: "Chef Sneha Patel",
      role: "Modern fusion cuisine expert",
      img: "https://randomuser.me/api/portraits/women/72.jpg",
    },
  ];

  return (
    <section
      className="py-5"
      style={{
        background: "linear-gradient(135deg, #fff8f2, #ffeaea)"
      }}
    >
      <div className="container">

        <h2
          className="text-center fw-bold mb-5"
          style={{ color: "#e63946" }}
        >
          Meet Our Expert Chefs 👨‍🍳
        </h2>

        <div className="row">

          {chefs.map((chef, index) => (
            <div className="col-lg-4 col-md-6 mb-4" key={index}>

              <div
                className="card border-0 shadow-lg h-100 text-center p-4"
                style={{ borderRadius: "20px" }}
              >

                <img
                  src={chef.img}
                  alt={chef.name}
                  className="rounded-circle mx-auto mb-3"
                  width="110"
                  height="110"
                  style={{
                    border: "4px solid #e63946",
                    objectFit: "cover",
                  }}
                />

                <h5 className="fw-bold">{chef.name}</h5>

                <p className="fw-semibold mb-1" style={{ color: "#e63946" }}>
                  <i className="fas fa-utensils me-2"></i>
                  Professional Chef
                </p>

                <p className="text-muted">{chef.role}</p>

                <div className="mt-2">

                  <i className="fab fa-instagram mx-2" style={{color:"#010000"}}></i>
                  <i className="fab fa-facebook mx-2" style={{color:"#000000"}}></i>
                  <i className="fab fa-twitter mx-2" style={{color:"#000000"}}></i>

                </div>

              </div>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}

export default Chefs;