import React from "react";
import { NavLink } from "react-router-dom";

function Navbar({ cartCount }) {
  const activeStyle = {
    color: "#ff6b35",
    borderBottom: "2px solid #ff6b35",
  };

  return (
    <nav
      className="navbar navbar-expand-lg navbar-light px-5 py-3"
      style={{
        borderBottom: "8px solid #ff6b35",
        background: "#f5f5f5",
      }}
    >
      {/* Logo */}
      <NavLink className="navbar-brand fw-bold fs-3" to="/">
        <span style={{ color: "#2d6a4f" }}>Good</span>{" "}
        <span
          style={{
            backgroundColor: "#ff6b35",
            color: "white",
            padding: "6px 12px",
            borderRadius: "6px",
          }}
        >
          Food
        </span>
      </NavLink>

      {/* Menu links */}
      <div className="collapse navbar-collapse justify-content-center">
        <ul className="navbar-nav gap-4 fw-medium">
          <li className="nav-item">
            <NavLink
              to="/lunchbox"
              className="nav-link"
              style={({ isActive }) => (isActive ? activeStyle : {})}
            >
              Lunch box
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink
              to="/menus"
              className="nav-link"
              style={({ isActive }) => (isActive ? activeStyle : {})}
            >
              Menu
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink
              to="/about"
              className="nav-link"
              style={({ isActive }) => (isActive ? activeStyle : {})}
            >
              About
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink
              to="/delivery"
              className="nav-link"
              style={({ isActive }) => (isActive ? activeStyle : {})}
            >
              Delivery
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink
              to="/contacts"
              className="nav-link"
              style={({ isActive }) => (isActive ? activeStyle : {})}
            >
              Contacts
            </NavLink>
          </li>
        </ul>
      </div>

      {/* Right side: Search + Cart */}
      <div className="d-flex align-items-center gap-3">

        {/* Search Bar */}
        <div
          style={{
            position: "relative",
          }}
        >
          <input
            type="text"
            placeholder="Search food..."
            className="form-control"
            style={{
              padding: "8px 40px 8px 15px",
              borderRadius: "25px",
              border: "2px solid #ff6b35",
              width: "200px",
            }}
          />

          <span
            style={{
              position: "absolute",
              right: "12px",
              top: "50%",
              transform: "translateY(-50%)",
              fontSize: "18px",
              cursor: "pointer",
            }}
          >
            🔍
          </span>
        </div>

        {/* Cart */}
        <div
          style={{
            background: "#ff6b35",
            color: "white",
            padding: "6px 12px",
            borderRadius: "20px",
            fontWeight: "bold",
          }}
        >
          🛒 {cartCount}
        </div>

      </div>
    </nav>
  );
}

export default Navbar;
