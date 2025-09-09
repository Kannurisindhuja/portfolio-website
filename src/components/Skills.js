import React from "react";

const Skills = () => {
  // Define styles
  const cardStyle = {
    border: "1px solid #ddd",
    borderRadius: "8px",
    padding: "1rem",
    width: "200px",
    textAlign: "center",
    boxShadow: "0 2px 5px rgba(0,0,0,0.1)"
  };

  const techContainer = {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: "0.5rem",
    marginTop: "0.5rem"
  };

  const techTag = {
    backgroundColor: "#4B5DFA",
    color: "white",
    padding: "0.3rem 0.6rem",
    borderRadius: "4px",
    fontSize: "0.85rem"
  };

  return (
    <section id="skills" style={{ textAlign: "center", padding: "3rem 2rem" }}>
      <h2 style={{ fontWeight: "bold" }}>Skills</h2>
      <hr style={{ width: "50px", border: "2px solid #4B5DFA", margin: "1rem auto" }} />
      <p style={{ maxWidth: "700px", margin: "1rem auto" }}>
        Technical expertise and professional competencies
      </p>

      <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "1.5rem", marginTop: "2rem" }}>

        {/* Programming Languages */}
        <div style={cardStyle}>
          <h3>Programming Languages</h3>
          <div style={techContainer}>
            {["C", "Java", "JavaScript", "Python", "C++", "PHP", "Ruby", "SQL"].map(skill => (
              <span key={skill} style={techTag}>{skill}</span>
            ))}
          </div>
        </div>

        {/* Web Technologies */}
        <div style={cardStyle}>
          <h3>Web Technologies</h3>
          <div style={techContainer}>
            {["HTML", "CSS", "React", "Node.js", "Bootstrap", "Tailwind CSS"].map(skill => (
              <span key={skill} style={techTag}>{skill}</span>
            ))}
          </div>
        </div>

        {/* Databases */}
        <div style={cardStyle}>
          <h3>Databases</h3>
          <div style={techContainer}>
            {["MySQL", "MongoDB", "JDBC"].map(skill => (
              <span key={skill} style={techTag}>{skill}</span>
            ))}
          </div>
        </div>

        {/* Tools & Frameworks */}
        <div style={cardStyle}>
          <h3>Tools & Frameworks</h3>
          <div style={techContainer}>
            {["TensorFlow.js", "OpenCV", "Android Studio", "Git"].map(skill => (
              <span key={skill} style={techTag}>{skill}</span>
            ))}
          </div>
        </div>

        {/* Soft Skills */}
        <div style={cardStyle}>
          <h3>Soft Skills</h3>
          <div style={techContainer}>
            {["Problem Solving", "Leadership", "Communication", "Innovation", "Commitment"].map(skill => (
              <span key={skill} style={techTag}>{skill}</span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Skills;
