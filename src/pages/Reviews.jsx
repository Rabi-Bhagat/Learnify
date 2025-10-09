import React from "react";
// Import icons from Font Awesome
import {
  FaTachometerAlt,
  FaBook,
  FaChalkboardTeacher,
  FaEnvelope,
  FaStar,
  FaSignOutAlt,
  FaFacebook,
  FaLinkedin,
  FaTwitter,
  FaStarHalfAlt,
  FaRegStar,
} from "react-icons/fa";

// --- Mock Data ---
const reviewData = {
  overallRating: 4.7,
  totalReviews: 125,
  ratingBreakdown: [
    { label: "Excellent", percentage: 89 },
    { label: "Very good", percentage: 89 },
    { label: "Average", percentage: 15 },
    { label: "", percentage: 2 },
    { label: "Average", percentage: 15 },
  ],
  teachingStyle: [
    { label: "Teaching Style", score: 4.5 },
    { label: "Teaching Style", score: 4.7 },
    { label: "Teaching Style", score: 4.6 },
    { label: "Teaching Style", score: 4.5 },
  ],
  reviews: [
    {
      id: 1,
      name: "John Doe",
      rating: 5,
      text: "An amazing and very patient tutor. Learned so much in just a few sessions!",
    },
    {
      id: 2,
      name: "Jane Smith",
      rating: 4,
      text: "Great teaching style. Would recommend to anyone looking to learn Spanish.",
    },
  ],
};

// --- Reusable Layout Components ---
const Sidebar = () => (
  <aside style={styles.sidebar}>
    <div>
      <h2 style={{ textAlign: "center", marginBottom: "40px", color: "#fff" }}>
        Learnify
      </h2>
      <nav>
        <ul style={{ listStyle: "none", padding: 0 }}>
          <li style={styles.navItem}>
            <FaTachometerAlt /> <span style={styles.navText}>Dashboard</span>
          </li>
          <li style={styles.navItem}>
            <FaBook /> <span style={styles.navText}>Courses</span>
          </li>
          <li style={styles.navItem}>
            <FaChalkboardTeacher />{" "}
            <span style={styles.navText}>Live Class room</span>
          </li>
          <li style={styles.navItem}>
            <FaEnvelope /> <span style={styles.navText}>Messages</span>
          </li>
          <li style={styles.navItem}>
            <FaStar /> <span style={styles.navText}>Reviews</span>
          </li>
        </ul>
      </nav>
    </div>
    <button style={styles.logoutButton}>Log out</button>
  </aside>
);

const Header = () => (
  <header style={styles.header}>
    <input
      type="text"
      placeholder="Search your language partner..."
      style={styles.searchInput}
    />
    <div style={{ display: "flex", alignItems: "center" }}>
      <button style={styles.settingsButton}>Setting...</button>
      <div style={styles.avatar}>A</div>
    </div>
  </header>
);

const Footer = () => (
  <footer style={styles.footer}>
    <div>
      <a href="#" style={styles.footerLink}>
        Resources
      </a>
      <a href="#" style={styles.footerLink}>
        Legal
      </a>
    </div>
    <div>
      <a href="#" style={styles.footerLink}>
        <FaFacebook />
      </a>
      <a href="#" style={styles.footerLink}>
        <FaLinkedin />
      </a>
      <a href="#" style={styles.footerLink}>
        <FaTwitter />
      </a>
    </div>
  </footer>
);

// --- Page-Specific Components ---
const StarRating = ({ rating }) => {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    if (i <= rating) {
      stars.push(<FaStar key={i} color="#ffc107" />);
    } else if (i === Math.ceil(rating) && !Number.isInteger(rating)) {
      stars.push(<FaStarHalfAlt key={i} color="#ffc107" />);
    } else {
      stars.push(<FaRegStar key={i} color="#ffc107" />);
    }
  }
  return <div style={{ display: "flex", gap: "2px" }}>{stars}</div>;
};

const RatingBar = ({ label, percentage, score }) => (
  <div style={styles.ratingBarContainer}>
    <span style={styles.ratingBarLabel}>{label}</span>
    <div style={styles.progressBar}>
      <div
        style={{ ...styles.progress, width: `${percentage || score * 20}%` }}
      ></div>
    </div>
    <span style={styles.ratingBarValue}>{score || `${percentage}%`}</span>
  </div>
);

const ReviewsContent = () => (
  <main style={styles.mainContent}>
    <div style={styles.card}>
      <h3 style={styles.cardTitle}>Overall Rating</h3>
      <div style={styles.overallRating}>
        <span style={styles.ratingValue}>{reviewData.overallRating}</span>
        <div>
          <span style={styles.ratingText}>Excellent</span>
          <StarRating rating={reviewData.overallRating} />
        </div>
      </div>
      <div style={styles.breakdownContainer}>
        {/* Left Column */}
        <div>
          <RatingBar label="Excellent" percentage={89} />
          <RatingBar label="Average" percentage={15} />
          <RatingBar label="" percentage={2} />
          <hr style={styles.divider} />
          <RatingBar label="Teaching Style" score={4.5} />
          <RatingBar label="Teaching Style" score={4.6} />
        </div>
        {/* Right Column */}
        <div>
          <RatingBar label="Very good" percentage={89} />
          <RatingBar label="Average" percentage={15} />
          <hr style={styles.divider} />
          <RatingBar label="Teaching Style" score={4.7} />
          <RatingBar label="Teaching Style" score={4.5} />
        </div>
      </div>
    </div>
    <div style={styles.card}>
      <h3 style={styles.cardTitle}>Reviews:</h3>
      {reviewData.reviews.map((review) => (
        <div key={review.id} style={styles.reviewItem}>
          <div style={styles.reviewHeader}>
            <strong>{review.name}</strong>
            <StarRating rating={review.rating} />
          </div>
          <p style={styles.reviewText}>{review.text}</p>
        </div>
      ))}
    </div>
  </main>
);

// --- Main Page Component ---
const ReviewsPage = () => {
  return (
    <div style={styles.pageContainer}>
      <Sidebar />
      <div style={styles.mainWrapper}>
        <Header />
        <ReviewsContent />
        <Footer />
      </div>
    </div>
  );
};

// --- Styles ---
const styles = {
  pageContainer: {
    display: "flex",
    minHeight: "100vh",
    backgroundColor: "#1e1e2d",
    color: "#fff",
  },
  sidebar: {
    width: "250px",
    backgroundColor: "#27293d",
    padding: "20px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    borderRight: "1px solid #333",
  },
  navItem: {
    display: "flex",
    alignItems: "center",
    padding: "15px",
    cursor: "pointer",
    borderRadius: "8px",
    color: "#a9a9b2",
  },
  navText: { marginLeft: "15px" },
  logoutButton: {
    backgroundColor: "#444",
    border: "1px solid #555",
    color: "#ff4a55",
    padding: "10px",
    borderRadius: "8px",
    cursor: "pointer",
  },
  mainWrapper: { flex: 1, display: "flex", flexDirection: "column" },
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "15px 30px",
    backgroundColor: "#27293d",
    borderBottom: "1px solid #333",
  },
  searchInput: {
    border: "1px solid #4a4a6a",
    backgroundColor: "transparent",
    color: "#fff",
    padding: "10px 15px",
    borderRadius: "8px",
    width: "300px",
  },
  settingsButton: {
    background: "none",
    border: "1px solid #4a4a6a",
    color: "#fff",
    padding: "10px 15px",
    borderRadius: "8px",
    cursor: "pointer",
    margin: "0 20px",
  },
  avatar: {
    width: "40px",
    height: "40px",
    borderRadius: "50%",
    backgroundColor: "#4a4a6a",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontWeight: "bold",
  },
  mainContent: {
    flex: 1,
    padding: "20px",
    overflowY: "auto",
    display: "flex",
    flexDirection: "column",
    gap: "20px",
  },
  card: { backgroundColor: "#27293d", borderRadius: "10px", padding: "25px" },
  cardTitle: {
    margin: "0 0 20px 0",
    borderBottom: "1px solid #444",
    paddingBottom: "10px",
  },
  overallRating: {
    display: "flex",
    alignItems: "center",
    gap: "15px",
    marginBottom: "20px",
  },
  ratingValue: { fontSize: "3.5rem", fontWeight: "bold" },
  ratingText: { fontSize: "1.2rem", color: "#a9a9b2" },
  breakdownContainer: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "40px",
  },
  ratingBarContainer: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    marginBottom: "10px",
    fontSize: "0.9rem",
  },
  ratingBarLabel: { width: "80px", color: "#a9a9b2" },
  progressBar: {
    flex: 1,
    height: "8px",
    backgroundColor: "#1e1e2d",
    borderRadius: "4px",
    overflow: "hidden",
  },
  progress: { height: "100%", backgroundColor: "#007bff", borderRadius: "4px" },
  ratingBarValue: { width: "40px" },
  divider: { border: "none", borderTop: "1px solid #444", margin: "20px 0" },
  reviewItem: { borderBottom: "1px solid #444", padding: "15px 0" },
  reviewHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "5px",
  },
  reviewText: { color: "#a9a9b2", margin: 0, lineHeight: 1.6 },
  footer: {
    padding: "20px 30px",
    backgroundColor: "#27293d",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    borderTop: "1px solid #333",
  },
  footerLink: { color: "#999", textDecoration: "none", margin: "0 10px" },
};

export default ReviewsPage;
