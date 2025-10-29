// src/components/Selectthisplan.jsx

import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const pricingPlans = [
  {
    title: "Basic Learner",
    price: "$9.99/month",
    description:
      "Perfect for beginners starting their language learning journey. This plan includes bite-sized lessons, fundamentals, pronunciation drills and weekly quizzes.",
    videos: [
      {
        title: "Welcome to Basic Learning",
        description:
          "A short orientation explaining how to use the learning dashboard, track progress, and best practices.",
        file: "basic-welcome.mp4",
      },
      {
        title: "How to Use Basic Features",
        description:
          "Walkthrough of the Basic plan features: exercises, flashcards and practice sessions.",
        file: "basic-features.mp4",
      },
    ],
  },
  {
    title: "Pro Learner",
    price: "$19.99/month",
    description:
      "Advanced features targeted at faster progress: longer lessons, real-time feedback and extra practice sets.",
    videos: [
      {
        title: "Pro Features Overview",
        description: "Overview of premium features available on Pro plan.",
        file: "pro-overview.mp4",
      },
      {
        title: "Advanced Learning Techniques",
        description:
          "Study strategies, spaced repetition tips and speaking practice routines.",
        file: "pro-techniques.mp4",
      },
    ],
  },
  {
    title: "Premium Learner",
    price: "$29.99/month",
    description:
      "Complete access to everything including one-on-one tutoring, exclusive content and certificates.",
    videos: [
      {
        title: "Premium Experience",
        description:
          "What you get with Premium: tutoring, live classes and dedicated resources.",
        file: "premium-experience.mp4",
      },
      {
        title: "One-on-One Tutoring",
        description:
          "How to book a tutor, prepare and make the most of sessions.",
        file: "premium-tutoring.mp4",
      },
    ],
  },
];

const extractAmount = (priceStr) => {
  if (!priceStr) return "0";
  const match = priceStr.match(/[\d.]+/);
  return match ? match[0] : "0";
};

const Selectthisplan = () => {
  const { id } = useParams();
  const planIndex = Number(id);
  const plan = pricingPlans[planIndex] || pricingPlans[0];

  // videosState holds plan videos + any uploaded/added videos in-session
  const [videos, setVideos] = useState(plan.videos || []);
  const [newVideoTitle, setNewVideoTitle] = useState("");
  const [newVideoFileName, setNewVideoFileName] = useState("");

  // UPI payment state
  const [upiId, setUpiId] = useState("merchant@upi");
  const [upiName, setUpiName] = useState("Learnify");
  const [amount, setAmount] = useState(extractAmount(plan.price));
  const [showQr, setShowQr] = useState(false);
  const [upiDeepLink, setUpiDeepLink] = useState("");

  useEffect(() => {
    // reset when plan changes
    setVideos(plan.videos || []);
    setAmount(extractAmount(plan.price));
    setShowQr(false);
  }, [id]);

  const handleAddVideoByFilename = (e) => {
    e.preventDefault();
    if (!newVideoTitle || !newVideoFileName) return;
    // Expect video files placed in public/videos folder, accessible as /videos/<filename>
    setVideos((prev) => [
      ...prev,
      {
        title: newVideoTitle,
        description: "Added from project videos folder",
        file: newVideoFileName,
      },
    ]);
    setNewVideoTitle("");
    setNewVideoFileName("");
  };

  const generateUpi = () => {
    // UPI deep link format
    const upi = `upi://pay?pa=${encodeURIComponent(
      upiId
    )}&pn=${encodeURIComponent(upiName)}&am=${encodeURIComponent(
      amount
    )}&cu=INR&tn=${encodeURIComponent(`${plan.title} subscription`)}`;
    setUpiDeepLink(upi);
    setShowQr(true);
  };

  const handleCopyUpi = async () => {
    try {
      await navigator.clipboard.writeText(upiDeepLink);
      alert("UPI link copied to clipboard");
    } catch {
      alert("Cannot copy automatically — copy manually: " + upiDeepLink);
    }
  };

  const handleSimulatePayment = (e) => {
    e.preventDefault();
    generateUpi();
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.header}>{plan.title}</h1>
      <p style={styles.price}>{plan.price}</p>

      <div style={styles.content}>
        <div style={styles.videoSection}>
          <h2>Plan Overview</h2>
          <p style={styles.description}>{plan.description}</p>

          <h3 style={{ marginTop: "1.5rem" }}>Videos & Descriptions</h3>
          <p style={{ color: "#a8a8b3" }}>
            Videos listed below can be played directly. Put static files in
            public/videos and add by filename (e.g. basic-welcome.mp4).
          </p>

          <div style={styles.videoGrid}>
            {videos.map((video, index) => (
              <div key={index} style={styles.videoCard}>
                <div style={styles.videoPlayer}>
                  {video.file ? (
                    // static video from public/videos/<file>
                    <video
                      controls
                      width="100%"
                      style={{ borderRadius: 8 }}
                      src={
                        video.file.startsWith("http") ||
                        video.file.startsWith("/")
                          ? video.file
                          : `/videos/${video.file}`
                      }
                    />
                  ) : video.url ? (
                    <video
                      controls
                      width="100%"
                      style={{ borderRadius: 8 }}
                      src={video.url}
                    />
                  ) : (
                    <div style={styles.videoPlaceholder}>No preview</div>
                  )}
                </div>
                <h3 style={{ marginTop: 10 }}>{video.title}</h3>
                <p style={{ color: "#cfcfd9" }}>{video.description}</p>
              </div>
            ))}
          </div>

          <div style={{ marginTop: 20, display: "grid", gap: 12 }}>
            <form
              onSubmit={handleAddVideoByFilename}
              style={{ display: "flex", gap: 8 }}
            >
              <input
                style={styles.input}
                placeholder="Video title"
                value={newVideoTitle}
                onChange={(e) => setNewVideoTitle(e.target.value)}
              />
              <input
                style={styles.input}
                placeholder="Filename in public/videos (e.g. basic-welcome.mp4)"
                value={newVideoFileName}
                onChange={(e) => setNewVideoFileName(e.target.value)}
              />
              <button style={styles.smallButton} type="submit">
                Add from folder
              </button>
            </form>
          </div>
        </div>

        <div style={styles.purchaseSection}>
          <div style={styles.purchaseCard}>
            <h2>Pay via UPI</h2>
            <p style={{ color: "#cfcfd9" }}>
              Instant UPI payment — generate QR or use the deep link.
            </p>

            <form style={styles.form} onSubmit={handleSimulatePayment}>
              <label style={styles.label}>UPI ID</label>
              <input
                value={upiId}
                onChange={(e) => setUpiId(e.target.value)}
                style={styles.input}
              />

              <label style={styles.label}>Payee Name</label>
              <input
                value={upiName}
                onChange={(e) => setUpiName(e.target.value)}
                style={styles.input}
              />

              <label style={styles.label}>Amount (INR)</label>
              <input
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                style={styles.input}
              />

              <button style={styles.purchaseButton} type="submit">
                Generate UPI QR & Link
              </button>
            </form>

            {showQr && (
              <div style={{ marginTop: 16, textAlign: "center" }}>
                <h4>Scan QR to pay</h4>
                {/* Google chart QR generator (public). Replace with your own QR generator if needed. */}
                <img
                  alt="UPI QR"
                  src={`https://chart.googleapis.com/chart?chs=300x300&cht=qr&chl=${encodeURIComponent(
                    upiDeepLink
                  )}`}
                  style={{
                    width: 220,
                    height: 220,
                    background: "#fff",
                    borderRadius: 8,
                  }}
                />
                <div
                  style={{
                    marginTop: 8,
                    display: "flex",
                    gap: 8,
                    justifyContent: "center",
                  }}
                >
                  <button style={styles.smallButton} onClick={handleCopyUpi}>
                    Copy link
                  </button>
                  <a
                    style={{
                      ...styles.smallButton,
                      textDecoration: "none",
                      display: "inline-block",
                      textAlign: "center",
                    }}
                    href={upiDeepLink}
                    onClick={(e) => {
                      // Some browsers won't open upi:// directly from web — keep behavior but prevent default when needed
                      // Let the anchor attempt to open; fallback is copying link.
                    }}
                  >
                    Open UPI app
                  </a>
                </div>

                <p style={{ color: "#a8a8b3", marginTop: 8 }}>
                  After scanning or opening the link in a UPI app, complete
                  payment to confirm subscription. This demo does not verify
                  payment server-side.
                </p>
              </div>
            )}
          </div>

          <div style={{ marginTop: 16, ...styles.purchaseCard }}>
            <h3>Manual Instructions</h3>
            <ol style={{ color: "#cfcfd9" }}>
              <li>Scan the QR code with your UPI app or copy the UPI link.</li>
              <li>
                Complete payment in your UPI app with the provided amount.
              </li>
              <li>
                Return to the app. Implement server-side verification
                (webhook/UPI ID & txn id) to confirm payment in production.
              </li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    padding: "2rem",
    backgroundColor: "#1e1e2d",
    color: "#fff",
    minHeight: "100vh",
  },
  header: {
    textAlign: "center",
    color: "#007bff",
    marginBottom: "0.5rem",
  },
  price: {
    textAlign: "center",
    fontSize: "1.5rem",
    color: "#fff",
    marginBottom: "2rem",
  },
  content: {
    display: "grid",
    gridTemplateColumns: "2fr 1fr",
    gap: "2rem",
    maxWidth: "1400px",
    margin: "0 auto",
  },
  videoSection: {
    backgroundColor: "#27293d",
    borderRadius: "10px",
    padding: "2rem",
  },
  description: {
    color: "#a8a8b3",
    marginBottom: "2rem",
  },
  videoGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
    gap: "1.5rem",
  },
  videoCard: {
    backgroundColor: "#1e1e2d",
    borderRadius: "8px",
    padding: "1rem",
  },
  videoPlayer: {
    backgroundColor: "#27293d",
    borderRadius: 8,
    overflow: "hidden",
  },
  videoPlaceholder: {
    backgroundColor: "#27293d",
    height: "180px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "8px",
    marginBottom: "1rem",
  },
  purchaseSection: {
    position: "sticky",
    top: "2rem",
    display: "flex",
    flexDirection: "column",
    gap: 12,
  },
  purchaseCard: {
    backgroundColor: "#27293d",
    borderRadius: "10px",
    padding: "1.25rem",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "0.5rem",
    marginTop: "1rem",
  },
  label: {
    color: "#cfcfd9",
    fontSize: 12,
  },
  input: {
    padding: "10px",
    borderRadius: "6px",
    border: "1px solid #3a3a5a",
    backgroundColor: "#1e1e2d",
    color: "#fff",
    width: "100%",
  },
  smallButton: {
    backgroundColor: "#007bff",
    color: "#fff",
    border: "none",
    padding: "8px 12px",
    borderRadius: "6px",
    cursor: "pointer",
  },
  purchaseButton: {
    backgroundColor: "#007bff",
    color: "#fff",
    border: "none",
    padding: "12px",
    borderRadius: "6px",
    cursor: "pointer",
    fontSize: "1rem",
    marginTop: "0.5rem",
  },
};
export default Selectthisplan;
