import React from "react";
// Importing a variety of icons from the Font Awesome set in react-icons
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

// Data for our components to keep the JSX clean
const navLinks = [
  { icon: <FaTachometerAlt />, text: "Dashboard" },
  { icon: <FaBook />, text: "Courses" },
  { icon: <FaChalkboardTeacher />, text: "Live Class room" },
  { icon: <FaEnvelope />, text: "Messages" },
  { icon: <FaStar />, text: "Reviews" },
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
      <nav>
        <ul>
          {navLinks.map((link, index) => (
            <li key={index} style={styles.navItem}>
              {link.icon} <span style={styles.navText}>{link.text}</span>
            </li>
          ))}
        </ul>
      </nav>
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
      <button style={styles.settingsButton}>Setting...</button>
      <div style={styles.avatar}>A</div>
    </div>
  </header>
);

const MainContent = () => (
  <main style={styles.mainContent}>
    {/* User Profile Card */}
    <div style={{ ...styles.card, ...styles.profileCard }}>
      <img
        src="https://via.placeholder.com/60"
        alt="User"
        style={styles.profileImage}
      />
      <div>
        <h4>Thomas Kaluw...</h4>
        <p style={{ color: "#999" }}>Tutor in Spanish, English</p>
      </div>
    </div>

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

const Footer = () => (
  <footer style={styles.footer}>
    <div>
      <a href="#" style={styles.footerLink}>
        Resources
      </a>
      <a href="#" style={styles.footerLink}>
        Legal
      </a>
    </div>
    <div style={styles.socialIcons}>
      <a href="#" style={styles.footerLink}>
        <FaFacebook />
      </a>
      <a href="#" style={styles.footerLink}>
        <FaLinkedin />
      </a>
      <a href="#" style={styles.footerLink}>
        <FaTwitter />
      </a>
    </div>
  </footer>
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
    border: "1px solid #4a4a6a",
    backgroundColor: "transparent",
    color: "#fff",
    padding: "10px 15px",
    borderRadius: "8px",
    width: "300px",
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
  profileCard: {
    display: "flex",
    alignItems: "center",
    gap: "15px",
    marginBottom: "20px",
  },
  profileImage: {
    borderRadius: "50%",
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
