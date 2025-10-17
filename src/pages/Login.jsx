import React, { useState, useEffect } from "react";
import { FcGoogle } from "react-icons/fc";
import { FaEnvelope, FaLock } from "react-icons/fa"; // Using more standard login icons
import { Link } from "react-router-dom"; // To link to the signup page
import signinImage from "../assets/signin.png";

// Custom hook to check screen width for responsiveness
const useWindowWidth = () => {
  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return width;
};

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const width = useWindowWidth();
  const isMobile = width < 768;

  const handleLogin = (e) => {
    e.preventDefault();
    console.log({ email, password });
  };

  return (
    <div style={styles.container}>
      {/* Left decorative panel (hidden on mobile) */}
      {!isMobile && (
        <div style={styles.leftPanel}>
          <img src={signinImage} alt="Decorative Art" style={styles.image} />
        </div>
      )}

      {/* Right login form panel */}
      <div style={styles.rightPanel}>
        <div style={styles.formContainer}>
          <h2 style={styles.title}>Welcome Back!</h2>
          <form onSubmit={handleLogin}>
            <div style={styles.inputGroup}>
              <label style={styles.label}>
                <FaEnvelope style={styles.icon} /> Email
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                style={styles.input}
                required
              />
            </div>
            <div style={styles.inputGroup}>
              <label style={styles.label}>
                <FaLock style={styles.icon} /> Password
              </label>
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                style={styles.input}
                required
              />
            </div>
            <button type="submit" style={styles.loginButton}>
              Log In
            </button>
          </form>

          {/* --- This is the new section you requested --- */}
          <div style={styles.divider}>
            <div style={styles.line}></div>
            <span style={styles.dividerText}>or</span>
            <div style={styles.line}></div>
          </div>

          <button style={styles.googleSignIn}>
            <FcGoogle size={24} />
            <span>Continue with Google</span>
          </button>

          <p style={styles.signupText}>
            Don't have an account?{" "}
            <Link to="/signup" style={styles.signupLink}>
              Create one
            </Link>
          </p>
          {/* --- End of new section --- */}
        </div>
      </div>
    </div>
  );
};

// Updated and improved styles
const styles = {
  container: { display: "flex", width: "100%", minHeight: "100vh" },
  leftPanel: { flex: 1, display: "flex" },
  image: { width: "100%", height: "100%", objectFit: "cover" },
  rightPanel: {
    flex: 1,
    backgroundColor: "#1e1e2d",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "20px",
  },
  formContainer: {
    width: "100%",
    maxWidth: "400px",
    backgroundColor: "rgba(0, 0, 0, 0.2)",
    padding: "40px",
    borderRadius: "10px",
  },
  title: {
    color: "white",
    textAlign: "center",
    marginBottom: "30px",
    fontSize: "2rem",
  },
  inputGroup: { marginBottom: "20px" },
  label: {
    display: "flex",
    alignItems: "center",
    color: "#a9a9b2",
    marginBottom: "8px",
    fontSize: "0.9rem",
  },
  icon: { marginRight: "10px" },
  input: {
    width: "100%",
    padding: "14px",
    backgroundColor: "#27293d",
    border: "1px solid #4a4a6a",
    borderRadius: "8px",
    fontSize: "1rem",
    color: "white",
  },
  loginButton: {
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
  },
  divider: { display: "flex", alignItems: "center", margin: "25px 0" },
  line: { flex: 1, height: "1px", backgroundColor: "#4a4a6a" },
  dividerText: { margin: "0 15px", color: "#a9a9b2", fontSize: "0.9rem" },
  googleSignIn: {
    width: "100%",
    padding: "15px",
    backgroundColor: "#fff",
    color: "#333",
    border: "1px solid #ddd",
    borderRadius: "8px",
    fontSize: "1rem",
    cursor: "pointer",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "10px",
  },
  signupText: {
    color: "#a9a9b2",
    textAlign: "center",
    marginTop: "20px",
    fontSize: "0.9rem",
  },
  signupLink: { color: "#007bff", fontWeight: "bold", textDecoration: "none" },
};

export default Login;
