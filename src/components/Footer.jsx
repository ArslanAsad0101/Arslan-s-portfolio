import React from 'react';
import './Footer.css';

function Footer({ theme }) {
  return (
    <footer className={`footer ${theme}`}>
      <div className="footer-container">
        {/* Footer Content Grid */}
        <div className="footer-content">
          {/* About Section */}
          <div className="footer-section">
            <h3>About Me</h3>
            <p>
              I'm Arslan Asad, a Fresh BS Computer Science graduate passionate
              about building clean, responsive, and user-friendly applications.
              Always eager to learn and grow.
            </p>
          </div>

          {/* Quick Links */}
          <div className="footer-section">
            <h3>Quick Links</h3>
            <ul className="footer-links">
              <li>
                <a href="#home" onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('home').scrollIntoView({ behavior: 'smooth' });
                }}>
                  Home
                </a>
              </li>
              <li>
                <a href="#projects" onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('projects').scrollIntoView({ behavior: 'smooth' });
                }}>
                  Projects
                </a>
              </li>
              <li>
                <a href="#contact" onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
                }}>
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div className="footer-section">
            <h3>Follow Me</h3>
            <div className="social-links">
              <a
                href="mailto:arslan.asad0101@gmail.com"
                className="social-icon"
                title="Email"
              >
                <img src="https://image2url.com/r2/default/images/1769807820503-006126b1-36f0-4171-be71-c0b3a7b9fa27.png" alt="Gmail" />
              </a>
              <a
                href="https://www.linkedin.com/in/arslan-asad-248a58363?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
                title="LinkedIn"
              >
                <img src="https://image2url.com/r2/default/images/1769807952634-bed599bc-c4be-4add-aa4a-9ba77eb20766.png" alt="LinkedIn" />
              </a>
              <a
                href="https://github.com/ArslanAsad0101"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
                title="GitHub"
              >
                <img src="https://image2url.com/r2/default/images/1769807998563-edcbacb6-3971-44df-8c3e-f4734fac5c79.png" alt="GitHub" />
              </a>
              <a
                href="https://wa.me/1234567890"
                className="social-icon"
                title="WhatsApp"
              >
                <img src="https://image2url.com/r2/default/images/1769807891725-3b7d7896-a99d-4f83-8669-7513bb3a20ef.png" alt="WhatsApp" />
              </a>
              <a
                href="https://instagram.com/yourprofile"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
                title="Instagram"
              >
                <img src="https://image2url.com/r2/default/images/1769807617101-00af3177-4977-4d2f-b66b-d55e8e850f8d.png" alt="Instagram" />
              </a>
              <a
                href="https://www.facebook.com/share/18LMTGSkF8/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
                title="Facebook"
              >
                <img src="https://image2url.com/r2/default/images/1769807682996-3b013f2f-1ca6-44fe-9291-b219c463355b.png" alt="Facebook" />
              </a>
              <a
                href="https://x.com/jupyter6699"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
                title="X (Twitter)"
              >
                <img src="https://image2url.com/r2/default/images/1769807764479-f3786e9d-79c0-4e8b-8a33-98a0eb131bc5.png" alt="X (Twitter)" />
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <p>
            © 2024 Arslan Asad. All rights reserved. | Designed & Built with ❤️
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
