import React from "react";

const Projects = () => {
  return (
    <section id="projects" style={{ textAlign: "center", padding: "3rem 2rem" }}>
      <h2 style={{ fontSize: "2rem", fontWeight: "bold", marginBottom: "1rem" }}>
        Projects
      </h2>
      <hr style={{ width: "50px", border: "2px solid #4B5DFA", margin: "1rem auto" }} />

      <p style={{ fontSize: "1rem", margin: "1rem auto", maxWidth: "700px", color: "#555" }}>
        A showcase of my technical projects and innovations
      </p>

      <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "1.5rem", marginTop: "2rem" }}>
        
        {/* Project Card 1 */}
        <div style={cardStyle}>
          <span style={tagStyle}>Machine Learning</span>
          <h3 style={{ margin: "0.5rem 0" }}>Privacy-Preserving Trajectory Data Release</h3>
          <p style={{ fontSize: "0.9rem", color: "#555" }}>
            Applied machine learning techniques with k-anonymity and perturbation to protect user privacy while maintaining data utility for analysis.
          </p>
          <div style={{ marginTop: "1rem" }}>
            <span style={techTag}>Python</span>
            <span style={techTag}>Machine Learning</span>
            <span style={techTag}>Data Privacy</span>
            <span style={techTag}>Analytics</span>
          </div>
          <div style={{ marginTop: "1rem" }}>
            <a href="#" style={linkStyle}>Code</a> | <a href="#" style={linkStyle}>Demo</a>
          </div>
        </div>

        {/* Project Card 2 */}
        <div style={cardStyle}>
          <span style={tagStyle}>Full-Stack</span>
          <h3 style={{ margin: "0.5rem 0" }}>To-Do List Web Application</h3>
          <p style={{ fontSize: "0.9rem", color: "#555" }}>
            Full-stack web application built with React frontend and Node.js backend, featuring JWT authentication and MongoDB for data persistence.
          </p>
          <div style={{ marginTop: "1rem" }}>
            <span style={techTag}>React</span>
            <span style={techTag}>Node.js</span>
            <span style={techTag}>MongoDB</span>
            <span style={techTag}>JWT</span>
            <span style={techTag}>Express</span>
          </div>
          <div style={{ marginTop: "1rem" }}>
            <a href="#" style={linkStyle}>Code</a> | <a href="#" style={linkStyle}>Demo</a>
          </div>
        </div>

        {/* Project Card 3 */}
        <div style={cardStyle}>
          <span style={tagStyle}>AI/Computer Vision</span>
          <h3 style={{ margin: "0.5rem 0" }}>Smart ATM with Facial Recognition</h3>
          <p style={{ fontSize: "0.9rem", color: "#555" }}>
            Implemented facial recognition system for secure ATM login and transactions using OpenCV and Python.
          </p>
          <div style={{ marginTop: "1rem" }}>
            <span style={techTag}>Python</span>
            <span style={techTag}>OpenCV</span>
            <span style={techTag}>Computer Vision</span>
          </div>
          <div style={{ marginTop: "1rem" }}>
            <a href="#" style={linkStyle}>Code</a> | <a href="#" style={linkStyle}>Demo</a>
          </div>
        </div>

        {/* Project Card 4 */}
        <div style={cardStyle}>
          <span style={tagStyle}>Web Development</span>
          <h3 style={{ margin: "0.5rem 0" }}>Portfolio Website</h3>
          <p style={{ fontSize: "0.9rem", color: "#555" }}>
            Personal portfolio website built using React.js to showcase projects, experience, and skills with a responsive design.
          </p>
          <div style={{ marginTop: "1rem" }}>
            <span style={techTag}>React</span>
            <span style={techTag}>JavaScript</span>
            <span style={techTag}>CSS</span>
          </div>
          <div style={{ marginTop: "1rem" }}>
            <a href="#" style={linkStyle}>Code</a> | <a href="#" style={linkStyle}>Demo</a>
          </div>
        </div>

      </div>
    </section>
  );
};

const cardStyle = {
  background: "#f9f9f9",
  padding: "1.5rem",
  borderRadius: "10px",
  width: "300px",
  boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
};

const tagStyle = {
  backgroundColor: "#E0E7FF",
  color: "#4B5DFA",
  padding: "0.3rem 0.6rem",
  borderRadius: "5px",
  fontSize: "0.8rem",
};

const techTag = {
  display: "inline-block",
  backgroundColor: "#E5E7EB",
  color: "#333",
  padding: "0.3rem 0.5rem",
  margin: "0.2rem",
  borderRadius: "5px",
  fontSize: "0.8rem",
};

const linkStyle = {
  color: "#4B5DFA",
  textDecoration: "none",
  fontWeight: "bold",
  margin: "0 1rem",
};

export default Projects;
