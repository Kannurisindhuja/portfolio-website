import React from "react";

const Experience = () => {
  return (
    <section id="experience" style={{ textAlign: "center", padding: "3rem 2rem" }}>
      <h2 style={{ fontSize: "2rem", fontWeight: "bold", marginBottom: "1rem" }}>
        Experience
      </h2>
      <hr style={{ width: "50px", border: "2px solid #4B5DFA", margin: "1rem auto" }} />

      <p style={{ fontSize: "1rem", margin: "1rem auto", maxWidth: "700px", color: "#555" }}>
        My professional journey through various internships and projects
      </p>

      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "1.5rem", marginTop: "2rem" }}>
        
        {/* Experience Card 1 */}
        <div style={cardStyle}>
          <h3 style={{ marginBottom: "0.5rem" }}>Java Programming Intern</h3>
          <p style={{ color: "#4B5DFA", marginBottom: "0.5rem" }}>CodeAlpha</p>
          <div style={{ fontSize: "0.85rem", color: "#777", marginBottom: "1rem" }}>
            📅 September 2024 – October 2024 | 📍 Remote
          </div>
          <ul style={{ textAlign: "left", paddingLeft: "1rem" }}>
            <li>Built a Java Swing-based Online Quiz Platform with login, timed tests, and admin features</li>
            <li>Developed a Number Guessing Game with random number generation and validation</li>
            <li>Simulated an ATM Interface with deposits, withdrawals, and secure authentication</li>
            <li>Integrated JDBC with MySQL for persistent data</li>
          </ul>
        </div>

        {/* Experience Card 2 */}
        <div style={cardStyle}>
          <h3 style={{ marginBottom: "0.5rem" }}>Artificial Intelligence Intern</h3>
          <p style={{ color: "#4B5DFA", marginBottom: "0.5rem" }}>Pinnacle Lab</p>
          <div style={{ fontSize: "0.85rem", color: "#777", marginBottom: "1rem" }}>
            📅 July 2024 – August 2024 | 📍 Remote
          </div>
          <ul style={{ textAlign: "left", paddingLeft: "1rem" }}>
            <li>Resume Parser: Extracted structured data using NLP</li>
            <li>Teachable Machine: Built image classifier with TensorFlow.js</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

const cardStyle = {
  background: "#f9f9f9",
  padding: "1.5rem",
  borderRadius: "10px",
  width: "600px",
  boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
};

export default Experience;
