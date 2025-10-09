import React, { useState } from "react";
// Importing icons from the 'Font Awesome' set in react-icons
import { FaUser, FaEnvelope, FaLock } from "react-icons/fa";

const Signup = () => {
  // State to manage the input fields
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // A function to handle what happens when the form is submitted
  const handleSubmit = (event) => {
    event.preventDefault(); // This stops the page from reloading
    console.log("Login attempt with:", { username, email, password });
    // Here you would typically add your logic to authenticate the user
  };

  return (
    <div style={styles.container}>
      {/* Left panel with the decorative image */}
      <div style={styles.leftPanel}>
        <img
          src="/login-art.jpg"
          alt="Language Community Art"
          style={styles.image}
        />
      </div>

      {/* Right panel with the login form */}
      <div style={styles.rightPanel}>
        <div style={styles.formContainer}>
          <form onSubmit={handleSubmit}>
            {/* Username Input Group */}
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
              />
            </div>

            {/* Email Input Group */}
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
              />
            </div>

            {/* Password Input Group */}
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
              />
            </div>

            <button type="submit" style={styles.loginButton}>
              Log in
            </button>
          </form>

          <p style={styles.signInLink}>Sign in</p>
        </div>
      </div>
    </div>
  );
};

// All the styles are collected in this object for better organization
const styles = {
  container: {
    display: "flex",
    minHeight: "100vh",
    width: "100%",
  },
  leftPanel: {
    flex: 1,
    backgroundColor: "#f0f2f5", // A fallback color
  },
  image: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
  rightPanel: {
    flex: 1,
    backgroundColor: "black",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  formContainer: {
    width: "100%",
    maxWidth: "350px",
    padding: "20px",
  },
  inputGroup: {
    marginBottom: "25px",
  },
  label: {
    display: "flex",
    alignItems: "center",
    color: "white",
    marginBottom: "8px",
    fontSize: "1rem",
  },
  icon: {
    marginRight: "10px",
  },
  input: {
    width: "100%",
    padding: "12px",
    backgroundColor: "#e0e0e0",
    border: "none",
    borderRadius: "4px",
    fontSize: "1rem",
    boxSizing: "border-box",
  },
  loginButton: {
    width: "100%",
    padding: "15px",
    backgroundColor: "#e0e0e0",
    border: "none",
    borderRadius: "4px",
    fontSize: "1.2rem",
    fontWeight: "bold",
    cursor: "pointer",
    marginTop: "10px",
  },
  signInLink: {
    color: "#ff0000", // Red color for the link
    textAlign: "center",
    marginTop: "20px",
    cursor: "pointer",
    fontSize: "0.9rem",
  },
};

export default Signup;
