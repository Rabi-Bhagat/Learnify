import React, { useState } from "react"; // 1. Import useState to manage the form
// Import icons from Font Awesome
import DashboardHeader from "../components/Dashboard_header";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
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

// --- Mock Data (now using useState to be updatable) ---
const initialReviewData = {
  overallRating: 4.7,
  totalReviews: 105,
  reviews: [
    {
      id: 1,
      name: "Aryan Jha",
      rating: 5,
      text: "An amazing knowledge in Ai/Ml as well as English!",
    },
    {
      id: 2,
      name: "Hirdent Rajbanshi",
      rating: 4,
      text: "he is the super teacher.",
    },
  ],
};

// --- Page-Specific Components ---
const StarRating = ({ rating }) => {
  const fullStars = Math.floor(rating);
  const hasHalf = rating % 1 >= 0.5;
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    if (i <= fullStars) {
      stars.push(<FaStar key={i} color="#ffc107" />);
    } else if (i === fullStars + 1 && hasHalf) {
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

// --- 2. Pass reviewData and the function to update it into the component ---
const ReviewsContent = ({ reviewData, setReviewData }) => {
  // 3. Create state for the new review input
  const [newReviewName, setNewReviewName] = useState("");
  const [newReviewRating, setNewReviewRating] = useState(5);
  const [newReviewText, setNewReviewText] = useState("");

  // 4. Handle form submission
  const handleReviewSubmit = (e) => {
    e.preventDefault();
    if (!newReviewName.trim() || !newReviewText.trim()) return; // Don't submit empty reviews

    const newReview = {
      id: Date.now(), // Unique ID
      name: newReviewName,
      rating: newReviewRating,
      text: newReviewText,
    };

    // Update the reviews list and total
    setReviewData((prev) => ({
      ...prev,
      totalReviews: prev.totalReviews + 1,
      reviews: [newReview, ...prev.reviews], // Add the new review to the top of the list
    }));

    // Clear the input fields
    setNewReviewName("");
    setNewReviewRating(5);
    setNewReviewText("");
  };

  return (
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
            <RatingBar label="Very good" percentage={15} />
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
      {/* --- ADDED REVIEW INPUT FIELD --- */}
      <div style={styles.card}>
        <h3 style={styles.cardTitle}>Leave a Review</h3>
        <form onSubmit={handleReviewSubmit}>
          <div style={styles.formGroup}>
            <label style={styles.label}>Name</label>
            <input
              type="text"
              placeholder="Your Name"
              value={newReviewName}
              onChange={(e) => setNewReviewName(e.target.value)}
              style={styles.input}
              required
            />
          </div>
          <div style={styles.formGroup}>
            <label style={styles.label}>Rating (1-5)</label>
            <input
              type="number"
              min="1"
              max="5"
              step="0.5"
              value={newReviewRating}
              onChange={(e) => setNewReviewRating(Number(e.target.value))}
              style={styles.input}
              required
            />
          </div>
          <div style={styles.formGroup}>
            <label style={styles.label}>Review</label>
            <textarea
              style={styles.reviewTextarea}
              placeholder="Write your review here..."
              value={newReviewText}
              onChange={(e) => setNewReviewText(e.target.value)}
              required
            ></textarea>
          </div>
          <button type="submit" style={styles.submitButton}>
            Submit Review
          </button>
        </form>
      </div>
      {/* --- ADDED REVIEWS DISPLAY --- */}
      <div style={styles.card}>
        <h3 style={styles.cardTitle}>
          Customer Reviews ({reviewData.totalReviews})
        </h3>
        {reviewData.reviews.map((review) => (
          <div key={review.id} style={styles.reviewItem}>
            <div style={styles.reviewHeader}>
              <span style={styles.reviewName}>{review.name}</span>
              <StarRating rating={review.rating} />
            </div>
            <p style={styles.reviewText}>{review.text}</p>
          </div>
        ))}
      </div>
    </main>
  );
};

// --- Main Page Component ---
const ReviewsPage = () => {
  // 5. Use useState to manage the review data so it can be updated
  const [reviewData, setReviewData] = useState(initialReviewData);

  return (
    <div style={styles.pageContainer}>
      <Sidebar />
      <div style={styles.mainWrapper}>
        <DashboardHeader />
        {/* 6. Pass the data and the setter function down to the content component */}
        <ReviewsContent reviewData={reviewData} setReviewData={setReviewData} />
        <Footer />
      </div>
    </div>
  );
};

const styles = {
  pageContainer: {
    display: "flex",
    minHeight: "100vh",
    backgroundColor: "#1e1e2d",
    color: "#fff",
  },
  mainWrapper: { flex: 1, display: "flex", flexDirection: "column" },
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
  reviewName: { fontWeight: "bold" },
  reviewText: { color: "#a9a9b2", margin: 0, lineHeight: 1.6 },
  // --- ADDED STYLES FOR THE NEW INPUT FIELD ---
  formGroup: {
    marginBottom: "15px",
  },
  label: {
    display: "block",
    marginBottom: "5px",
    color: "#a9a9b2",
    fontSize: "0.9rem",
  },
  input: {
    width: "100%",
    height: "40px",
    backgroundColor: "#1e1e2d",
    border: "1px solid #4a4a6a",
    borderRadius: "8px",
    padding: "10px",
    color: "#fff",
    fontSize: "1rem",
  },
  reviewTextarea: {
    width: "100%",
    minHeight: "100px",
    backgroundColor: "#1e1e2d",
    border: "1px solid #4a4a6a",
    borderRadius: "8px",
    padding: "10px",
    color: "#fff",
    fontSize: "1rem",
    resize: "vertical",
  },
  submitButton: {
    backgroundColor: "#6a0dad",
    color: "white",
    border: "none",
    padding: "10px 20px",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "1rem",
    fontWeight: "bold",
  },
};

export default ReviewsPage;
