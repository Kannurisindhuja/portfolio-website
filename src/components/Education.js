import React from "react";

const Education = () => {
  return (
    <section id="education" style={{ padding: "4rem 2rem", textAlign: "center" }}>
      <h2 style={{ marginBottom: "2rem" }}>🎓 Education</h2>

      {/* B.Tech */}
      <div style={{
        backgroundColor: "#f7f8ff",
        padding: "1.5rem",
        borderRadius: "12px",
        margin: "1rem auto",
        maxWidth: "700px",
        textAlign: "left",
        boxShadow: "0 2px 8px rgba(0,0,0,0.05)"
      }}>
        <h3 style={{ marginBottom: "0.5rem" }}>
          🎓 B.Tech in Computer Science & Engineering 
          <span style={{ backgroundColor: "#d0e0ff", color: "#1e50c2", padding: "0.2rem 0.5rem", borderRadius: "6px", fontSize: "0.8rem", marginLeft: "0.5rem" }}>Completed</span>
        </h3>
        <p style={{ margin: "0.3rem 0" }}>JNTUH University College of Engineering, Manthani</p>
        <p style={{ margin: "0.3rem 0", fontWeight: "bold" }}>📅 2021 – 2025| GPA: 7.06</p>
      </div>

      {/* Intermediate */}
      <div style={{
        backgroundColor: "#f7f8ff",
        padding: "1.5rem",
        borderRadius: "12px",
        margin: "1rem auto",
        maxWidth: "700px",
        textAlign: "left",
        boxShadow: "0 2px 8px rgba(0,0,0,0.05)"
      }}>
        <h3 style={{ marginBottom: "0.5rem" }}>
          🎓 Intermediate 
          <span style={{ backgroundColor: "#d0e0ff", color: "#1e50c2", padding: "0.2rem 0.5rem", borderRadius: "6px", fontSize: "0.8rem", marginLeft: "0.5rem" }}>Completed</span>
        </h3>
        <p style={{ color: "#4B5DFA", margin: "0.3rem 0" }}>MPC</p>
        <p style={{ margin: "0.3rem 0" }}>TSRJC Thatipally College Girls, Mallial, Jagtial</p>
        <p style={{ margin: "0.3rem 0", fontWeight: "bold" }}>📅 2019 – 2021 | 80%</p>
      </div>

      {/* High School */}
      <div style={{
        backgroundColor: "#f7f8ff",
        padding: "1.5rem",
        borderRadius: "12px",
        margin: "1rem auto",
        maxWidth: "700px",
        textAlign: "left",
        boxShadow: "0 2px 8px rgba(0,0,0,0.05)"
      }}>
        <h3 style={{ marginBottom: "0.5rem" }}>
          🎓 High School 
          <span style={{ backgroundColor: "#d0e0ff", color: "#1e50c2", padding: "0.2rem 0.5rem", borderRadius: "6px", fontSize: "0.8rem", marginLeft: "0.5rem" }}>Completed</span>
        </h3>
        <p style={{ margin: "0.3rem 0" }}>Trinity Model Secondary School, Peddapalli</p>
        <p style={{ margin: "0.3rem 0", fontWeight: "bold" }}>📅 2018 – 2019 | GPA: 9.0</p>
      </div>
    </section>
  );
};

export default Education;
