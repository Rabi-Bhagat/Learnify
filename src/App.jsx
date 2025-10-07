import React, { useEffect } from "react";

const Home = () => {
  useEffect(() => {
    document.body.style.backgroundColor = "black";
  }, []);

  return (
    <div
      style={{
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "space-between",
        padding: "60px",
      }}
    >
      <div style={{ maxWidth: "50%" }}>
        <h1 style={{ color: "white", marginBottom: "90px", marginTop: "40px" }}>
          Learnify Website
        </h1>
        <h2
          style={{ color: "green", marginBottom: "90px", marginTop: "120px" }}
        >
          LANGUAGE
        </h2>

        <button
          style={{
            padding: "15px 60px",
            backgroundColor: "purple",
            color: "white",
            borderRadius: "8px",
            border: "none",
            cursor: "pointer",
            marginTop: "20px",
            textTransform: "uppercase",
          }}
        >
          Start Today
        </button>
      </div>

      {/* Right: Image */}
      <div style={{ flexShrink: 0, marginTop: "80px" }}>
        <img
          src="/a.png"
          alt="Learnify"
          style={{ width: "500px", height: "auto", display: "block" }}
        />
      </div>
    </div>
  );
};

export default Home;
