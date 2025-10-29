import React from "react";
import { useParams, Link } from "react-router-dom";
import { coursesData } from "./Course";
import Header from "../components/Dashboard_header";
import Footer from "../components/Footer";

const Enroll = () => {
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
        <h2>Enroll: {course.title}</h2>
        <p>
          <strong>Subject:</strong> {course.subject}
        </p>
        <p>
          <strong>Level:</strong> {course.level}
        </p>
        <p>{course.description}</p>

        <h3>Enrollment</h3>
        <p>Fill details and confirm enrollment (demo):</p>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            alert("Enrolled in " + course.title);
          }}
        >
          <input placeholder="Full name" required style={inputStyle} />
          <input placeholder="Email" type="email" required style={inputStyle} />
          <button style={buttonStyle} type="submit">
            Confirm Enrollment
          </button>
        </form>

        <div style={{ marginTop: 12 }}>
          <Link to="/courses" style={{ color: "#9ecbff" }}>
            Back to courses
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
};

const inputStyle = {
  display: "block",
  width: "100%",
  padding: 10,
  marginBottom: 10,
  borderRadius: 6,
  border: "1px solid #3a3a5a",
  background: "#1e1e2d",
  color: "#fff",
};
const buttonStyle = {
  background: "#007bff",
  color: "#fff",
  padding: "10px 16px",
  border: "none",
  borderRadius: 6,
  cursor: "pointer",
};

export default Enroll;
