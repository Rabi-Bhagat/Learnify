import React, { useState, useEffect } from "react";
import { FaUser, FaEnvelope, FaLock } from "react-icons/fa";
import { Link } from "react-router-dom"; // Import Link for navigation
import signinImage from "../assets/signin.png";

// Custom hook to get the current window width
const useWindowWidth = () => {
  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return width;
};

const Signup = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const width = useWindowWidth(); // Get the current window width

  // Determine if we are on a mobile screen (you can adjust this breakpoint)
  const isMobile = width < 768;

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Signup attempt with:", { username, email, password });
  };

  return (
    <div style={styles.container}>
      {/* --- Left Panel --- */}
      {/* This panel will now disappear if the screen is mobile size */}
      {!isMobile && (
        <div style={styles.leftPanel}>
          <img
            src={signinImage}
            alt="Language Community Art"
            style={styles.image}
          />
        </div>
      )}

      {/* --- Right Panel (Form) --- */}
      <div style={styles.rightPanel}>
        <div style={styles.formContainer}>
          <h2 style={styles.title}>Create Your Account</h2>
          <form onSubmit={handleSubmit}>
            <div style={styles.inputGroup}>
              <label style={styles.label}>
                <FaUser style={styles.icon} />
                Username
              </label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                style={styles.input}
                required
              />
            </div>

            <div style={styles.inputGroup}>
              <label style={styles.label}>
                <FaEnvelope style={styles.icon} />
                Email
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                style={styles.input}
                required
              />
            </div>

            <div style={styles.inputGroup}>
              <label style={styles.label}>
                <FaLock style={styles.icon} />
                Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                style={styles.input}
                required
              />
            </div>

            <button type="submit" style={styles.signupButton}>
              Sign Up
            </button>
          </form>

          {/* Changed to a Link component for proper navigation */}
          <p style={styles.signInText}>
            Already have an account?{" "}
            <Link to="/login" style={styles.signInLink}>
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

// --- Styles ---
// These styles will now create a responsive layout
const styles = {
  container: {
    display: "flex",
    minHeight: "100vh",
    width: "100%",
    backgroundColor: "#1e1e2d", // Dark background for mobile
  },
  leftPanel: {
    flex: 1, // This makes the panel take up exactly half the space
    backgroundColor: "#f0f2f5",
  },
  image: {
    width: "100%",
    height: "100%",
    objectFit: "cover", // Ensures the image covers the panel without distortion
  },
  rightPanel: {
    flex: 1, // This makes the panel take up the other half of the space
    backgroundColor: "#1e1e2d",
    display: "flex",
    justifyContent: "center",
    // --- CHANGE 1: Adjusted alignment to move the form higher ---
    alignItems: "flex-start", // Aligns the form to the top of the container
    paddingTop: "15vh", // Adds padding from the top to push it down slightly
    paddingLeft: "20px",
    paddingRight: "20px",
    paddingBottom: "20px",
  },
  formContainer: {
    width: "100%",
    // --- CHANGE 2: Slightly increased max-width for better proportions ---
    maxWidth: "420px",
    backgroundColor: "rgba(0, 0, 0, 0.2)", // Added a subtle background to the form
    padding: "40px",
    borderRadius: "10px",
  },
  title: {
    color: "white",
    textAlign: "center",
    marginBottom: "30px",
    fontSize: "2rem",
  },
  inputGroup: {
    marginBottom: "20px",
  },
  label: {
    display: "flex",
    alignItems: "center",
    color: "#a9a9b2",
    marginBottom: "8px",
    fontSize: "0.9rem",
  },
  icon: {
    marginRight: "10px",
  },
  input: {
    width: "100%",
    padding: "14px",
    backgroundColor: "#27293d",
    border: "1px solid #4a4a6a",
    borderRadius: "8px",
    fontSize: "1rem",
    color: "white",
  },
  signupButton: {
    width: "100%",
    padding: "15px",
    backgroundColor: "#6a0dad",
    color: "white",
    border: "none",
    borderRadius: "8px",
    fontSize: "1.1rem",
    fontWeight: "bold",
    cursor: "pointer",
    marginTop: "10px",
    transition: "background-color 0.3s", // Added a hover effect
  },
  signInText: {
    color: "#a9a9b2",
    textAlign: "center",
    marginTop: "20px",
    fontSize: "0.9rem",
  },
  signInLink: {
    color: "#007bff",
    fontWeight: "bold",
    textDecoration: "none",
  },
};

export default Signup;
