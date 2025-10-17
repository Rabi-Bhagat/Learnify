import React from "react";
import Header from "./Header";
import Footer from "./Footer";

// This component displays legal information like Privacy Policy and Terms of Service.
const Legal = () => {
  return (
    <>
      <Header />
      <div style={styles.container}>
        <h1 style={styles.mainTitle}>Legal Information</h1>

        {/* Section for Privacy Policy */}
        <section style={styles.section}>
          <h2 style={styles.sectionTitle}>Privacy Policy</h2>
          <p style={styles.lastUpdated}>Last Updated: October 17, 2025</p>
          <p style={styles.paragraph}>
            Your privacy is important to us. It is Learnify's policy to respect
            your privacy regarding any information we may collect from you
            across our website. We only ask for personal information when we
            truly need it to provide a service to you. We collect it by fair and
            lawful means, with your knowledge and consent. We also let you know
            why we’re collecting it and how it will be used.
          </p>
          <p style={styles.paragraph}>
            We only retain collected information for as long as necessary to
            provide you with your requested service. What data we store, we’ll
            protect within commercially acceptable means to prevent loss and
            theft, as well as unauthorized access, disclosure, copying, use or
            modification.
          </p>
        </section>

        {/* Section for Terms of Service */}
        <section style={styles.section}>
          <h2 style={styles.sectionTitle}>Terms of Service</h2>
          <p style={styles.paragraph}>
            By accessing the website at Learnify, you are agreeing to be bound
            by these terms of service, all applicable laws and regulations, and
            agree that you are responsible for compliance with any applicable
            local laws. If you do not agree with any of these terms, you are
            prohibited from using or accessing this site. The materials
            contained in this website are protected by applicable copyright and
            trademark law.
          </p>
          <h3 style={styles.subheading}>Use License</h3>
          <p style={styles.paragraph}>
            Permission is granted to temporarily download one copy of the
            materials (information or software) on Learnify's website for
            personal, non-commercial transitory viewing only. This is the grant
            of a license, not a transfer of title, and under this license you
            may not modify or copy the materials.
          </p>
        </section>
      </div>
      <Footer theme="light" />
    </>
  );
};

// Styles for the Legal page, designed for readability
const styles = {
  container: {
    padding: "40px 60px",
    maxWidth: "900px",
    margin: "0 auto",
    backgroundColor: "#fff",
    color: "#333",
  },
  mainTitle: {
    fontSize: "2.8rem",
    textAlign: "center",
    marginBottom: "40px",
    borderBottom: "2px solid #eee",
    paddingBottom: "20px",
  },
  section: {
    marginBottom: "40px",
  },
  sectionTitle: {
    fontSize: "2rem",
    color: "#333",
    marginBottom: "15px",
  },
  lastUpdated: {
    fontSize: "0.9rem",
    color: "#888",
    fontStyle: "italic",
    marginBottom: "20px",
  },
  subheading: {
    fontSize: "1.4rem",
    color: "#555",
    marginTop: "25px",
  },
  paragraph: {
    fontSize: "1rem",
    lineHeight: 1.7,
    color: "#555",
    marginBottom: "15px",
  },
};

export default Legal;
