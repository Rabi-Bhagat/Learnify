import React from "react";
import { Link } from "react-router-dom";

// The HeroSection component definition
const HeroSection = () => (
  <div style={styles.heroContainer}>
    <div style={{ maxWidth: "50%" }}>
      <h1 style={{ color: "white", fontSize: "4rem", marginBottom: "20px" }}>
        Learnify Website
      </h1>
      <h2
        style={{
          color: "#4CAF50",
          fontSize: "2.5rem",
          letterSpacing: "2px",
          marginBottom: "40px",
        }}
      >
        LANGUAGE
      </h2>
      <Link to="/dashboard">
        <button style={styles.heroButton}>Start Today</button>
      </Link>
    </div>
    <div style={{ flexShrink: 0 }}>
      {/* This assumes you have an image named a.png in your /public folder */}
      <img src="/a.png" alt="Learnify" style={styles.heroImage} />
    </div>
  </div>
);

// We move only the styles that HeroSection uses into this file
const styles = {
  heroContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "60px 80px",
    backgroundColor: "black",
    minHeight: "80vh",
  },
  heroButton: {
    padding: "15px 60px",
    backgroundColor: "#6a0dad",
    color: "white",
    borderRadius: "8px",
    border: "none",
    cursor: "pointer",
    textTransform: "uppercase",
    fontSize: "1rem",
    fontWeight: "bold",
  },
  heroImage: {
    width: "500px",
    height: "auto",
    borderRadius: "15px",
  },
};

// CRITICAL: Export the component so other files can import it
export default HeroSection;
