import React from "react";
import { Link } from "react-router-dom";

const CartPage = ({
  cart = [],   // ✅ default empty array (prevents crash)
  increaseQty,
  decreaseQty,
  removeItem,
}) => {

  // ✅ Safe total calculation (works for number OR "$10" OR "₹250")
  const total = cart.reduce((sum, item) => {

    const price =
      typeof item.price === "string"
        ? parseFloat(item.price.replace(/[^0-9.]/g, ""))
        : item.price;

    const quantity = item.quantity ? item.quantity : 1;

    return sum + price * quantity;

  }, 0);

  return (
    <div className="container py-5">

      <h2 className="text-center fw-bold mb-5">
        🛒 Your Cart
      </h2>

      {!cart || cart.length === 0 ? (

        <div className="text-center">
          <h4>Cart is empty 😢</h4>
        </div>

      ) : (

        <>
          <div className="row g-4">

            {cart.map((item, index) => (

              <div key={item.id || index} className="col-md-4">

                <div
                  className="card shadow-lg border-0 h-100"
                  style={{ transition: "transform 0.3s" }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.transform = "scale(1.05)")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.transform = "scale(1)")
                  }
                >

                  <img
                    src={item.img}
                    alt={item.name}
                    className="card-img-top"
                    style={{
                      height: "200px",
                      objectFit: "cover",
                    }}
                  />

                  <div className="card-body text-center">

                    <h5>{item.name}</h5>

                    <p className="text-success fw-bold">
                      {item.price}
                    </p>

                    <div className="d-flex justify-content-center align-items-center gap-2 mb-3">

                      <button
                        className="btn btn-outline-danger"
                        onClick={() => decreaseQty(item.id)}
                      >
                        −
                      </button>

                      <span className="fw-bold">
                        {item.quantity ? item.quantity : 1}
                      </span>

                      <button
                        className="btn btn-outline-success"
                        onClick={() => increaseQty(item.id)}
                      >
                        +
                      </button>

                    </div>

                    <button
                      className="btn btn-sm btn-danger"
                      onClick={() => removeItem(item.id)}
                    >
                      Remove ❌
                    </button>

                  </div>

                </div>

              </div>

            ))}

          </div>

          <div className="text-end mt-5">

            <h3 className="fw-bold">
              Total: ${total.toFixed(2)}
            </h3>

            <Link to="/payment">
              <button
                className="btn btn-lg mt-2"
                style={{
                  backgroundColor: "#ff6b35",
                  color: "white",
                }}
              >
                Proceed to Payment 💳
              </button>
            </Link>

          </div>

        </>
      )}

    </div>
  );
};

export default CartPage;