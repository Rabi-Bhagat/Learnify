import React from "react";
import { Link } from "react-router-dom";

const Header = () => (
  <header style={styles.header}>
    <Link to="/" style={styles.logo}>
      Learnify
    </Link>
    <nav style={styles.nav}>
      <Link to="/" style={styles.navLink}>
        Home
      </Link>
      <Link to="/contact" style={styles.navLink}>
        Contact
      </Link>
      <Link to="/about" style={styles.navLink}>
        About
      </Link>
    </nav>
    <div>
      <Link to="/login" style={{ ...styles.button, ...styles.loginButton }}>
        Login
      </Link>
      <Link to="/signup" style={{ ...styles.button, ...styles.signupButton }}>
        Sign Up
      </Link>
    </div>
  </header>
);

const styles = {
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "15px 50px",
    backgroundColor: "#fff",
    borderBottom: "1px solid #e0e0e0",
  },
  logo: {
    fontWeight: "bold",
    fontSize: "1.5rem",
    color: "#333",
    textDecoration: "none",
  },
  nav: { display: "flex", gap: "30px" },
  navLink: { color: "#555", textDecoration: "none", fontSize: "1rem" },
  button: {
    padding: "10px 20px",
    borderRadius: "5px",
    textDecoration: "none",
    marginLeft: "10px",
  },
  loginButton: { border: "1px solid #ddd", color: "#555" },
  signupButton: {
    backgroundColor: "#6a0dad",
    color: "#fff",
    border: "1px solid #6a0dad",
  },
};

export default Header;
