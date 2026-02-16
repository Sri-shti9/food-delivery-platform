import React from "react";

const Delivery = () => {
return ( <div className="container-fluid px-5 py-5">

```
  {/* Hero */}
  <div className="text-center mb-5">
    <h1 className="fw-bold display-5 mb-3">Fast & Fresh Delivery 🚚</h1>
    <p className="fs-5 text-muted">
      Hot meals delivered quickly and safely to your doorstep.
    </p>
    <button className="btn btn-warning btn-lg mt-3 px-5">
      Order Now
    </button>
  </div>

  {/* Delivery Info */}
  <div className="row align-items-center mb-5 gy-5">

    <div className="col-lg-6">
      <img
        src="https://images.unsplash.com/photo-1600891964599-f61ba0e24092"
        alt="delivery"
        className="img-fluid rounded shadow w-100"
        style={{ height: "450px", objectFit: "cover" }}
      />
    </div>

    <div className="col-lg-6 px-lg-5">

      <h2 className="fw-bold mb-4">Reliable Delivery Service</h2>

      <p className="fs-5 mb-4">
        Our trained delivery team ensures every order reaches you hot,
        fresh, and perfectly packed using hygienic packaging and smart routing.
      </p>

      <div className="p-4 bg-light rounded shadow-sm fs-5">
        <strong>Average delivery time: 30–40 minutes</strong>
      </div>

    </div>

  </div>

  {/* Delivery Timeline */}
  <div className="mb-5 text-center">

    <h2 className="fw-bold mb-5">How Delivery Works</h2>

    <div className="row g-5">

      <div className="col-md-3">
        <div className="p-4 shadow rounded">
          <h4>🛒 Order Placed</h4>
          <p>Your order is confirmed instantly.</p>
        </div>
      </div>

      <div className="col-md-3">
        <div className="p-4 shadow rounded">
          <h4>👨‍🍳 Preparing</h4>
          <p>Chefs cook your meal fresh.</p>
        </div>
      </div>

      <div className="col-md-3">
        <div className="p-4 shadow rounded">
          <h4>🚚 On The Way</h4>
          <p>Delivery partner picks it up.</p>
        </div>
      </div>

      <div className="col-md-3">
        <div className="p-4 shadow rounded">
          <h4>🍽 Delivered</h4>
          <p>Enjoy hot and fresh food!</p>
        </div>
      </div>

    </div>

  </div>

  {/* Delivery Charges */}
  <div className="mb-5">

    <h2 className="fw-bold text-center mb-4">Delivery Charges</h2>

    <div className="table-responsive px-lg-5">
      <table className="table table-bordered text-center shadow">
        <thead className="table-warning">
          <tr>
            <th>Distance</th>
            <th>Fee</th>
            <th>Time</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>0–3 km</td>
            <td>Free</td>
            <td>20–30 mins</td>
          </tr>
          <tr>
            <td>3–6 km</td>
            <td>₹30</td>
            <td>30–40 mins</td>
          </tr>
          <tr>
            <td>6–10 km</td>
            <td>₹50</td>
            <td>40–50 mins</td>
          </tr>
        </tbody>
      </table>
    </div>

  </div>

  {/* Tracking UI */}
  <div className="text-center mb-5">

    <h2 className="fw-bold mb-4">Track Your Order</h2>

    <div className="row justify-content-center">
      <div className="col-md-6">

        <div className="p-5 shadow rounded bg-light">
          <input
            type="text"
            className="form-control mb-3"
            placeholder="Enter Order ID"
          />

          <button className="btn btn-warning px-4 mb-3">
            Track Order
          </button>

          <div className="progress">
            <div
              className="progress-bar progress-bar-striped progress-bar-animated bg-warning"
              style={{ width: "70%" }}
            >
              On the way 🚚
            </div>
          </div>

        </div>

      </div>
    </div>

  </div>

  

  {/* Payment Methods */}
  <div className="text-center">

    <h2 className="fw-bold mb-4">Payment Options</h2>

    <div className="row g-4 justify-content-center">

      <div className="col-md-3">
        <div className="p-4 shadow rounded">💳 Card Payment</div>
      </div>

      <div className="col-md-3">
        <div className="p-4 shadow rounded">📱 UPI / Wallet</div>
      </div>

      <div className="col-md-3">
        <div className="p-4 shadow rounded">💵 Cash on Delivery</div>
      </div>

    </div>

  </div>

</div>


);
};

export default Delivery;
