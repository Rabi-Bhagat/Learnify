import React from "react";
// Importing the necessary icons from Font Awesome
import { Link } from "react-router-dom";
import hirdentImage from "../assets/hirdent.jpg";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
import {
  FaTachometerAlt,
  FaBook,
  FaChalkboardTeacher,
  FaEnvelope,
  FaStar,
  FaSignOutAlt,
  FaArrowLeft,
  FaFacebook,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";

// Reusable components from the dashboard layout

const Header = () => (
  <header style={styles.header}>
    <div style={styles.headerLeft}>
      <input
        type="text"
        placeholder="Search your language partner..."
        style={styles.searchInput}
      />
      <button style={styles.settingsButton}>Setting...</button>
      <div style={styles.avatar}>A</div>
    </div>

    <a href="Dashboard" style={styles.backButton}>
      Back
    </a>

    {/* <button style={styles.backButton}>
      <FaArrowLeft style={{ marginRight: "8px" }} /> Back
    </button> */}
  </header>
);

// The main content for this specific page
const PersonalDetailsContent = () => (
  <main style={styles.mainContent}>
    <div style={styles.topRow}>
      {/* User Profile Card */}
      <div style={{ ...styles.card, ...styles.profileCard }}>
        <img
          src={hirdentImage}
          alt="User Profile"
          style={styles.profileImage}
        />
        <div style={styles.profileDetailsBox}>
          <p>
            <strong>Name:</strong> Hirdent Rajbanshi
          </p>
          <p>
            <strong>Fluent in:</strong> Nepali, English chinese
          </p>
          <p>
            <strong>Learning:</strong> Spanish
          </p>
          <p>
            <strong>5 sessions complete</strong>
          </p>
        </div>
      </div>

      {/* Learning Language Card */}
      <div style={{ ...styles.card, ...styles.learningCard }}>
        <h3>Learning Language:</h3>
        <p style={styles.languageText}>Bhojpuri</p>
        <p style={styles.languageText}>Chineese</p>
      </div>
    </div>

    {/* Subscription Details Card */}
    <div style={{ ...styles.card, ...styles.subscriptionCard }}>
      <h3>Subscription Details</h3>
      <div style={styles.subscriptionHeader}>
        <h4>Pro Learner</h4>
        <span style={styles.activeBadge}>Active</span>
      </div>
      <div style={styles.subscriptionInfo}>
        <div>
          <p>
            <strong>Price:</strong> $19.99/month
          </p>
          <p>
            <strong>Next Billing Date:</strong> October 26, 2025
          </p>
        </div>
        <div>
          <p>
            <strong>Billing Cycle:</strong> Monthly
          </p>
        </div>
      </div>
      <div style={styles.planFeatures}>
        <h4>Plan Features:</h4>
        <ul>
          <li>Unlimited 1-on-1 sessions</li>
          <li>Access to premium learning materials</li>
          <li>Priority tutor matching</li>
          <li>Personalized feedback system</li>
          <li>24/7 technical support</li>
        </ul>
      </div>
    </div>
  </main>
);

// The complete page component
const PersonalDetails = () => {
  return (
    <div style={styles.pageContainer}>
      <Sidebar />
      <div style={styles.mainWrapper}>
        <Header />
        <PersonalDetailsContent />
        <Footer />
      </div>
    </div>
  );
};

// Centralized styles object
const styles = {
  pageContainer: {
    display: "flex",
    backgroundColor: "#1e1e2d",
    color: "#ccc",
    minHeight: "100vh",
    fontFamily: "sans-serif",
  },
  sidebar: {
    width: "250px",
    backgroundColor: "#27293d",
    padding: "20px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    borderRight: "1px solid #333",
  },
  navItem: {
    display: "flex",
    alignItems: "center",
    padding: "15px 10px",
    cursor: "pointer",
    borderRadius: "8px",
    marginBottom: "5px",
    color: "#a9a9b2",
  },
  navText: { marginLeft: "15px" },
  logoutButton: {
    backgroundColor: "#444",
    border: "1px solid #555",
    color: "#ff4a55",
    padding: "10px",
    width: "100%",
    borderRadius: "8px",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  mainWrapper: { flex: 1, display: "flex", flexDirection: "column" },
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "15px 30px",
    backgroundColor: "#27293d",
    borderBottom: "1px solid #333",
  },
  headerLeft: { display: "flex", alignItems: "center" },
  searchInput: {
    border: "1px solid #4a4a6a",
    backgroundColor: "transparent",
    color: "#fff",
    padding: "10px 15px",
    borderRadius: "8px",
    width: "300px",
  },
  settingsButton: {
    background: "none",
    border: "1px solid #4a4a6a",
    color: "#fff",
    padding: "10px 15px",
    borderRadius: "8px",
    cursor: "pointer",
    margin: "0 20px",
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
  },
  backButton: {
    backgroundColor: "#3a3a5a",
    color: "#fff",
    border: "1px solid #4a4a6a",
    display: "flex",
    alignItems: "center",
    padding: "8px 15px",
    borderRadius: "8px",
    cursor: "pointer",
  },
  mainContent: { padding: "30px", flex: 1, overflowY: "auto" },
  topRow: { display: "flex", gap: "30px", marginBottom: "30px" },
  card: {
    backgroundColor: "#27293d",
    border: "1px solid #444",
    borderRadius: "15px",
    padding: "25px",
  },
  profileCard: {
    flex: 1,
    textAlign: "center",
  },
  profileImage: {
    width: "100px",
    height: "100px",
    borderRadius: "50%",
    border: "2px solid #4a4a6a",
    marginBottom: "15px",
  },
  profileDetailsBox: {
    backgroundColor: "#1e1e2d",
    padding: "10px",
    borderRadius: "8px",
    fontSize: "0.9rem",
    textAlign: "left",
  },
  learningCard: {
    flex: 1,
  },
  languageText: {
    fontSize: "1.5rem",
    margin: "10px 0",
    color: "#fff",
  },
  subscriptionCard: {
    width: "100%",
  },
  subscriptionHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottom: "1px solid #444",
    paddingBottom: "10px",
    marginBottom: "20px",
  },
  activeBadge: {
    backgroundColor: "rgba(0, 255, 0, 0.1)",
    color: "#0f0",
    padding: "5px 10px",
    borderRadius: "12px",
    fontSize: "0.8rem",
  },
  subscriptionInfo: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "20px",
    color: "#a9a9b2",
  },
  planFeatures: {
    borderTop: "1px solid #444",
    paddingTop: "10px",
    color: "#a9a9b2",
    "& ul": {
      listStyle: "none",
      padding: 0,
      lineHeight: 1.8,
    },
  },
  footer: {
    padding: "20px 30px",
    backgroundColor: "#27293d",
    borderTop: "1px solid #333",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  footerLink: { color: "#999", textDecoration: "none", margin: "0 10px" },
  socialIcons: { display: "flex", gap: "10px" },
};

export default PersonalDetails;
