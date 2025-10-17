import React from "react";
import { Link } from "react-router-dom"; // Use Link for internal navigation

const DashboardHeader = () => (
  <header style={styles.header}>
    <input
      type="text"
      placeholder="Search your language partner..."
      style={styles.searchInput}
    />
    <div style={styles.headerRight}>
      {/* This link will navigate to the profile page */}
      <Link to="/profile" style={styles.settingsButton}>
        Setting...
      </Link>

      {/* The avatar can also link to the profile page */}
      <Link to="/personalDetails" style={styles.avatar}>
        A
      </Link>
    </div>
  </header>
);

// All the necessary styles for this component, kept in one place
const styles = {
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "20px 30px", // Adjusted padding for better spacing
    backgroundColor: "#27293d",
    borderBottom: "1px solid #333",
  },
  searchInput: {
    border: "1px solid #4a4a6a",
    backgroundColor: "transparent",
    color: "#fff",
    padding: "10px 15px",
    borderRadius: "8px",
    width: "300px",
    fontSize: "0.9rem",
    outline: "none", // Removes the default browser outline on focus
  },
  headerRight: {
    display: "flex",
    alignItems: "center",
  },
  settingsButton: {
    background: "none",
    border: "1px solid #4a4a6a",
    color: "#a9a9b2",
    padding: "10px 15px",
    borderRadius: "8px",
    cursor: "pointer",
    marginRight: "20px",
    textDecoration: "none", // Removes underline from the link
  },
  avatar: {
    width: "40px",
    height: "40px",
    borderRadius: "50%",
    backgroundColor: "#4a4a6a",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontWeight: "bold",
    color: "#fff",
    textDecoration: "none", // Removes underline from the link
  },
};

export default DashboardHeader;
