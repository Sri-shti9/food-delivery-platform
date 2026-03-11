import React from "react";

const ContactUs = () => {
  return (
    <div
      className="container-fluid py-5"
      style={{ backgroundColor: "#fff1f1" }}
    >

      {/* Heading */}
      <div className="text-center mb-5">
        <h1 className="fw-bold display-5 mb-3">
          Contact Us 📞
        </h1>
        <p className="text-muted fs-5">
          We'd love to hear from you — Reach out anytime!
        </p>
      </div>

      <div className="container">
        <div className="row g-4 align-items-stretch">

          {/* Contact Info */}
          <div className="col-md-5">

            {[
              { title: "📍 Address", value: "123 Food Street, City Center, India" },
              { title: "📞 Phone", value: "+91 98765 43210" },
              { title: "✉️ Email", value: "support@goodfood.com" },
            ].map((item, i) => (
              <div
                key={i}
                className="p-4 rounded mb-4 shadow-sm"
                style={{ backgroundColor: "#ffe5e5" }}
              >
                <h5 className="fw-bold mb-2">{item.title}</h5>
                <p className="text-secondary mb-0">{item.value}</p>
              </div>
            ))}

          </div>

          {/* Contact Form */}
          <div className="col-md-7">

            <div
              className="p-4 p-lg-5 rounded shadow-sm"
              style={{
                backgroundColor: "#ffffff",
                border: "1px solid #ffd6d6",
              }}
            >

              <h4
                className="fw-bold mb-4"
                style={{ color: "#e63946" }}
              >
                Send Us a Message
              </h4>

              <form>

                <div className="mb-3">
                  <input
                    type="text"
                    className="form-control p-3"
                    placeholder="Your Name"
                  />
                </div>

                <div className="mb-3">
                  <input
                    type="email"
                    className="form-control p-3"
                    placeholder="Your Email"
                  />
                </div>

                <div className="mb-4">
                  <textarea
                    className="form-control p-3"
                    rows="4"
                    placeholder="Your Message"
                  ></textarea>
                </div>

                <button
                  className="w-100"
                  style={{
                    backgroundColor: "#e63946",
                    color: "white",
                    border: "none",
                    padding: "12px",
                    borderRadius: "8px",
                    fontWeight: "600",
                    fontSize: "16px",
                  }}
                >
                  Send Message 🚀
                </button>

              </form>

            </div>

          </div>

        </div>
      </div>

      {/* Bottom Section */}
      <div
        className="text-center mt-5 py-4 rounded"
        style={{ backgroundColor: "#fff6f6" }}
      >
        <h5 className="fw-bold mb-2">
          We reply within 24 hours ❤️
        </h5>
        <p className="text-secondary mb-0">
          Customer satisfaction is our top priority.
        </p>
      </div>

    </div>
  );
};

export default ContactUs;