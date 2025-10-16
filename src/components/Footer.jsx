import React from "react";
import { FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = ({ theme = "dark" }) => {
  const footerStyle = theme === "dark" ? styles.footerDark : styles.footerLight;
  const linkStyle = theme === "dark" ? styles.linkDark : styles.linkLight;

  return (
    <footer style={footerStyle}>
      <div>
        <a href="/resources" style={linkStyle}>
          Resources
        </a>
        <a href="/legal" style={linkStyle}>
          Legal
        </a>
      </div>
      <div style={styles.socialIcons}>
        <a href="#" style={linkStyle}>
          <FaFacebook size={20} />
        </a>
        <a href="#" style={linkStyle}>
          <FaLinkedin size={20} />
        </a>
        <a href="#" style={linkStyle}>
          <FaTwitter size={20} />
        </a>
      </div>
    </footer>
  );
};

const styles = {
  footerDark: {
    backgroundColor: "#27293d",
    padding: "20px 50px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    borderTop: "1px solid #333",
  },
  linkDark: { color: "#a9a9b2", textDecoration: "none", margin: "0 15px" },
  footerLight: {
    backgroundColor: "#f9f9f9",
    padding: "20px 50px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    borderTop: "1px solid #e0e0e0",
    color: "#555",
  },
  linkLight: { color: "#555", textDecoration: "none", margin: "0 15px" },
  socialIcons: { display: "flex", gap: "15px" },
};

export default Footer;
