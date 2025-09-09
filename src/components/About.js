import React from "react";

const AboutMe = () => {
  return (
    <section id="about" style={{ textAlign: "center", padding: "3rem 2rem" }}>
      <h2 style={{ fontSize: "2rem", fontWeight: "bold", marginBottom: "1rem" }}>
        About Me
      </h2>
      <hr style={{ width: "50px", border: "2px solid #4B5DFA", margin: "1rem auto" }} />

      <p style={{ maxWidth: "700px", margin: "1rem auto", lineHeight: "1.6", fontSize: "1rem", color: "#333" }}>
        I am a Computer Science Engineering student passionate about leveraging cutting-edge technologies to solve complex problems.  
        With a solid foundation in programming languages, I have gained practical experience through coursework and hands-on projects.  
        I am eager to contribute my analytical and problem-solving skills to a collaborative team.
      </p>

      {/* Example of skill cards (optional structure) */}
      <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "1.5rem", marginTop: "2rem" }}>
        <div style={cardStyle}>
          <h3>Full-Stack Development</h3>
          <p>Experienced in React, Node.js, and modern web technologies</p>
        </div>
        <div style={cardStyle}>
          <h3>AI & Machine Learning</h3>
          <p>Built NLP tools, image classifiers, and intelligent applications</p>
        </div>
        <div style={cardStyle}>
          <h3>Mobile Development</h3>
          <p>Created Android apps with modern UI/UX principles</p>
        </div>
        <div style={cardStyle}>
          <h3>Database Design</h3>
          <p>Proficient in SQL, MySQL, and database optimization</p>
        </div>
      </div>
    </section>
  );
};

const cardStyle = {
  background: "#f9f9f9",
  padding: "1rem",
  borderRadius: "10px",
  width: "250px",
  boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
  textAlign: "left",
};

export default AboutMe;
