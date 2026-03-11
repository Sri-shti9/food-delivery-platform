import React, { useState } from "react";

const Payment = () => {
  const [method, setMethod] = useState("upi");

  const handlePayment = () => {
    alert(`Payment successful via ${method.toUpperCase()} ✅`);
  };

  return (
    <div className="container py-5">

      <h1 className="text-center fw-bold mb-5">
        💳 Choose Payment Method
      </h1>

      <div
        className="card shadow-lg p-5 mx-auto"
        style={{ maxWidth: "600px", borderRadius: "15px" }}
      >

        {/* Payment Options */}
        <div className="mb-4">

          <div className="form-check mb-3">
            <input
              type="radio"
              className="form-check-input"
              name="payment"
              checked={method === "upi"}
              onChange={() => setMethod("upi")}
            />
            <label className="form-check-label fs-5">
              📱 UPI Payment
            </label>
          </div>

          <div className="form-check mb-3">
            <input
              type="radio"
              className="form-check-input"
              name="payment"
              checked={method === "card"}
              onChange={() => setMethod("card")}
            />
            <label className="form-check-label fs-5">
              💳 Card Payment
            </label>
          </div>

          <div className="form-check mb-3">
            <input
              type="radio"
              className="form-check-input"
              name="payment"
              checked={method === "cod"}
              onChange={() => setMethod("cod")}
            />
            <label className="form-check-label fs-5">
              💵 Cash on Delivery
            </label>
          </div>

        </div>

        {/* Dynamic Forms */}

        {method === "upi" && (
          <input
            type="text"
            className="form-control mb-3"
            placeholder="Enter UPI ID (example@upi)"
          />
        )}

        {method === "card" && (
          <>
            <input
              type="text"
              className="form-control mb-3"
              placeholder="Card Number"
            />

            <input
              type="text"
              className="form-control mb-3"
              placeholder="Card Holder Name"
            />

            <input
              type="text"
              className="form-control mb-3"
              placeholder="Expiry Date"
            />
          </>
        )}

        {method === "cod" && (
          <div className="alert alert-warning text-center">
            Pay cash when your order is delivered 🚚
          </div>
        )}

        {/* Pay Button */}
        <button
          className="btn btn-lg w-100 mt-3"
          style={{
            backgroundColor: "#ff6b35",
            color: "white",
            borderRadius: "10px",
          }}
          onClick={handlePayment}
        >
          Confirm Payment ✅
        </button>

      </div>

    </div>
  );
};

export default Payment;
