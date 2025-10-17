import React from "react";
import { NavLink } from "react-router-dom"; // Use NavLink for active styling
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

const Sidebar = () => (
  <aside style={styles.sidebar}>
    <div style={styles.sidebarTop}>
      <h2 style={styles.logo}>Learnify</h2>
      <nav>
        {/* We map over the links and create a NavLink for each one */}
        {navLinks.map((link) => (
          <NavLink
            to={link.to}
            key={link.text}
            // This style prop will apply the 'activeNavItem' style when the link is active
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

    <a href="Dashboard" style={styles.logoutButton}>
      <FaSignOutAlt />
      <span style={styles.navText}> Log Out</span>
    </a>

    {/* <button style={styles.logoutButton}>
      <FaSignOutAlt /> <span style={styles.navText}>Log out</span>
    </button> */}
  </aside>
);

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
