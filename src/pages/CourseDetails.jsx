import React from "react";
import { useParams, Link } from "react-router-dom";
import { coursesData } from "./Course";
import Header from "../components/Dashboard_header";
import Footer from "../components/Footer";

const CourseDetails = () => {
  const { id } = useParams();
  const course = coursesData[Number(id)] || null;

  if (!course)
    return (
      <div
        style={{
          padding: 24,
          color: "#fff",
          background: "#1e1e2d",
          minHeight: "100vh",
        }}
      >
        <Header />
        <main style={{ padding: 24 }}>
          <p>Course not found.</p>
          <Link to="/courses">Back to courses</Link>
        </main>
        <Footer />
      </div>
    );

  return (
    <div
      style={{
        padding: 24,
        color: "#fff",
        background: "#1e1e2d",
        minHeight: "100vh",
      }}
    >
      <Header />
      <main
        style={{
          maxWidth: 900,
          margin: "24px auto",
          background: "#27293d",
          padding: 20,
          borderRadius: 8,
        }}
      >
        <h2>{course.title}</h2>
        <p>
          <strong>Subject:</strong> {course.subject}
        </p>
        <p>
          <strong>Level:</strong> {course.level}
        </p>
        <p>{course.description}</p>

        <h3>What you'll learn</h3>
        <ul>
          <li>Topic 1 — example learning outcome</li>
          <li>Topic 2 — example learning outcome</li>
          <li>Topic 3 — example learning outcome</li>
        </ul>

        <div style={{ marginTop: 12 }}>
          <Link to={`/courses/enroll/${id}`} style={{ marginRight: 12 }}>
            <button style={{ ...button, background: "#007bff" }}>
              Enroll Now
            </button>
          </Link>
          <Link to="/courses" style={{ color: "#9ecbff" }}>
            Back to courses
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
};

const button = {
  color: "#fff",
  padding: "10px 16px",
  border: "none",
  borderRadius: 6,
  cursor: "pointer",
};

export default CourseDetails;
