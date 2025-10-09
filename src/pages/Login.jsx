import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { FaCamera } from "react-icons/fa";

const Login = () => {
  // State to hold the values of the input fields
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [language, setLanguage] = useState("");

  // Handler for form submission
  const handleLogin = (e) => {
    e.preventDefault(); // Prevents the page from reloading
    console.log({
      fullName,
      email,
      password,
      language,
    });
    // Add your login logic here
  };

  return (
    <div style={styles.container}>
      {/* Left decorative panel */}
      <div style={styles.leftPanel}>
        <img src="/signin.png" alt="Decorative Art" style={styles.image} />
      </div>

      {/* Right login form panel */}
      <div style={styles.rightPanel}>
        <form onSubmit={handleLogin} style={styles.form}>
          <input
            type="text"
            placeholder="Enter your full name.."
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            style={styles.input}
          />
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={styles.input}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={styles.input}
          />
          <div style={styles.inputWithIcon}>
            <FaCamera style={styles.icon} />
            <input
              type="text"
              placeholder="Choose your Language.."
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
              style={{ ...styles.input, paddingLeft: "40px", width: "100%" }}
            />
          </div>

          <button type="submit" style={styles.loginButton}>
            Log in
          </button>
        </form>

        <div style={styles.googleSignIn}>
          <FcGoogle size={30} />
        </div>
      </div>
    </div>
  );
};

// CSS styles are organized in a single object for clarity
const styles = {
  container: {
    display: "flex",
    width: "100%",
    minHeight: "100vh",
  },
  leftPanel: {
    flex: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f0f2f5", // A light grey background
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
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: "40px",
  },
  form: {
    width: "100%",
    maxWidth: "350px",
    display: "flex",
    flexDirection: "column",
  },
  input: {
    backgroundColor: "#e0e0e0", // Light grey input background
    border: "none",
    borderRadius: "5px",
    padding: "15px",
    marginBottom: "20px",
    fontSize: "1rem",
    width: "100%",
    boxSizing: "border-box", // Ensures padding doesn't affect width
  },
  inputWithIcon: {
    position: "relative",
    display: "flex",
    alignItems: "center",
    marginBottom: "20px",
  },
  icon: {
    position: "absolute",
    left: "15px",
    color: "#555",
  },
  loginButton: {
    backgroundColor: "#e0e0e0",
    border: "none",
    borderRadius: "5px",
    padding: "15px",
    fontSize: "1.2rem",
    fontWeight: "bold",
    cursor: "pointer",
    marginBottom: "30px",
  },
  googleSignIn: {
    cursor: "pointer",
  },
};

export default Login;
