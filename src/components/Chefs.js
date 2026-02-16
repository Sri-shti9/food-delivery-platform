import React from "react";

function Chefs() {
  const chefs = [
    {
      name: "John White",
      img: "https://images.unsplash.com/photo-1577219491135-ce391730fb2c",
    },
    {
      name: "Sophia Brown",
      img: "https://images.unsplash.com/photo-1607631568010-a87245c0daf8",
    },
    {
      name: "Michael Lee",
      img: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092",
    },
    {
      name: "Emma Wilson",
      img: "https://images.unsplash.com/photo-1556910103-1c02745aae4d",
    },
  ];

  return (
    <div
      className="py-5"
      style={{ backgroundColor: "#fff3e8" }} // 👈 light orange bg
    >
      <div className="container">

        {/* Title */}
        <div className="text-center mb-5">
          <h2 className="fw-bold">OUR CHEFS</h2>
          <p className="text-muted">
            Meet our talented chefs creating delicious experiences
          </p>
        </div>

        {/* Big Cards */}
        <div className="row g-4">

          {chefs.map((chef, index) => (
            <div key={index} className="col-lg-6">
              <div className="card border-0 shadow p-4 h-100">

                <div className="row align-items-center">

                  {/* Image */}
                  <div className="col-md-5 text-center">
                    <img
                      src={chef.img}
                      alt={chef.name}
                      className="img-fluid rounded"
                      style={{
                        height: "230px",
                        width: "100%",
                        objectFit: "cover",
                      }}
                    />
                  </div>

                  {/* Text */}
                  <div className="col-md-7 mt-3 mt-md-0">
                    <h4 className="fw-bold">{chef.name}</h4>
                    <p className="text-muted">
                      Professional chef with expertise in modern cuisine.
                      Passionate about creating creative dishes.
                    </p>

                    <button className="btn btn-outline-warning">
                      View Profile
                    </button>
                  </div>

                </div>

              </div>
            </div>
          ))}

        </div>

      </div>
    </div>
  );
}

export default Chefs;
