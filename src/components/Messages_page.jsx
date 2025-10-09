import React, { useState, useEffect, useRef } from "react";
// Import icons from Font Awesome
import {
  FaTachometerAlt,
  FaBook,
  FaChalkboardTeacher,
  FaEnvelope,
  FaStar,
  FaSignOutAlt,
  FaPlus,
  FaFacebook,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";

// --- Mock Data ---
const initialConversations = {
  1: {
    id: "1",
    name: "Sujan Subedei",
    lastMessage: "Hi...",
    avatar: "https://via.placeholder.com/40",
  },
  2: {
    id: "2",
    name: "Rabi Bhagat",
    lastMessage: "K gardai xau sathi..",
    avatar: "https://via.placeholder.com/40",
  },
  3: {
    id: "3",
    name: "Aryan Jha",
    lastMessage: "Hello..",
    avatar: "https://via.placeholder.com/40",
  },
};

const initialMessages = {
  1: [{ id: "a", text: "Hi...", user: "self" }],
  2: [{ id: "b", text: "K gardai xau sathi..", user: "other" }],
  3: [
    { id: "c", text: "Hello..", user: "other" },
    { id: "d", text: "Hello!!", user: "other" },
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

// --- Messages Page Specific Components ---
const ConversationList = ({ conversations, activeConvId, setActiveConvId }) => (
  <div style={styles.conversationList}>
    {Object.values(conversations).map((conv) => (
      <div
        key={conv.id}
        style={
          conv.id === activeConvId ? styles.activeConvItem : styles.convItem
        }
        onClick={() => setActiveConvId(conv.id)}
      >
        <img src={conv.avatar} alt={conv.name} style={styles.convAvatar} />
        <div>
          <h4 style={styles.convName}>{conv.name}</h4>
          <p style={styles.convLastMessage}>{conv.lastMessage}</p>
        </div>
      </div>
    ))}
  </div>
);

const ChatWindow = ({ messages, setMessages, activeConvId }) => {
  const [newMessage, setNewMessage] = useState("");
  const chatEndRef = useRef(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!newMessage.trim()) return;

    const newMsg = {
      id: Date.now().toString(),
      text: newMessage,
      user: "self",
    };

    // In a real app, you'd send this to a server. Here we just update local state.
    const updatedMessages = [...(messages[activeConvId] || []), newMsg];
    setMessages({ ...messages, [activeConvId]: updatedMessages });
    setNewMessage("");
  };

  const activeMessages = messages[activeConvId] || [];

  return (
    <div style={styles.chatWindow}>
      <div style={styles.chatArea}>
        {activeMessages.map((msg) => (
          <div
            key={msg.id}
            style={
              msg.user === "self" ? styles.messageSelf : styles.messageOther
            }
          >
            <div style={styles.messageBubble}>{msg.text}</div>
          </div>
        ))}
        <div ref={chatEndRef} />
      </div>
      <form onSubmit={handleSendMessage} style={styles.inputArea}>
        <button type="button" style={styles.plusButton}>
          <FaPlus />
        </button>
        <input
          type="text"
          placeholder="Text here..."
          style={styles.textInput}
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
const MessagesPage = () => {
  const [conversations, setConversations] = useState(initialConversations);
  const [messages, setMessages] = useState(initialMessages);
  const [activeConvId, setActiveConvId] = useState("1"); // Set 'Sujan Subedei' as active initially

  return (
    <div style={styles.pageContainer}>
      <Sidebar />
      <div style={styles.mainWrapper}>
        <Header />
        <main style={styles.mainContent}>
          <ConversationList
            conversations={conversations}
            activeConvId={activeConvId}
            setActiveConvId={setActiveConvId}
          />
          <ChatWindow
            messages={messages}
            setMessages={setMessages}
            activeConvId={activeConvId}
          />
        </main>
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
  mainContent: { flex: 1, display: "flex", padding: "20px", gap: "20px" },
  conversationList: {
    flex: 1,
    backgroundColor: "#27293d",
    borderRadius: "10px",
    padding: "10px",
    overflowY: "auto",
  },
  convItem: {
    display: "flex",
    alignItems: "center",
    padding: "10px",
    borderRadius: "8px",
    cursor: "pointer",
    marginBottom: "5px",
  },
  activeConvItem: {
    display: "flex",
    alignItems: "center",
    padding: "10px",
    borderRadius: "8px",
    cursor: "pointer",
    marginBottom: "5px",
    backgroundColor: "#3a3a5a",
  },
  convAvatar: {
    width: "40px",
    height: "40px",
    borderRadius: "50%",
    marginRight: "10px",
  },
  convName: { margin: 0, fontSize: "1rem" },
  convLastMessage: { margin: 0, fontSize: "0.8rem", color: "#a9a9b2" },
  chatWindow: {
    flex: 3,
    backgroundColor: "#27293d",
    borderRadius: "10px",
    display: "flex",
    flexDirection: "column",
  },
  chatArea: {
    flex: 1,
    padding: "20px",
    overflowY: "auto",
    display: "flex",
    flexDirection: "column",
    gap: "15px",
  },
  messageSelf: { alignSelf: "flex-end", display: "flex", alignItems: "center" },
  messageOther: {
    alignSelf: "flex-start",
    display: "flex",
    alignItems: "center",
  },
  messageBubble: {
    backgroundColor: "#3a3a5a",
    padding: "10px 15px",
    borderRadius: "20px",
    maxWidth: "60%",
  },
  inputArea: {
    display: "flex",
    alignItems: "center",
    padding: "15px",
    borderTop: "1px solid #333",
  },
  plusButton: {
    background: "none",
    border: "none",
    color: "#a9a9b2",
    fontSize: "1.2rem",
    cursor: "pointer",
    marginRight: "10px",
  },
  textInput: {
    flex: 1,
    backgroundColor: "#1e1e2d",
    border: "1px solid #444",
    color: "#fff",
    padding: "12px",
    borderRadius: "20px",
    outline: "none",
  },
  sendButton: {
    background: "none",
    border: "none",
    color: "#007bff",
    cursor: "pointer",
    fontWeight: "bold",
    fontSize: "1rem",
    marginLeft: "10px",
  },
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

export default MessagesPage;
