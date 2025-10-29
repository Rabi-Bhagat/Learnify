import React from "react";
import { Link } from "react-router-dom";
import { FaHistory, FaCommentDots, FaPencilAlt } from "react-icons/fa";
import hirdentImage from "../assets/hirdent.jpg";
import MessagesPage from "../pages/Messages_page";

const statCards = [
  {
    icon: <FaHistory size={24} />,
    title: "Sessions completed",
    subtitle: "View your history...",
  },
  {
    icon: <FaCommentDots size={24} />,
    title: "Unread messages",
    subtitle: "Catch up on your conversation",
  },
  {
    icon: <FaPencilAlt size={24} />,
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
    ],
  },
  {
    title: "Pro Learner",
    price: "$19.99/month",
    features: [
      "Access to 5 Unique courses",
      "Free study materials",
      "Core language exercises",
    ],
  },
  {
    title: "Pro Learner",
    price: "$29.99/month",
    features: [
      "Access to 5 Unique courses",
      "Free study materials",
      "Core language exercises",
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
];

const DashboardMainComponent = () => (
  <main style={styles.mainContent}>
    {/* User Profile Card */}
    <Link to="/personalDetails" style={styles.profileLink}>
      <div style={{ ...styles.card, ...styles.profileCard }}>
        <img src={hirdentImage} alt="User" style={styles.profileImage} />
        <div>
          <h6>Hirdent Rajbanshi</h6>
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
          <Link to={`/plan/${index}`} style={{ textDecoration: "none" }}>
            <button style={styles.selectPlanButton}>Select This Plan</button>
          </Link>
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

// Styles needed for this component
const styles = {
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
    color: "#fff",
  },
  profileLink: {
    textDecoration: "none",
    color: "inherit",
  },
  profileCard: {
    display: "flex",
    alignItems: "center",
    gap: "15px",
    marginBottom: "20px",
    cursor: "pointer",
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
};

export default DashboardMainComponent;
