import React, { useState } from 'react';
import './Testimonials.css';

const testimonials = [
  {
    name: "Dr. David Gilbert Bwire",
    title: "Controller of Budgets",
    content: "This company did an amazing job with our building project. The team was professional, timely, and exceeded expectations.",
  },
  {
    name: "Hon. Moody Awori",
    title: "Former Vice President of Kenya",
    content: "Excellent service from start to finish! The team was incredibly helpful and delivered on time. Highly recommend.",
  },
  {
    name: "Michael Johnson",
    title: "Project Lead, Company",
    content: "The quality of work is exceptional. They really went the extra mile to make sure we were happy with the results.",
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="testimonials" id="testimonials">
      <h2>What Our Clients Say</h2>
      <div className="testimonial-card">
        <div className="testimonial-content">
          <p className="testimonial-text">
            "{testimonials[currentIndex].content}"
          </p>
          <h3>{testimonials[currentIndex].name}</h3>
          <p>{testimonials[currentIndex].title}</p>
        </div>
      </div>
      <div className="carousel-controls">
        <button onClick={prevTestimonial} className="prev-btn">
          &#60;
        </button>
        <button onClick={nextTestimonial} className="next-btn">
          &#62;
        </button>
      </div>
    </div>
  );
};

export default Testimonials;
