import React from "react";

const ContactUs = () => {
  return (
    <div className="container py-5">

      {/* Heading */}
      <div className="text-center mb-5">
        <h1 className="fw-bold display-5">Contact Us 📞</h1>
        <p className="text-muted fs-5">
          We'd love to hear from you — Reach out anytime!
        </p>
      </div>

      <div className="row g-5">

        {/* Contact Info Cards */}
        <div className="col-md-5">

          <div
            className="p-4 shadow-lg rounded mb-4"
            style={{
              background: "linear-gradient(135deg, #fff3e0, #ffe0b2)",
            }}
          >
            <h4 className="fw-bold mb-3">📍 Address</h4>
            <p>123 Food Street, City Center, India</p>
          </div>

          <div
            className="p-4 shadow-lg rounded mb-4"
            style={{
              background: "linear-gradient(135deg, #fff3e0, #ffe0b2)",
            }}
          >
            <h4 className="fw-bold mb-3">📞 Phone</h4>
            <p>+91 98765 43210</p>
          </div>

          <div
            className="p-4 shadow-lg rounded"
            style={{
              background: "linear-gradient(135deg, #fff3e0, #ffe0b2)",
            }}
          >
            <h4 className="fw-bold mb-3">✉️ Email</h4>
            <p>support@goodfood.com</p>
          </div>

        </div>

        {/* Contact Form */}
        <div className="col-md-7">

          <div
            className="shadow-lg p-5 rounded"
            style={{
              background: "#ffffff",
              border: "2px solid #ffe0b2",
            }}
          >

            <h3 className="fw-bold mb-4 text-warning">
              Send Us a Message
            </h3>

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

              <div className="mb-3">
                <textarea
                  className="form-control p-3"
                  rows="4"
                  placeholder="Your Message"
                ></textarea>
              </div>

              <button className="btn btn-warning btn-lg w-100">
                Send Message 🚀
              </button>

            </form>

          </div>

        </div>

      </div>

      {/* Bottom Highlight Section */}
      <div className="text-center mt-5 p-4 bg-light rounded shadow-sm">
        <h4 className="fw-bold">
          We reply within 24 hours ❤️
        </h4>
        <p className="text-muted mt-2">
          Customer satisfaction is our top priority.
        </p>
      </div>

    </div>
  );
};

export default ContactUs;
