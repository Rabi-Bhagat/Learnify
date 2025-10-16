import React from "react";
import { Link } from "react-router-dom";
import About from "./About";
function Navbar() {
  const navbarStyle = {
    position: "fixed",
    top: "0",
    left: "0",
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px 20px",
    backgroundColor: "white",
    zIndex: 1000,
    boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
  };

  const linkStyle = {
    color: "black",
    textDecoration: "none",
    margin: "0 12px",
  };

  const buttonLinkStyle = {
    margin: "0 8px",
    padding: "8px 16px",
    color: "white",
    backgroundColor: "#555",
    borderRadius: "4px",
    textDecoration: "none",
    display: "inline-block",
  };

  return (
    <nav style={navbarStyle}>
      <div>
        <Link to="/" style={linkStyle}>
          Home
        </Link>
        <Link to="/Contact" style={linkStyle}>
          Contact
        </Link>
        <Link to="/about" style={linkStyle}>
          About
        </Link>
      </div>

      <div>
        <Link to="/signup" style={buttonLinkStyle}>
          Signup
        </Link>
        <Link to="/login" style={buttonLinkStyle}>
          Login
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
