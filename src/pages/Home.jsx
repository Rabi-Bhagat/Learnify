import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import InfoCard from "../components/Infocard";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";

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

const ReadyToStart = () => (
  <section style={styles.sectionLight}>
    <h2 style={styles.sectionTitle}>Ready to Start Your Language Journey?</h2>
    <p style={styles.sectionSubtitle}>
      Join thousands of learners and native speakers connecting and growing
      together.
    </p>
    <div style={styles.buttonContainer}>
      <Link to="/Signup">
        <button style={{ ...styles.ctaButton, ...styles.ctaButtonPrimary }}>
          <FaUserPlus style={{ marginRight: "8px" }} /> Sign Up
        </button>
      </Link>

      <Link to="/login">
        <button style={{ ...styles.ctaButton, ...styles.ctaButtonSecondary }}>
          <FaKey style={{ marginRight: "8px" }} /> Log In to Your Account
        </button>
      </Link>
    </div>
  </section>
);

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

const styles = {
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
};
