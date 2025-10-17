import React from "react";
import { Link } from "react-router-dom"; // 1. IMPORT the Link component
import hiedrntImage from "../assets/hirdent.jpg";
import {
  FaTachometerAlt,
  FaBook,
  FaChalkboardTeacher,
  FaEnvelope,
  FaStar,
  FaSignOutAlt,
  FaHistory,
  FaCommentDots,
  FaPencilAlt,
  FaFacebook,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";

const navLinks = [
  { to: "/courses", icon: <FaBook />, text: "Courses" },
  { to: "/live-class", icon: <FaChalkboardTeacher />, text: "Live Class room" },
  { to: "/messages", icon: <FaEnvelope />, text: "Messages" },
  { to: "/reviews", icon: <FaStar />, text: "Reviews" },
];

const statCards = [
  {
    icon: <FaHistory />,
    title: "Sessions completed",
    subtitle: "View your history...",
  },
  {
    icon: <FaCommentDots />,
    title: "Unread messages",
    subtitle: "Catch up on your conversation",
  },
  {
    icon: <FaPencilAlt />,
    title: "Pending your reviews",
    subtitle: "Share your feedback...",
  },
];

const pricingPlans = [
  {
    title: "Basic Learner",
    price: "$9.99/month",
    features: [
      "Access to 5 Unique courses",
      "Free study materials",
      "Core language exercises",
      "Community forum access",
      "Monthly language tips",
    ],
  },
  {
    title: "Pro Learner",
    price: "$19.99/month",
    features: [
      "Access to 5 Unique courses",
      "Free study materials",
      "Core language exercises",
      "Community forum access",
      "Monthly language tips",
    ],
  },
  {
    title: "Pro Learner",
    price: "$29.99/month",
    features: [
      "Access to 5 Unique courses",
      "Free study materials",
      "Core language exercises",
      "Community forum access",
      "Monthly language tips",
    ],
  },
];

const languages = [
  "English",
  "Japan",
  "Spainsh",
  "German",
  "Korean",
  "Italian",
  "French",
  "Romanian",
  "Russian",
];

// Sub-components for the Dashboard
const Sidebar = () => (
  <aside style={styles.sidebar}>
    <div style={styles.sidebarTop}>
      <h2 style={styles.logo}>Learnify</h2>
      <div>
        <div style={styles.navItemActive}>
          <FaTachometerAlt /> <span style={styles.navText}>Dashboard</span>
        </div>
        {navLinks.map((link) => (
          <Link to={link.to} key={link.text} style={{ textDecoration: "none" }}>
            <div style={styles.navItem}>
              {link.icon} <span style={styles.navText}>{link.text}</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
    <button style={styles.logoutButton}>
      <FaSignOutAlt /> <span style={styles.navText}>Log out</span>
    </button>
  </aside>
);

const Header = () => (
  <header style={styles.header}>
    <input
      type="text"
      placeholder="Search your language partner..."
      style={styles.searchInput}
    />
    <div style={styles.headerRight}>
      <a href="/profile" style={styles.settingsButton}>
        Setting...
      </a>
      <div style={styles.avatar}>A</div>
    </div>
  </header>
);

const MainContent = () => (
  <main style={styles.mainContent}>
    {/* 2. WRAP the entire profile card in a <Link> that points to your profile page */}
    <Link to="/profile" style={styles.profileLink}>
      <div style={{ ...styles.card, ...styles.profileCard }}>
        <img src={hiedrntImage} alt="User" style={styles.profileImage} />
        <div>
          <h6>Sujan Subedi</h6>
          <h6>Fluent in : Nepali and Bhojpuri</h6>
          <h6>Learning : Madrasi</h6>
          <h6>1 Session Completed</h6>
        </div>
      </div>
    </Link>

    {/* Stat Cards */}
    <section style={styles.gridThree}>
      {statCards.map((card, index) => (
        <div key={index} style={styles.card}>
          {card.icon}
          <h4>{card.title}</h4>
          <p style={{ color: "#999" }}>{card.subtitle}</p>
        </div>
      ))}
    </section>

    {/* Pricing Plans */}
    <section style={styles.gridThree}>
      {pricingPlans.map((plan, index) => (
        <div key={index} style={{ ...styles.card, ...styles.pricingCard }}>
          <h4>{plan.title}</h4>
          <h2 style={styles.price}>{plan.price}</h2>
          <ul style={styles.featuresList}>
            {plan.features.map((feature, i) => (
              <li key={i}>{feature}</li>
            ))}
          </ul>
          <button style={styles.selectPlanButton}>Select This Plan</button>
        </div>
      ))}
    </section>

    {/* Language Grid */}
    <section style={styles.gridThree}>
      {languages.map((lang, index) => (
        <div key={index} style={{ ...styles.card, ...styles.languageCard }}>
          <h4>{lang}</h4>
        </div>
      ))}
    </section>
  </main>
);

// The main Dashboard component that brings everything together
const Dashboard = () => {
  return (
    <div style={styles.dashboardContainer}>
      <Sidebar />
      <div style={styles.mainWrapper}>
        <Header />
        <MainContent />
        <Footer />
      </div>
    </div>
  );
};

const Footer = () => (
  <footer style={styles.footer}>
    <div>
      <Link to="/resources" style={styles.footerLink}>
        Resources
      </Link>
      <Link to="/legal" style={styles.footerLink}>
        Legal
      </Link>
    </div>
    <div style={styles.socialIcons}>
      <a
        href="https://facebook.com"
        target="_blank"
        rel="noopener noreferrer"
        style={styles.footerLink}
      >
        <FaFacebook />
      </a>
      <a
        href="https://linkedin.com"
        target="_blank"
        rel="noopener noreferrer"
        style={styles.footerLink}
      >
        <FaLinkedin />
      </a>
      <a
        href="https://twitter.com"
        target="_blank"
        rel="noopener noreferrer"
        style={styles.footerLink}
      >
        <FaTwitter />
      </a>
    </div>
  </footer>
);

// Centralized styles object
const styles = {
  dashboardContainer: {
    display: "flex",
    backgroundColor: "#1e1e2d",
    color: "#fff",
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
  },
  logo: {
    textAlign: "center",
    marginBottom: "40px",
  },
  navItem: {
    display: "flex",
    alignItems: "center",
    padding: "15px 10px",
    listStyle: "none",
    cursor: "pointer",
    borderRadius: "8px",
    color: "#a9a9b2",
    transition: "background-color 0.2s",
  },
  navItemActive: {
    display: "flex",
    alignItems: "center",
    padding: "15px 10px",
    listStyle: "none",
    borderRadius: "8px",
    backgroundColor: "#3a3a5a",
    color: "#fff",
  },
  navText: {
    marginLeft: "15px",
  },
  logoutButton: {
    background: "none",
    border: "1px solid #ff4a55",
    color: "#ff4a55",
    padding: "10px",
    width: "100%",
    borderRadius: "8px",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  mainWrapper: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "20px",
    backgroundColor: "#27293d",
    borderBottom: "1px solid #333",
  },
  searchInput: {
    backgroundColor: "transparent",
    color: "#fff",
    padding: "10px 15px",
    borderRadius: "8px",
    width: "300px",
    marginRight: "20px",
    border: "1px solid #4a4a6a",
  },
  headerRight: {
    display: "flex",
    alignItems: "center",
  },
  settingsButton: {
    background: "none",
    border: "1px solid #4a4a6a",
    color: "#fff",
    padding: "10px 15px",
    borderRadius: "8px",
    cursor: "pointer",
    marginRight: "20px",
    textDecoration: "none",
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
  mainContent: {
    padding: "20px",
    overflowY: "auto",
    flex: 1,
  },
  gridThree: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
    gap: "20px",
    marginBottom: "20px",
  },
  card: {
    backgroundColor: "#27293d",
    padding: "20px",
    borderRadius: "10px",
  },
  // 3. ADD a style for the Link to remove the underline and inherit color
  profileLink: {
    textDecoration: "none",
    color: "inherit",
  },
  profileCard: {
    display: "flex",
    alignItems: "center",
    gap: "15px",
    marginBottom: "20px",
    cursor: "pointer", // Add a pointer cursor to indicate it's clickable
    backgroundColor: "#3a3a5a",
  },
  profileImage: {
    width: "80px",
    height: "80px",
    borderRadius: "50%",
    objectFit: "cover",
  },
  pricingCard: {
    textAlign: "center",
  },
  price: {
    margin: "10px 0",
    fontSize: "2rem",
  },
  featuresList: {
    listStyle: "none",
    padding: 0,
    margin: "20px 0",
    color: "#999",
    lineHeight: 1.8,
  },
  selectPlanButton: {
    backgroundColor: "#007bff",
    color: "#fff",
    border: "none",
    padding: "12px 25px",
    borderRadius: "8px",
    cursor: "pointer",
    width: "100%",
  },
  languageCard: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "100px",
  },
  footer: {
    padding: "20px",
    backgroundColor: "#27293d",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  footerLink: {
    color: "#999",
    textDecoration: "none",
    margin: "0 10px",
  },
  socialIcons: {
    display: "flex",
    gap: "10px",
  },
};

export default Dashboard;
