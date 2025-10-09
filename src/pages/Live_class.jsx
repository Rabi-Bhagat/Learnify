import React, { useState } from "react";
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

// --- Reusable Components ---

// Header Component
const Header = () => (
  <header style={styles.header}>
    <nav style={styles.nav}>
      <a href="#" style={styles.navLink}>
        Home
      </a>
      <a href="#" style={styles.navLink}>
        Contact
      </a>
      <a href="#" style={styles.navLink}>
        About
      </a>
    </nav>
    <button style={styles.joinButton}>Join</button>
  </header>
);

// Footer Component
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
    <div style={styles.socialIcons}>
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

// Video Participant Tile
const VideoParticipant = ({ isMain = false }) => (
  <div style={isMain ? styles.mainVideo : styles.thumbnailVideo}>
    {/* In a real app, a <video> tag would go here */}
    <img
      src={`https://via.placeholder.com/${isMain ? "800x450" : "200x112"}`}
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

// Control Bar for Video
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
          <VideoParticipant isMain={true} />
          <div style={styles.thumbnailContainer}>
            <VideoParticipant />
            <VideoParticipant />
            <VideoParticipant />
            <VideoParticipant />
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
    minHeight: "100vh",
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
  mainVideo: { flex: 1, borderRadius: "8px", backgroundColor: "#333" },
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
  },
  chatHeader: { padding: "15px", borderBottom: "1px solid #ddd" },
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
  footer: {
    padding: "20px 50px",
    backgroundColor: "#1a1a1a",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  footerLink: { color: "#999", textDecoration: "none", margin: "0 10px" },
  socialIcons: { display: "flex", gap: "10px" },
};

export default LiveClass;
