import React, { useState } from "react";
import { FaUser, FaEnvelope, FaLock } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../config/firebase";
import signinImage from "../assets/signin.png"; // Make sure this path is correct

const Signup = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (password.length < 6) {
      setError("Password must be at least 6 characters long.");
      return;
    }

    setLoading(true);
    setError("");

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;

      // Update the user's display name
      await updateProfile(user, {
        displayName: username,
      });

      // Store user info
      localStorage.setItem("userToken", await user.getIdToken());
      localStorage.setItem("userId", user.uid);

      // Redirect to dashboard
      navigate("/dashboard");
    } catch (error) {
      // Provide user-friendly error messages
      if (error.code === "auth/email-already-in-use") {
        setError("This email address is already in use.");
      } else if (error.code === "auth/invalid-email") {
        setError("Please enter a valid email address.");
      } else {
        setError("Failed to create an account. Please try again.");
      }
      console.error("Firebase signup error:", error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={styles.container}>
      {/* Left Panel with Image */}
      <div style={styles.leftPanel}>
        <img src={signinImage} alt="Illustration" style={styles.sideImage} />
      </div>

      {/* Right Panel with Form */}
      <div style={styles.rightPanel}>
        <div style={styles.formContainer}>
          <h2 style={styles.title}>Create Your Account</h2>

          {error && <div style={styles.error}>{error}</div>}

          <form onSubmit={handleSubmit}>
            <div style={styles.inputGroup}>
              <label style={styles.label}>
                <FaUser style={styles.icon} /> Username
              </label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                style={styles.input}
                required
                disabled={loading}
              />
            </div>

            <div style={styles.inputGroup}>
              <label style={styles.label}>
                <FaEnvelope style={styles.icon} /> Email
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                style={styles.input}
                required
                disabled={loading}
              />
            </div>

            <div style={styles.inputGroup}>
              <label style={styles.label}>
                <FaLock style={styles.icon} /> Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                style={styles.input}
                required
                disabled={loading}
                minLength="6"
              />
            </div>

            <button
              type="submit"
              style={styles.signupButton} // Using the new style
              disabled={loading}
            >
              {loading ? "Creating Account..." : "Sign Up"}
            </button>
          </form>

          {/* Use styles from the Login.jsx styles object */}
          <p style={styles.signupText}>
            Already have an account?{" "}
            <Link to="/login" style={styles.signupLink}>
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

// Styles from your Login.jsx file, with 'signupButton' added
const styles = {
  container: { display: "flex", minHeight: "100vh", background: "#0f1724" },
  leftPanel: {
    flex: 1,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: 40,
  },
  sideImage: { maxWidth: "90%", borderRadius: 12 },
  rightPanel: {
    width: 520,
    padding: 40,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  formContainer: {
    width: "100%",
    background: "#111827",
    padding: 28,
    borderRadius: 8,
    color: "#fff",
  },
  title: { marginBottom: 16, textAlign: "center", color: "#e5e7eb" },
  inputGroup: { marginBottom: 16 }, // Increased margin
  label: {
    display: "flex", // Use flex to align icon and text
    alignItems: "center",
    marginBottom: 8, // Increased margin
    color: "#cbd5e1",
    fontSize: "0.9rem",
  },
  input: {
    width: "100%",
    padding: 12, // Increased padding
    borderRadius: 6,
    border: "1px solid #334155",
    background: "#0b1220",
    color: "#fff",
    fontSize: "1rem",
  },
  icon: { marginRight: 8, color: "#9ca3af" }, // Added icon color

  // Added signupButton style (identical to loginButton)
  signupButton: {
    width: "100%",
    padding: 12,
    borderRadius: 6,
    background: "#0369a1",
    color: "#fff",
    border: "none",
    cursor: "pointer",
    marginTop: 8,
    fontSize: "1rem",
    fontWeight: "600",
  },

  // Re-using styles from Login.jsx
  googleSignIn: {
    width: "100%",
    padding: 10,
    borderRadius: 6,
    background: "#fff",
    color: "#000",
    border: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
    marginTop: 12,
  },
  divider: {
    display: "flex",
    alignItems: "center",
    gap: 8,
    marginTop: 16,
    marginBottom: 16,
  },
  line: { flex: 1, height: 1, background: "#334155" },
  dividerText: { color: "#9ca3af" },
  signupText: { marginTop: 16, color: "#9ca3af", textAlign: "center" },
  signupLink: { color: "#93c5fd", textDecoration: "none" },
  error: {
    backgroundColor: "rgba(255,0,0,0.06)",
    color: "#ff7b7b",
    padding: 10,
    borderRadius: 6,
    marginBottom: 12,
    textAlign: "center",
  },
  codeButton: {
    padding: "8px 12px",
    borderRadius: 6,
    background: "#065f46",
    color: "#fff",
    border: "none",
    cursor: "pointer",
  },
  secondaryButton: {
    padding: "10px 12px",
    borderRadius: 6,
    background: "transparent",
    color: "#fff",
    border: "1px solid #334155",
    cursor: "pointer",
  },
};

export default Signup;
