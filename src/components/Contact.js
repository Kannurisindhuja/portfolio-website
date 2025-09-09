import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_xxx123',     // Replace with your Service ID
      'template_yyy456',    // Replace with your Template ID
      form.current,
      'user_zzz789'         // Replace with your Public Key
    )
    .then((result) => {
      alert('Message Sent Successfully!');
      e.target.reset();
    }, (error) => {
      alert('Failed to send message, please try again.');
    });
  };

  return (
    <section id="contact" style={{ padding: "4rem 2rem" }}>
      <h2 style={{ textAlign: "center", marginBottom: "2rem" }}>📞 Contact Me</h2>
      <div style={{
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        gap: "2rem",
        justifyContent: "center",
        alignItems: "flex-start"
      }}>

        {/* Contact Info Card */}
        <div style={{
          backgroundColor: "#f7f8ff",
          padding: "1.5rem",
          borderRadius: "12px",
          flex: "1 1 300px",
          maxWidth: "350px",
          boxShadow: "0 2px 8px rgba(0,0,0,0.05)"
        }}>
          <h3 style={{ marginBottom: "0.5rem" }}>Get in Touch</h3>
          <p style={{ margin: "0.3rem 0" }}>📧 <strong>Email:</strong> kannurisindhuja22@gmail.com</p>
          <p style={{ margin: "0.3rem 0" }}>📞 <strong>Phone:</strong> +91-9515561755</p>
          <p style={{ margin: "0.3rem 0" }}>📍 <strong>Location:</strong> Manthani, Peddapalli, Telangana, India</p>
          <p style={{ margin: "0.3rem 0" }}>🌐 <strong>Website:</strong> <a href="https://kannurisindhuja.com" target="_blank" rel="noopener noreferrer">kannurisindhuja.com</a></p>
          <p style={{ margin: "0.3rem 0" }}>💼 <strong>LinkedIn:</strong> <a href="https://linkedin.com/in/kannurisindhuja" target="_blank" rel="noopener noreferrer">linkedin.com/in/kannurisindhuja</a></p>
          <p style={{ margin: "0.3rem 0" }}>🐙 <strong>GitHub:</strong> <a href="https://github.com/Kannurisindhuja" target="_blank" rel="noopener noreferrer">github.com/Kannurisindhuja</a></p>
        </div>

        {/* Contact Form */}
        <form ref={form} onSubmit={sendEmail} style={{
          backgroundColor: "#f7f8ff",
          padding: "1.5rem",
          borderRadius: "12px",
          flex: "1 1 300px",
          maxWidth: "400px",
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
          boxShadow: "0 2px 8px rgba(0,0,0,0.05)"
        }}>
          <h3 style={{ marginBottom: "0.5rem" }}>Send a Message</h3>
          <input
            type="text"
            name="from_name"
            placeholder="Your Name"
            required
            style={{ padding: "0.5rem", fontSize: "1rem" }}
          />
          <input
            type="email"
            name="from_email"
            placeholder="Your Email"
            required
            style={{ padding: "0.5rem", fontSize: "1rem" }}
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows="5"
            required
            style={{ padding: "0.5rem", fontSize: "1rem" }}
          ></textarea>
          <button
            type="submit"
            style={{ padding: "0.75rem", fontSize: "1rem", cursor: "pointer" }}
          >
            Send Message
          </button>
        </form>

      </div>
    </section>
  );
};

export default Contact;
