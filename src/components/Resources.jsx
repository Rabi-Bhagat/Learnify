import React from "react";
import { FaBook, FaPencilAlt, FaVideo, FaComments } from "react-icons/fa";

// --- IMPORTANT: Add imports for the Header and Footer components ---
import Header from "./Header";
import Footer from "./Footer";

// Data for our resource cards. Storing it in an array makes it easy to add more later.
const resourcesData = [
  {
    icon: <FaBook size={30} />,
    title: "Online Dictionaries",
    description:
      "Access top online dictionaries for quick translations and definitions.",
    link: "https://www.wordreference.com/",
  },
  {
    icon: <FaPencilAlt size={30} />,
    title: "Grammar Guides",
    description: "Improve your writing with these in-depth grammar tutorials.",
    link: "https://www.grammarbook.com/",
  },
  {
    icon: <FaVideo size={30} />,
    title: "Video Lessons",
    description:
      "Watch engaging video lessons from language experts on YouTube.",
    link: "https://www.youtube.com/results?search_query=learn+a+new+language",
  },
  {
    icon: <FaComments size={30} />,
    title: "Language Forums",
    description: "Join communities to discuss learning strategies.",
    link: "https://forum.duolingo.com/",
  },
];

// A sub-component for each resource card to keep the code clean
const ResourceCard = ({ icon, title, description, link }) => (
  <div style={styles.card}>
    <div style={styles.iconCircle}>{icon}</div>
    <h3 style={styles.cardTitle}>{title}</h3>
    <p style={styles.cardText}>{description}</p>
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      style={styles.cardLink}
    >
      Visit Site
    </a>
  </div>
);

// This is the main component for the Resources page
const Resources = () => {
  return (
    <>
      <Header />
      <div style={styles.container}>
        <h1 style={styles.title}>Learning Resources</h1>
        <p style={styles.subtitle}>
          A curated list of tools and websites to help you on your language
          learning journey.
        </p>
        <div style={styles.grid}>
          {/* We map over the data array to create a card for each item */}
          {resourcesData.map((resource) => (
            <ResourceCard key={resource.title} {...resource} />
          ))}
        </div>
      </div>
      <Footer theme="light" />
    </>
  );
};

// Styles for the Resources page
const styles = {
  container: {
    padding: "40px 60px",
    maxWidth: "1200px",
    margin: "0 auto",
    minHeight: "70vh", // Ensures the footer doesn't rise up on short pages
  },
  title: {
    fontSize: "3rem",
    color: "#333",
    textAlign: "center",
    marginBottom: "10px",
  },
  subtitle: {
    fontSize: "1.2rem",
    color: "#666",
    textAlign: "center",
    marginBottom: "50px",
  },
  grid: {
    display: "grid",
    // This creates a responsive grid that adjusts columns based on screen width
    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
    gap: "30px",
  },
  card: {
    backgroundColor: "white",
    padding: "30px",
    borderRadius: "10px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  iconCircle: {
    backgroundColor: "#e8d9ff",
    color: "#6a0dad",
    width: "60px",
    height: "60px",
    borderRadius: "50%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: "0 auto 20px auto",
  },
  cardTitle: { fontSize: "1.5rem", marginBottom: "10px", color: "#333" },
  cardText: {
    fontSize: "1rem",
    color: "#777",
    lineHeight: 1.6,
    flexGrow: 1,
    marginBottom: "20px",
  },
  cardLink: {
    display: "inline-block",
    padding: "12px 25px",
    backgroundColor: "#6a0dad",
    color: "white",
    textDecoration: "none",
    borderRadius: "5px",
    fontWeight: "bold",
  },
};

export default Resources;
