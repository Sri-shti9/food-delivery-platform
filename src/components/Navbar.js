import React from "react";
import { NavLink, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

function Navbar({ cartCount }) {

  const activeStyle = {
    color: "#e63946",
    fontWeight: "600",
  };

  return (
    <nav
      className="navbar navbar-expand-lg shadow-sm"
      style={{
        backgroundColor: "#f8f9fa",
        borderBottom: "1px solid #eee",
      }}
    >
      <div className="container-fluid px-4 py-2">

        {/* Logo */}
        <NavLink className="navbar-brand fw-bold fs-3" to="/">
          <span style={{ color: "#e63946" }}>Good</span>{" "}
          <span
            style={{
              backgroundColor: "#e63946",
              color: "white",
              padding: "4px 10px",
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
              { path: "/lunchbox", name: "Lunch Box", icon: "fa-box" },
              { path: "/menus", name: "Menu", icon: "fa-utensils" },
              { path: "/about", name: "About", icon: "fa-info-circle" },
              { path: "/delivery", name: "Delivery", icon: "fa-truck" },
              { path: "/contacts", name: "Contacts", icon: "fa-phone" },
            ].map((item, i) => (
              <li key={i} className="nav-item">
                <NavLink
                  to={item.path}
                  className="nav-link d-flex align-items-center gap-2"
                  style={({ isActive }) =>
                    isActive
                      ? activeStyle
                      : { color: "#555" }
                  }
                >
                  <i className={`fas ${item.icon}`}></i>
                  {item.name}
                </NavLink>
              </li>
            ))}

          </ul>

          {/* Right Side */}
          <div className="d-flex align-items-center gap-3 mt-3 mt-lg-0">

            

            {/* Cart */}
            <Link to="/cart" style={{ textDecoration: "none" }}>
              <div
                style={{
                  position: "relative",
                  fontSize: "20px",
                  color: "#333",
                }}
              >
                <i className="fas fa-shopping-cart"></i>

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
                className="btn btn-light border dropdown-toggle d-flex align-items-center gap-2"
                data-bs-toggle="dropdown"
                style={{
                  borderRadius: "20px",
                  fontSize: "14px",
                }}
              >
                <i className="fas fa-user"></i>
                Profile
              </button>

              <ul className="dropdown-menu dropdown-menu-end shadow">

                <li>
                  <Link className="dropdown-item" to="/profile">
                    <i className="fas fa-user me-2"></i>
                    My Profile
                  </Link>
                </li>

                <li>
                  <Link className="dropdown-item" to="/orders">
                    <i className="fas fa-box me-2"></i>
                    My Orders
                  </Link>
                </li>

                <li>
                  <hr className="dropdown-divider" />
                </li>

                <li>
                  <Link className="dropdown-item text-danger" to="/">
                    <i className="fas fa-sign-out-alt me-2"></i>
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