import React from "react";
import { Link } from "react-router-dom";
// Import icons from Font Awesome
import { FaFacebook, FaLinkedin, FaTwitter, FaArrowLeft } from "react-icons/fa";

// --- Mock Data for the Courses ---
const coursesData = [
  {
    title: "Conversational Spanish",
    subject: "Spanish",
    description:
      "Master everyday Spanish conversations. Focus on practical phrases, cultural insights, and interactive role-playing for real-world scenarios. Build confidence in speaking and understanding.",
    level: "Beginner",
  },
  {
    title: "Business English Fluency",
    subject: "English",
    description:
      "Enhance your professional communication skills. Learn advanced vocabulary for meetings, presentations, and negotiations. Practice writing formal emails and reports with clear and concise language.",
    level: "Intermediate",
  },
  {
    title: "French Cuisine & Culture",
    subject: "French",
    description:
      "Dive into French language through its rich culinary traditions. Learn essential vocabulary for ordering, cooking, and discussing food. Explore regional dialects and historical influences.",
    level: "Beginner",
  },
  {
    title: "Advanced German Grammar",
    subject: "German",
    description:
      "Conquer complex German grammatical structures. Focus on subjunctive mood, passive voice, and advanced sentence constructions. Perfect your writing and achieve native-like fluency in complex texts.",
    level: "Advanced",
  },
  {
    title: "Japanese Kanji & Culture",
    subject: "Japanese",
    description:
      "Explore the fascinating world of Kanji characters and their cultural significance. Learn to read and write common Kanji, and understand their historical context and evolution. Includes basic calligraphy.",
    level: "Beginner",
  },
];

// --- Reusable Components ---
const Header = () => (
  <header style={styles.header}>
    <div /> {/* Empty div for spacing */}
    <div style={{ display: "flex", alignItems: "center" }}>
      <input
        type="text"
        placeholder="Search your language partner..."
        style={styles.searchInput}
      />
      <button style={styles.settingsButton}>Setting...</button>
      <div style={styles.avatar}>A</div>
    </div>
  </header>
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
    <div>
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

const CourseCard = ({ course }) => {
  // Helper to get color based on level
  const getLevelStyle = (level) => {
    const styles = {
      backgroundColor: "#d3d3d3",
      color: "#333",
    };
    if (level === "Beginner") {
      styles.backgroundColor = "#dff0d8";
      styles.color = "#3c763d";
    } else if (level === "Intermediate") {
      styles.backgroundColor = "#d9edf7";
      styles.color = "#31708f";
    } else if (level === "Advanced") {
      styles.backgroundColor = "#f2dede";
      styles.color = "#a94442";
    }
    return styles;
  };

  return (
    <div style={styles.card}>
      <div style={styles.cardImage}></div>
      <div style={styles.cardContent}>
        <h3 style={styles.cardTitle}>{course.title}</h3>
        <h4 style={styles.cardSubject}>{course.subject}</h4>
        <p style={styles.cardDescription}>{course.description}</p>
        <span style={{ ...styles.levelTag, ...getLevelStyle(course.level) }}>
          {course.level}
        </span>
        <div style={styles.cardActions}>
          <button style={styles.enrollButton}>Enroll Now</button>
          <button style={styles.detailsButton}>View Details</button>
        </div>
      </div>
    </div>
  );
};

// --- Main Page Component ---
const CoursesPage = () => {
  return (
    <div style={styles.pageContainer}>
      <Header />
      <main style={styles.mainContent}>
        <Link to="/dashboard" style={styles.backButton}>
          <FaArrowLeft style={{ marginRight: "8px" }} /> Back
        </Link>
        <div style={styles.courseGrid}>
          {coursesData.map((course, index) => (
            <CourseCard key={index} course={course} />
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

// --- Styles ---
const styles = {
  pageContainer: {
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh",
    backgroundColor: "#1e1e2d",
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "15px 30px",
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
  settingsButton: {
    background: "none",
    border: "1px solid #4a4a6a",
    color: "#fff",
    padding: "10px 15px",
    borderRadius: "8px",
    cursor: "pointer",
    margin: "0 20px",
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
    color: "#fff",
  },
  mainContent: { flex: 1, padding: "20px 50px" },
  backButton: {
    background: "none",
    border: "1px solid #4a4a6a",
    color: "#fff",
    padding: "10px 20px",
    borderRadius: "8px",
    cursor: "pointer",
    marginBottom: "20px",
    display: "flex",
    alignItems: "center",
  },
  courseGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
    gap: "30px",
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: "10px",
    overflow: "hidden",
    boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
    display: "flex",
    flexDirection: "column",
  },
  cardImage: { height: "180px", backgroundColor: "#e0e0e0" },
  cardContent: {
    padding: "20px",
    flex: 1,
    display: "flex",
    flexDirection: "column",
  },
  cardTitle: { margin: "0 0 5px 0", color: "#333" },
  cardSubject: { margin: "0 0 15px 0", color: "#777", fontWeight: "normal" },
  cardDescription: {
    fontSize: "0.9rem",
    color: "#555",
    flex: 1,
    lineHeight: 1.6,
  },
  levelTag: {
    padding: "4px 10px",
    borderRadius: "12px",
    fontSize: "0.8rem",
    alignSelf: "flex-start",
    margin: "15px 0",
  },
  cardActions: { display: "flex", gap: "10px", marginTop: "auto" },
  enrollButton: {
    flex: 1,
    backgroundColor: "#007bff",
    color: "#fff",
    border: "none",
    padding: "12px",
    borderRadius: "8px",
    cursor: "pointer",
  },
  detailsButton: {
    flex: 1,
    backgroundColor: "#fff",
    color: "#555",
    border: "1px solid #ccc",
    padding: "12px",
    borderRadius: "8px",
    cursor: "pointer",
  },

  backButton: {
    background: "none",
    border: "1px solid #4a4a6a",
    color: "#fff",
    padding: "10px 20px",
    borderRadius: "8px",
    cursor: "pointer",
    marginBottom: "20px",
    display: "inline-flex", // Use inline-flex to keep it from stretching full-width
    alignItems: "center",
    textDecoration: "none", // Remove the default underline from the link
  },

  footer: {
    padding: "20px 30px",
    backgroundColor: "#27293d",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    borderTop: "1px solid #333",
  },
  footerLink: { color: "#999", textDecoration: "none", margin: "0 10px" },
};

export default CoursesPage;
