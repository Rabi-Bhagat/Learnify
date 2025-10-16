import React from "react";

// The InfoCard component definition
const InfoCard = ({ icon, title, text }) => (
  <div style={styles.card}>
    <div style={styles.iconCircle}>{icon}</div>
    <h3 style={styles.cardTitle}>{title}</h3>
    <p style={styles.cardText}>{text}</p>
  </div>
);

const styles = {
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
};

export default InfoCard;
