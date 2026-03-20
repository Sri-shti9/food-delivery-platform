import React from "react";
import { NavLink, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

function Navbar({ cartCount }) {

  const activeStyle = {
    color: "#ff6b6b",
    fontWeight: "600",
  };

  return (
    <nav className="navbar navbar-expand-lg custom-navbar">

      <div className="container-fluid px-4 py-1">

        {/* Logo */}
        <NavLink className="navbar-brand fw-bold text-white" to="/">
          <span style={{ color: "#ff6b6b" }}>Good</span>{" "}
          <span className="logo-box">Food</span>
        </NavLink>

        {/* Toggle */}
        <button
          className="navbar-toggler text-white"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarContent"
        >
          <i className="fas fa-bars"></i>
        </button>

        <div
          className="collapse navbar-collapse justify-content-between"
          id="navbarContent"
        >

          {/* Center Links */}
          <ul className="navbar-nav mx-auto gap-lg-3 fw-semibold">

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
                  className="nav-link d-flex align-items-center gap-2 nav-link-custom"
                  style={({ isActive }) =>
                    isActive ? activeStyle : {}
                  }
                >
                  <i className={`fas ${item.icon}`}></i>
                  {item.name}
                </NavLink>
              </li>
            ))}

          </ul>

          {/* Right Side */}
          <div className="d-flex align-items-center gap-3 mt-2 mt-lg-0">

            {/* Cart */}
            <Link to="/cart" className="cart-icon">
              <i className="fas fa-shopping-cart"></i>

              {cartCount > 0 && (
                <span className="cart-badge">
                  {cartCount}
                </span>
              )}
            </Link>

            {/* Profile */}
            <div className="dropdown">

              <button
                className="btn profile-btn dropdown-toggle"
                data-bs-toggle="dropdown"
              >
                <i className="fas fa-user me-1"></i>
                Profile
              </button>

              <ul className="dropdown-menu dropdown-menu-end custom-dropdown">

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

      {/* CSS */}
      <style>{`
        .custom-navbar {
          background: rgba(17, 24, 39, 0.9);
          backdrop-filter: blur(10px);
          border-bottom: 1px solid rgba(255,255,255,0.1);
          padding: 6px 0;
        }

        .navbar-brand {
          font-size: 20px;
        }

        .logo-box {
          background: #ff6b6b;
          color: white;
          padding: 2px 8px;
          border-radius: 6px;
          font-size: 14px;
        }

        .nav-link-custom {
          color: #d1d5db;
          font-size: 14px;
          padding: 6px 8px !important;
          transition: 0.3s;
        }

        .nav-link-custom:hover {
          color: #ff6b6b;
          transform: translateY(-2px);
        }

        .cart-icon {
          position: relative;
          font-size: 18px;
          color: #d1d5db;
          transition: 0.3s;
        }

        .cart-icon:hover {
          color: #ff6b6b;
        }

        .cart-badge {
          position: absolute;
          top: -6px;
          right: -8px;
          background: #ff6b6b;
          color: white;
          border-radius: 50%;
          padding: 2px 6px;
          font-size: 10px;
          font-weight: bold;
        }

        .profile-btn {
          background: rgba(255,255,255,0.08);
          color: white;
          border-radius: 20px;
          border: none;
          font-size: 13px;
          padding: 4px 10px;
          transition: 0.3s;
        }

        .profile-btn:hover {
          background: rgba(255,255,255,0.15);
        }

        .custom-dropdown {
          background: #1f2937;
          border-radius: 10px;
          border: none;
        }

        .custom-dropdown .dropdown-item {
          color: #e5e7eb;
          font-size: 14px;
        }

        .custom-dropdown .dropdown-item:hover {
          background: #111827;
        }
      `}</style>

    </nav>
  );
}

export default Navbar;