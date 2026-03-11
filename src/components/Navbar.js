import React from "react";
import { NavLink, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

function Navbar({ cartCount }) {

  const activeStyle = {
    color: "#e63946",
    backgroundColor: "#ffdddd",
    fontWeight: "600",
    padding: "6px 14px",
    borderRadius: "8px",
  };

  return (
    <nav
      className="navbar navbar-expand-lg"
      style={{
        backgroundColor: "linear-gradient(135deg,#ff4d4d,#e63946,#b11226)",
        borderBottom: "2px solid #e63946",
      }}
    >
      <div className="container-fluid px-4 py-3">

        {/* Logo */}
        <NavLink className="navbar-brand fw-bold fs-4" to="/">
          <span style={{ color: "#ffdddd" }}>Good</span>{" "}
          <span
            style={{
              backgroundColor: "#ffdddd",
              color: "#e63946",
              padding: "5px 10px",
              borderRadius: "8px",
            }}
          >
            Food
          </span>
        </NavLink>

        {/* Toggle */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarContent"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="collapse navbar-collapse justify-content-between"
          id="navbarContent"
        >

          {/* Center Links */}
          <ul className="navbar-nav mx-auto gap-lg-4 fw-semibold">
            {[
              { path: "/lunchbox", name: "Lunch Box" },
              { path: "/menus", name: "Menu" },
              { path: "/about", name: "About" },
              { path: "/delivery", name: "Delivery" },
              { path: "/contacts", name: "Contacts" },
            ].map((item, i) => (
              <li key={i} className="nav-item">
                <NavLink
                  to={item.path}
                  className="nav-link px-3"
                  style={({ isActive }) =>
                    isActive
                      ? activeStyle
                      : { color: "#ffdddd" }
                  }
                >
                  {item.name}
                </NavLink>
              </li>
            ))}
          </ul>

          {/* Right Side */}
          <div className="d-flex align-items-center gap-3 mt-3 mt-lg-0">

            {/* Search */}
            <div style={{ position: "relative" }}>
              <input
                type="text"
                placeholder="Search food..."
                className="form-control"
                style={{
                  padding: "6px 35px 6px 12px",
                  borderRadius: "20px",
                  border: "1px solid #e63946",
                  fontSize: "14px",
                  width: "170px",
                  background: "#fff",
                }}
              />
              <span
                style={{
                  position: "absolute",
                  right: "12px",
                  top: "50%",
                  transform: "translateY(-50%)",
                  fontSize: "14px",
                  color: "#e63946",
                }}
              >
                🔍
              </span>
            </div>

            {/* Cart */}
            <Link to="/cart" style={{ textDecoration: "none" }}>
              <div
                style={{
                  position: "relative",
                  fontSize: "20px",
                  cursor: "pointer",
                  color: "#333",
                }}
              >
                🛒
                {cartCount > 0 && (
                  <span
                    style={{
                      position: "absolute",
                      top: "-8px",
                      right: "-10px",
                      background: "#e63946",
                      color: "white",
                      borderRadius: "50%",
                      padding: "3px 7px",
                      fontSize: "11px",
                      fontWeight: "bold",
                    }}
                  >
                    {cartCount}
                  </span>
                )}
              </div>
            </Link>

            {/* Profile */}
            <div className="dropdown">
              <button
                className="btn"
                data-bs-toggle="dropdown"
                style={{
                  borderRadius: "20px",
                  fontSize: "14px",
                  color: "#e63946",
                  border: "1px solid #e63946",
                  background: "white",
                }}
              >
                👤 Profile
              </button>

              <ul className="dropdown-menu dropdown-menu-end">
                <li>
                  <Link className="dropdown-item" to="/profile">
                    My Profile
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/orders">
                    My Orders
                  </Link>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <Link className="dropdown-item text-danger" to="/">
                    Logout
                  </Link>
                </li>
              </ul>
            </div>

          </div>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;