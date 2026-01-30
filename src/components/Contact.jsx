import React, { useState } from 'react';
import './Contact.css';

function Contact({ theme }) {
  // State for form inputs
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    // Clear error when user starts typing
    if (error) setError('');
  };

  // Validate email format
  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation
    if (!formData.name.trim()) {
      setError('Please enter your name');
      return;
    }
    if (!formData.email.trim()) {
      setError('Please enter your email');
      return;
    }
    if (!isValidEmail(formData.email)) {
      setError('Please enter a valid email address');
      return;
    }
    if (!formData.message.trim()) {
      setError('Please enter your message');
      return;
    }

    // If validation passes, show success message
    setSubmitted(true);
    setFormData({ name: '', email: '', message: '' });

    // Reset success message after 5 seconds
    setTimeout(() => {
      setSubmitted(false);
    }, 5000);
  };

  return (
    <section id="contact" className={`contact ${theme}`}>
      <div className="contact-container">
        <h2 className="section-title">Get In Touch</h2>
        <p className="section-subtitle">Have a question or want to work together? Drop me a message!</p>

        <div className="contact-wrapper">
          {/* Contact Form - Centered */}
          <form className={`contact-form ${theme}`} onSubmit={handleSubmit}>
            {/* Name Field */}
            <div className="form-group">
              <label htmlFor="name">Full Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="John Doe"
                required
              />
            </div>

            {/* Email Field */}
            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="john@example.com"
                required
              />
            </div>

            {/* Message Field */}
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your message here..."
                rows="5"
                required
              ></textarea>
            </div>

            {/* Error Message */}
            {error && <div className="error-message">{error}</div>}

            {/* Success Message */}
            {submitted && (
              <div className="success-message">
                ✓ Thank you! I'll get back to you soon.
              </div>
            )}

            {/* Submit Button */}
            <button type="submit" className="submit-btn" disabled={submitted}>
              {submitted ? 'Message Sent!' : 'Send Message'}
            </button>
          </form>

          {/* Social Media Icons - Below Form Horizontally */}
          <div className="social-section">
            <p className="social-label">Connect With Me</p>
            <div className="social-icons-horizontal">
              <a
                href="mailto:arslan.asad0101@gmail.com"
                className="social-icon-btn gmail-icon"
                title="Email"
              >
                <img src="https://image2url.com/r2/default/images/1769807820503-006126b1-36f0-4171-be71-c0b3a7b9fa27.png" alt="Gmail" className="icon-img" />
              </a>
              <a
                href="https://www.linkedin.com/in/arslan-asad-248a58363?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon-btn linkedin-icon"
                title="LinkedIn"
              >
                <img src="https://image2url.com/r2/default/images/1769807952634-bed599bc-c4be-4add-aa4a-9ba77eb20766.png" alt="LinkedIn" className="icon-img" />
              </a>
              <a
                href="https://github.com/ArslanAsad0101"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon-btn github-icon"
                title="GitHub"
              >
                <img src="https://image2url.com/r2/default/images/1769807998563-edcbacb6-3971-44df-8c3e-f4734fac5c79.png" alt="GitHub" className="icon-img" />
              </a>
              <a
                href="https://wa.me/1234567890"
                className="social-icon-btn whatsapp-icon"
                title="WhatsApp"
              >
                <img src="https://image2url.com/r2/default/images/1769807891725-3b7d7896-a99d-4f83-8669-7513bb3a20ef.png" alt="WhatsApp" className="icon-img" />
              </a>
              <a
                href="https://instagram.com/yourprofile"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon-btn instagram-icon"
                title="Instagram"
              >
                <img src="https://image2url.com/r2/default/images/1769807617101-00af3177-4977-4d2f-b66b-d55e8e850f8d.png" alt="Instagram" className="icon-img" />
              </a>
              <a
                href="https://www.facebook.com/share/18LMTGSkF8/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon-btn facebook-icon"
                title="Facebook"
              >
                <img src="https://image2url.com/r2/default/images/1769807682996-3b013f2f-1ca6-44fe-9291-b219c463355b.png" alt="Facebook" className="icon-img" />
              </a>
              <a
                href="https://x.com/jupyter6699"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon-btn twitter-icon"
                title="X (Twitter)"
              >
                <img src="https://image2url.com/r2/default/images/1769807764479-f3786e9d-79c0-4e8b-8a33-98a0eb131bc5.png" alt="X (Twitter)" className="icon-img" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
