import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/Dashboard_header";
import Footer from "../components/Footer";
import { FaArrowLeft } from "react-icons/fa";
export const coursesData = [
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

const CourseCard = ({ course, index }) => {
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
          <Link
            to={`/courses/enroll/${index}`}
            style={{ textDecoration: "none", flex: 1 }}
          >
            <button style={styles.enrollButton}>Enroll Now</button>
          </Link>
          <Link
            to={`/courses/details/${index}`}
            style={{ textDecoration: "none", flex: 1 }}
          >
            <button style={styles.detailsButton}>View Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

//  Main Page Component
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
            <CourseCard key={index} course={course} index={index} />
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

//  Styles
const styles = {
  pageContainer: {
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh",
    backgroundColor: "#1e1e2d",
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
    display: "inline-flex",
    alignItems: "center",
    textDecoration: "none",
  },
};

export default CoursesPage;
