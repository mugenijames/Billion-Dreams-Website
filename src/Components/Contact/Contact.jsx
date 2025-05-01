import React, { useState } from "react";
import "./Contact.css"; // Ensure that the custom styles are imported

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [responseMessage, setResponseMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Mock API call
      await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulate API delay
      setResponseMessage(
        "Thank you for contacting us! We will get back to you soon."
      );
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      setResponseMessage("Oops! Something went wrong. Please try again.");
    }
  };

  return (
    <div className="contact-container">
      <div className="contact-details">
        <h2>Contact Details</h2>
        <p>Feel free to reach out to us via the following details:</p>
        <div>
          <p>
            <strong>Phone:</strong> +1 (234) 567-8900
          </p>
          <p>
            <strong>Email:</strong> okida@infobuilders.com
          </p>
          <p>
            <strong>Address:</strong> 123 Construction Lane, Build City, BC
            56789
          </p>
        </div>
      </div>

      <div className="contact-form" id="contact">
        <h2>Get in Touch</h2>
        {responseMessage && (
          <div className="response-message">{responseMessage}</div>
        )}
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <label htmlFor="subject">Subject</label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
          />

          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>

          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}
