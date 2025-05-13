import React, { useState } from "react";
import "./Contact.css"; // Ensure that the custom styles are imported
// import telephone from "../../assets/telephone-719703.png"; 
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
        const response = await fetch('http://localhost:3000/api/messages', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        });

        if (response.ok) {
            const result = await response.json();
            setResponseMessage(result.message);
            setFormData({ name: "", email: "", subject: "", message: "" });
        } else {
            setResponseMessage('Failed to send the message. Please try again.');
        }
    } catch (error) {
        console.error('Error:', error);
        setResponseMessage('An error occurred. Please try again.');
    }
};

  return (
    <div className="contact-container">
      <div className="contact-details">
        <h2>Contact Details</h2>
        <p>Feel free to reach out to us via the following details:</p>
        <div>
         
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
