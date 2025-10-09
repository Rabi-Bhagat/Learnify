import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

// Importing icons from the react-icons library
import {
  FaBookOpen,
  FaUserFriends,
  FaComments,
  FaGlobe,
  FaLink,
  FaUserPlus,
  FaKey,
  FaFacebook,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";

// Reusable component for feature/step cards to avoid repeating code
const InfoCard = ({ icon, title, text }) => (
  <div style={styles.card}>
    <div style={styles.iconCircle}>{icon}</div>
    <h3 style={styles.cardTitle}>{title}</h3>
    <p style={styles.cardText}>{text}</p>
  </div>
);

// Your original Hero section code, now as its own component
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
      <button style={styles.heroButton}>Start Today</button>
    </div>
    <div style={{ flexShrink: 0 }}>
      {/* Make sure you have an image named a.png in your public folder */}
      <img src="/a.png" alt="Learnify" style={styles.heroImage} />
    </div>
  </div>
);

// "Why Choose Learnify?" Section
const WhyChooseUs = () => (
  <section style={styles.sectionLight}>
    <h2 style={styles.sectionTitle}>Why choose Learnify?</h2>
    <p style={styles.sectionSubtitle}>
      We provide a unique, interactive environment where language learning comes
      alive through real-time communication.
    </p>
    <div style={styles.cardContainer}>
      <InfoCard
        icon={<FaBookOpen size={30} />}
        title="Learn Authentically"
        text="Choose what you want to learn, from textbooks to articles and videos about your passions, with content updated daily."
      />
      <InfoCard
        icon={<FaUserFriends size={30} />}
        title="Practice & Grow"
        text="Improve your fluency with our global community of native speakers. It's the most effective way to learn a language."
      />
      <InfoCard
        icon={<FaComments size={30} />}
        title="Flexible & Convenient"
        text="Schedule lessons or chat on the go with tutors anywhere, anytime, and on any device you want."
      />
    </div>
  </section>
);

// "How Learnify Works" Section
const HowItWorks = () => (
  <section style={styles.sectionLight}>
    <h2 style={styles.sectionTitle}>How Learnify Works</h2>
    <p style={styles.sectionSubtitle}>
      It's simple to get started. Just follow these easy steps to begin your
      language journey.
    </p>
    <div style={styles.cardContainer}>
      <InfoCard
        icon={<FaGlobe size={30} />}
        title="Choose Your Language"
        text="Select from a wide array of languages you want to learn or practice with our global community."
      />
      <InfoCard
        icon={<FaUserFriends size={30} />}
        title="Find Your Partner"
        text="Browse profiles of native speakers matching your learning style and interests."
      />
      <InfoCard
        icon={<FaLink size={30} />}
        title="Start Connecting"
        text="Instantly schedule video call lessons, share insights, and track your progress."
      />
    </div>
  </section>
);

// "Ready to Start" Call-to-Action Section
const ReadyToStart = () => (
  <section style={styles.sectionLight}>
    <h2 style={styles.sectionTitle}>Ready to Start Your Language Journey?</h2>
    <p style={styles.sectionSubtitle}>
      Join thousands of learners and native speakers connecting and growing
      together.
    </p>
    <div style={styles.buttonContainer}>
      <button style={{ ...styles.ctaButton, ...styles.ctaButtonPrimary }}>
        <FaUserPlus style={{ marginRight: "8px" }} /> Sign Up
      </button>
      <button style={{ ...styles.ctaButton, ...styles.ctaButtonSecondary }}>
        <FaKey style={{ marginRight: "8px" }} /> Log In to Your Account
      </button>
    </div>
  </section>
);

// Footer Section
const Footer = () => (
  <footer style={styles.footer}>
    <div>
      <a href="/resources" style={styles.footerLink}>
        Resources
      </a>
      <a href="/legal" style={styles.footerLink}>
        Legal
      </a>
    </div>
    <div style={styles.socialIcons}>
      <a href="#" style={styles.socialIconLink}>
        <FaFacebook size={20} />
      </a>
      <a href="#" style={styles.socialIconLink}>
        <FaLinkedin size={20} />
      </a>
      <a href="#" style={styles.socialIconLink}>
        <FaTwitter size={20} />
      </a>
    </div>
  </footer>
);

// Main Home Component that ties everything together
const Home = () => {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <WhyChooseUs />
        <HowItWorks />
        <ReadyToStart />
      </main>
      <Footer />
    </>
  );
};

export default Home;

// Centralized object for all CSS styles for better organization
const styles = {
  // Hero Section
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
  // General Section Styles
  sectionLight: {
    backgroundColor: "#f9f9f9",
    padding: "80px 40px",
    textAlign: "center",
    borderBottom: "1px solid #e0e0e0",
  },
  sectionTitle: {
    fontSize: "2.5rem",
    marginBottom: "10px",
    color: "#333",
  },
  sectionSubtitle: {
    fontSize: "1.2rem",
    color: "#666",
    maxWidth: "800px",
    margin: "0 auto 50px auto",
  },
  // Card Styles
  cardContainer: {
    display: "flex",
    justifyContent: "center",
    gap: "30px",
    flexWrap: "wrap",
  },
  card: {
    backgroundColor: "white",
    padding: "30px",
    borderRadius: "10px",
    boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
    maxWidth: "320px",
    textAlign: "center",
    flex: 1,
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
  cardTitle: {
    fontSize: "1.4rem",
    marginBottom: "10px",
    color: "#333",
  },
  cardText: {
    fontSize: "1rem",
    color: "#777",
    lineHeight: 1.6,
  },
  // CTA Button Styles
  buttonContainer: {
    display: "flex",
    justifyContent: "center",
    gap: "20px",
    marginTop: "30px",
  },
  ctaButton: {
    display: "flex",
    alignItems: "center",
    padding: "15px 30px",
    fontSize: "1rem",
    borderRadius: "8px",
    border: "2px solid #6a0dad",
    cursor: "pointer",
    fontWeight: "bold",
  },
  ctaButtonPrimary: {
    backgroundColor: "#6a0dad",
    color: "white",
  },
  ctaButtonSecondary: {
    backgroundColor: "transparent",
    color: "#6a0dad",
  },
  // Footer Styles
  footer: {
    backgroundColor: "#333",
    color: "white",
    padding: "20px 80px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  footerLink: {
    color: "white",
    textDecoration: "none",
    marginRight: "20px",
    fontSize: "1rem",
  },
  socialIcons: {
    display: "flex",
    gap: "15px",
  },
  socialIconLink: {
    color: "white",
  },
};
