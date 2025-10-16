import React from "react";
import Navbar from "../components/Navbar"; // Assuming you want the navbar on this page too

const About = () => {
  return (
    <>
      <Navbar />
      <div style={styles.container}>
        <h1 style={styles.title}>About Learnify</h1>
        <p style={styles.text}>
          Welcome to Learnify, the place where language learning transcends
          borders. Our mission is to create a global community where anyone,
          anywhere, can master a new language by connecting with native
          speakers.
        </p>
        <p style={styles.text}>
          We believe that the most effective way to become fluent is through
          authentic, real-world conversation. Our platform is designed to
          facilitate that connection, providing tools for video chats, lesson
          scheduling, and collaborative practice in a flexible and supportive
          environment.
        </p>
        <h2 style={styles.subtitle}>Our Vision</h2>
        <p style={styles.text}>
          To break down language barriers and foster cultural understanding by
          making language education accessible, engaging, and effective for
          everyone.
        </p>
      </div>
    </>
  );
};

// Simple styles to make the page look clean
const styles = {
  container: {
    padding: "40px 60px",
    maxWidth: "900px",
    margin: "0 auto",
    fontFamily: "Arial, sans-serif",
    lineHeight: 1.6,
  },
  title: {
    fontSize: "3rem",
    color: "#333",
    borderBottom: "3px solid #6a0dad",
    paddingBottom: "10px",
    marginBottom: "20px",
  },
  subtitle: {
    fontSize: "2rem",
    color: "#444",
    marginTop: "30px",
  },
  text: {
    fontSize: "1.1rem",
    color: "#555",
    marginBottom: "15px",
  },
};

export default About;
