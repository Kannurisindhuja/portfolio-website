import React from "react";

const Hero = () => {
  // Smooth scroll function
  const handleScroll = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="hero" style={{ textAlign: "center", padding: "10rem" }}>
      {/* Profile Image */}
      <img
        src="/sindhujakannuri.png"
        alt="Profile"
        style={{ width: "180px", height: "180px", borderRadius: "60%" }}
      />

      <h1 style={{ margin: "1.5rem 0" }}>
        Kannuri <span style={{ color: "#ff29e2ff" }}>Sindhuja</span>
      </h1>

      <h4>Computer Science Engineering Student</h4>

      <p style={{ fontSize: "1rem", margin: "0.5rem auto", maxWidth: "600px" }}>
        Passionate about leveraging cutting-edge technologies to solve complex problems.
        Experienced in full-stack development, AI/ML, and mobile app development.
      </p>

      <div className="contact-info" style={{ fontSize: "0.95rem", margin: "1rem 0" }}>
        <span>📍 Peddapalli, India</span> | 
        <span>📞 +91 9515561755</span> | 
        <span>✉️ kannurisindhuja22@gmail.com</span>
      </div>

      <div className="social-links" style={{ marginTop: "0.5rem" }}>
        <a href="https://www.linkedin.com/in/sindhuja-kannuri/" target="_blank" rel="noopener noreferrer">
          <img src="/linkedin.png" alt="LinkedIn" style={{ width: "40px", margin: "10px" }} />
        </a>
        <a href="https://github.com/Kannurisindhuja" target="_blank" rel="noopener noreferrer">
          <img src="/github.png" alt="GitHub" style={{ width: "40px", margin: "10px" }} />
        </a>
        <a href="mailto:kannurisindhuja22@gmail.com">
          <img src="/email.png" alt="Email" style={{ width: "40px", margin: "10px" }} />
        </a>
      </div>

      {/* Buttons */}
      <div style={{ marginTop: "1rem" }}>
        <button 
          onClick={() => handleScroll('contact')}
          style={{ marginRight: "10px", padding: "0.6rem 1.2rem", cursor: "pointer" }}
        >
          Get In Touch
        </button>
        <button 
          onClick={() => handleScroll('projects')}
          style={{ padding: "0.6rem 1.2rem", cursor: "pointer" }}
        >
          View in Work
        </button>
      </div>
    </section>
  );
};

export default Hero;
