import React from "react";
import { NavLink, useNavigate } from "react-router-dom"; // Add useNavigate
import {
  FaTachometerAlt,
  FaBook,
  FaChalkboardTeacher,
  FaEnvelope,
  FaStar,
  FaSignOutAlt,
} from "react-icons/fa";

// Data for navigation links, including the URL path for each
const navLinks = [
  { to: "/dashboard", icon: <FaTachometerAlt />, text: "Dashboard" },
  { to: "/courses", icon: <FaBook />, text: "Courses" },
  { to: "/live-class", icon: <FaChalkboardTeacher />, text: "Live Class room" },
  { to: "/messages", icon: <FaEnvelope />, text: "Messages" },
  { to: "/reviews", icon: <FaStar />, text: "Reviews" },
];

const Sidebar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Clear any stored user data/tokens
    localStorage.removeItem("userToken"); // If you're using token authentication
    localStorage.clear(); // Or clear all stored data

    // Show logout notification (optional)
    alert("Successfully logged out");

    // Redirect to login page
    navigate("/login");
  };

  return (
    <aside style={styles.sidebar}>
      <div style={styles.sidebarTop}>
        <h2 style={styles.logo}>Learnify</h2>
        <nav>
          {navLinks.map((link) => (
            <NavLink
              to={link.to}
              key={link.text}
              style={({ isActive }) =>
                isActive ? styles.activeNavItem : styles.navItem
              }
            >
              {link.icon}
              <span style={styles.navText}>{link.text}</span>
            </NavLink>
          ))}
        </nav>
      </div>

      <button onClick={handleLogout} style={styles.logoutButton}>
        <FaSignOutAlt />
        <span style={styles.navText}>Log Out</span>
      </button>
    </aside>
  );
};

// The missing styles object
const styles = {
  sidebar: {
    width: "250px",
    backgroundColor: "#27293d",
    padding: "20px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  sidebarTop: {},
  logo: {
    textAlign: "center",
    marginBottom: "40px",
    color: "#fff",
  },
  // Style for a regular, inactive navigation link
  navItem: {
    display: "flex",
    alignItems: "center",
    padding: "15px 10px",
    textDecoration: "none",
    borderRadius: "8px",
    color: "#a9a9b2",
    marginBottom: "5px",
  },
  // Style for the currently active navigation link
  activeNavItem: {
    display: "flex",
    alignItems: "center",
    padding: "15px 10px",
    textDecoration: "none",
    borderRadius: "8px",
    color: "#fff",
    backgroundColor: "#3a3a5a",
    marginBottom: "5px",
  },
  navText: {
    marginLeft: "15px",
  },
  logoutButton: {
    background: "none",
    border: "1px solid #ff4a55",
    color: "#ff4a55",
    padding: "10px",
    width: "50%",
    borderRadius: "8px",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
};

export default Sidebar;
