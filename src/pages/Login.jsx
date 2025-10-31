import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { FaEnvelope, FaLock } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import {
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { auth } from "../config/firebase";
import signinImage from "../assets/signin.png";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [inputCode, setInputCode] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleEmailLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      localStorage.setItem("userToken", await user.getIdToken());
      localStorage.setItem("userId", user.uid);
      navigate("/dashboard");
    } catch (err) {
      setError(err.message || "Failed to sign in");
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleLogin = async () => {
    setLoading(true);
    setError("");

    try {
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      localStorage.setItem("userToken", await user.getIdToken());
      localStorage.setItem("userId", user.uid);
      navigate("/dashboard");
    } catch (err) {
      setError(err.message || "Google sign-in failed");
    } finally {
      setLoading(false);
    }
  };

  // Demo OTP send - for production use backend/email provider
  const sendCodeToEmail = async () => {
    setError("");
    if (!email) {
      setError("Enter email first");
      return;
    }
    const code = Math.floor(100000 + Math.random() * 900000).toString();
    // Store OTP in sessionStorage for this demo (expires on browser close)
    sessionStorage.setItem(`loginOtp:${email}`, code);
    setOtpSent(true);

    // Try to copy to clipboard so developer/tester can paste (demo only)
    try {
      await navigator.clipboard.writeText(code);
      alert(
        "Verification code copied to clipboard (demo). In production send email."
      );
    } catch {
      // fallback: show code in alert for demo
      alert("Demo code: " + code);
    }
  };

  const verifyCodeAndLogin = (e) => {
    e.preventDefault();
    setError("");
    const stored = sessionStorage.getItem(`loginOtp:${email}`);
    if (!stored) {
      setError("No code found. Please send code again.");
      return;
    }
    if (inputCode.trim() !== stored) {
      setError("Invalid code");
      return;
    }
    // demo successful login: set demo token and redirect
    localStorage.setItem("userToken", "demo-otp-token");
    localStorage.setItem("userEmail", email);
    sessionStorage.removeItem(`loginOtp:${email}`);
    navigate("/dashboard");
  };

  return (
    <div style={styles.container}>
      <div style={styles.leftPanel}>
        <img src={signinImage} alt="illustration" style={styles.sideImage} />
      </div>

      <div style={styles.rightPanel}>
        <div style={styles.formContainer}>
          <h2 style={styles.title}>Welcome Back!</h2>

          {error && <div style={styles.error}>{error}</div>}

          {!otpSent ? (
            <form onSubmit={handleEmailLogin}>
              <div style={styles.inputGroup}>
                <label style={styles.label}>
                  <FaEnvelope style={styles.icon} /> Email
                </label>
                <div style={{ display: "flex", gap: 8 }}>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    style={styles.input}
                    required
                    disabled={loading}
                  />
                  <button
                    type="button"
                    onClick={sendCodeToEmail}
                    style={styles.codeButton}
                    disabled={loading}
                  >
                    Send Code
                  </button>
                </div>
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
                />
              </div>

              <button
                type="submit"
                style={styles.loginButton}
                disabled={loading}
              >
                {loading ? "Logging in..." : "Log In"}
              </button>
            </form>
          ) : (
            <form onSubmit={verifyCodeAndLogin}>
              <div style={styles.inputGroup}>
                <label style={styles.label}>
                  Enter 6-digit code sent to {email}
                </label>
                <input
                  value={inputCode}
                  onChange={(e) => setInputCode(e.target.value)}
                  style={styles.input}
                  required
                  maxLength={6}
                />
              </div>
              <div style={{ display: "flex", gap: 8 }}>
                <button type="submit" style={styles.loginButton}>
                  Verify & Continue
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setOtpSent(false);
                    setInputCode("");
                  }}
                  style={styles.secondaryButton}
                >
                  Back
                </button>
              </div>
            </form>
          )}

          <div style={styles.divider}>
            <div style={styles.line}></div>
            <span style={styles.dividerText}>or</span>
            <div style={styles.line}></div>
          </div>

          <button
            onClick={handleGoogleLogin}
            style={styles.googleSignIn}
            disabled={loading}
          >
            <FcGoogle size={24} />
            <span style={{ marginLeft: 8 }}>Continue with Google</span>
          </button>

          <p style={styles.signupText}>
            Don't have an account?{" "}
            <Link to="/signup" style={styles.signupLink}>
              Create one
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

// Minimal styles so login/signup pages render properly
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
  title: { marginBottom: 16 },
  inputGroup: { marginBottom: 12 },
  label: { display: "block", marginBottom: 6, color: "#cbd5e1" },
  input: {
    width: "100%",
    padding: 10,
    borderRadius: 6,
    border: "1px solid #334155",
    background: "#0b1220",
    color: "#fff",
  },
  icon: { marginRight: 8 },
  loginButton: {
    width: "100%",
    padding: 12,
    borderRadius: 6,
    background: "#0369a1",
    color: "#fff",
    border: "none",
    cursor: "pointer",
    marginTop: 8,
  },
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
    marginTop: 12,
    marginBottom: 12,
  },
  line: { flex: 1, height: 1, background: "#334155" },
  dividerText: { color: "#9ca3af" },
  signupText: { marginTop: 12, color: "#9ca3af" },
  signupLink: { color: "#93c5fd" },
  error: {
    backgroundColor: "rgba(255,0,0,0.06)",
    color: "#ff7b7b",
    padding: 8,
    borderRadius: 6,
    marginBottom: 12,
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

export default Login;
