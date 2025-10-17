import React, { useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";

// Import images for the other participants
import mainUserImage from "../assets/e.jpg";
import user2Image from "../assets/a.jpg";
import user3Image from "../assets/b.jpg";
import user4Image from "../assets/c.jpg";
import user5Image from "../assets/g.jpg";

// Importing icons from Font Awesome
import {
  FaMicrophoneSlash,
  FaVideoSlash,
  FaDesktop,
  FaHandPaper,
  FaPhoneSlash,
  FaPlus,
  FaFacebook,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";

// --- SOURCE 2: Create a list of your other participants ---
const otherParticipants = [
  { id: 2, image: user2Image },
  { id: 3, image: user3Image },
  { id: 4, image: user4Image },
  { id: 5, image: user5Image },
];

// --- Reusable Components ---

// Header Component
const Header = () => (
  <header style={styles.header}>
    <nav style={styles.nav}>
      <Link to="/Dashboard" style={styles.navLink}>
        Home
      </Link>
      <Link to="/Contact" style={styles.navLink}>
        Contact
      </Link>
      <Link to="/about" style={styles.navLink}>
        About
      </Link>
    </nav>
    <button style={styles.joinButton}>Join</button>
  </header>
);

// Video Participant Tile
const VideoParticipant = ({ isMain = false, imageSrc }) => (
  <div style={isMain ? styles.mainVideo : styles.thumbnailVideo}>
    <img
      // This will now use the specific image source passed to it
      src={imageSrc}
      style={{
        width: "100%",
        height: "100%",
        objectFit: "cover",
        borderRadius: "8px",
      }}
      alt="participant"
    />
  </div>
);

const ControlBar = () => (
  <div style={styles.controlBar}>
    <button style={styles.controlButton}>
      <FaMicrophoneSlash /> Mute
    </button>
    <button style={styles.controlButton}>
      <FaVideoSlash /> Video Off
    </button>
    <button style={styles.controlButton}>
      <FaDesktop /> Screen Share
    </button>
    <button style={styles.controlButton}>
      <FaHandPaper /> Raise Hand
    </button>
    <button style={{ ...styles.controlButton, ...styles.endCallButton }}>
      <FaPhoneSlash /> End Call
    </button>
  </div>
);

// Chat Panel
const ChatPanel = () => {
  const [messages, setMessages] = useState([
    { id: 1, text: "hi!!", user: "self" },
  ]);
  const [newMessage, setNewMessage] = useState("");

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (newMessage.trim() === "") return;

    const newMsgObject = {
      id: messages.length + 1,
      text: newMessage,
      user: "self", // In a real app, this would be dynamic
    };

    setMessages([...messages, newMsgObject]);
    setNewMessage("");
  };

  return (
    <div style={styles.chatPanel}>
      <h3 style={styles.chatHeader}>Chat</h3>
      <div style={styles.chatMessages}>
        {messages.map((msg) => (
          <div key={msg.id} style={styles.messageWrapper}>
            <span style={styles.messageBubble}>{msg.text}</span>
            <div style={styles.avatar}></div>
          </div>
        ))}
      </div>
      <form onSubmit={handleSendMessage} style={styles.chatInputArea}>
        <button type="button" style={styles.plusButton}>
          <FaPlus />
        </button>
        <input
          type="text"
          style={styles.chatInput}
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          placeholder="Type a message..."
        />
        <button type="submit" style={styles.sendButton}>
          Send
        </button>
      </form>
    </div>
  );
};

// --- Main Page Component ---
const LiveClass = () => {
  return (
    <div style={styles.pageContainer}>
      <Header />
      <main style={styles.mainContent}>
        {/* Left Panel: Video Conference Area */}
        <div style={styles.videoPanel}>
          {/* SOURCE 3: The main participant uses their specific image */}
          <VideoParticipant isMain={true} imageSrc={mainUserImage} />
          <div style={styles.thumbnailContainer}>
            {/* Generating 4 unique participants from your list */}
            {otherParticipants.map((p) => (
              <VideoParticipant key={p.id} imageSrc={p.image} />
            ))}
          </div>
          <ControlBar />
        </div>

        {/* Right Panel: Chat Area */}
        <ChatPanel />
      </main>
      <Footer />
    </div>
  );
};

// --- Styles ---
const styles = {
  pageContainer: {
    display: "flex",
    flexDirection: "column",
    // --- FIX 1: Lock the container height to the screen height ---
    height: "100vh",
    backgroundColor: "#000",
    color: "#fff",
    fontFamily: "sans-serif",
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "15px 50px",
    backgroundColor: "#1a1a1a",
  },
  nav: { display: "flex", gap: "30px" },
  navLink: { color: "#fff", textDecoration: "none" },
  joinButton: {
    backgroundColor: "transparent",
    border: "1px solid #007bff",
    color: "#007bff",
    padding: "8px 20px",
    borderRadius: "20px",
    cursor: "pointer",
  },
  mainContent: {
    flex: 1,
    display: "flex",
    padding: "20px",
    gap: "20px",
    // --- FIX 2: Prevent this section from overflowing ---
    overflow: "hidden",
  },
  videoPanel: {
    flex: 3,
    display: "flex",
    flexDirection: "column",
    gap: "15px",
    backgroundColor: "#1a1a1a",
    padding: "15px",
    borderRadius: "12px",
  },
  mainVideo: {
    flex: 1,
    borderRadius: "8px",
    backgroundColor: "#333",
    minHeight: "300px",
  },
  thumbnailContainer: {
    display: "flex",
    justifyContent: "center",
    gap: "15px",
  },
  thumbnailVideo: {
    width: "200px",
    height: "112px",
    backgroundColor: "#333",
    borderRadius: "8px",
  },
  controlBar: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "10px",
    backgroundColor: "#2c2c2e",
    padding: "10px",
    borderRadius: "8px",
    marginTop: "auto", // Pushes the control bar to the bottom of the video panel
  },
  controlButton: {
    background: "none",
    border: "none",
    color: "#fff",
    cursor: "pointer",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "5px",
    fontSize: "0.8rem",
  },
  endCallButton: { color: "#ff453a" },
  chatPanel: {
    flex: 1,
    backgroundColor: "#f0f0f0",
    borderRadius: "12px",
    display: "flex",
    flexDirection: "column",
    color: "#000",
    minWidth: "300px", // Prevents the chat from getting too squished
  },
  chatHeader: { padding: "15px", borderBottom: "1px solid #ddd", margin: 0 },
  chatMessages: { flex: 1, padding: "15px", overflowY: "auto" },
  messageWrapper: {
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
    marginBottom: "10px",
  },
  messageBubble: {
    backgroundColor: "#cce4ff",
    padding: "8px 12px",
    borderRadius: "15px",
  },
  avatar: {
    width: "30px",
    height: "30px",
    borderRadius: "50%",
    backgroundColor: "#333",
    marginLeft: "10px",
  },
  chatInputArea: {
    display: "flex",
    alignItems: "center",
    padding: "15px",
    borderTop: "1px solid #ddd",
  },
  plusButton: {
    background: "none",
    border: "none",
    fontSize: "1.2rem",
    cursor: "pointer",
  },
  chatInput: {
    flex: 1,
    border: "none",
    backgroundColor: "transparent",
    padding: "8px",
    outline: "none",
  },
  sendButton: {
    background: "none",
    border: "none",
    color: "#007bff",
    cursor: "pointer",
    fontWeight: "bold",
  },
};

export default LiveClass;
