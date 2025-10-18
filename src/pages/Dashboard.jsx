import React from "react";
import { Link } from "react-router-dom";
import PersonalDetails from "./PersonalDetails";
import Sidebar from "../components/Sidebar";
import DashboardHeader from "../components/Dashboard_header";
import Footer from "../components/Footer";
import DashboardMainComponent from "../components/Dashboardmaincomponent";
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

// The main Dashboard component that brings everything together
const Dashboard = () => {
  return (
    <div style={styles.dashboardContainer}>
      <Sidebar />
      <div style={styles.mainWrapper}>
        <DashboardHeader />
        <DashboardMainComponent />
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
};

export default Dashboard;
