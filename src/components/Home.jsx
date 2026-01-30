import React from 'react';
import './Home.css';

function Home({ theme }) {
  return (
    <section id="home" className={`home ${theme}`}>
      <div className="home-container">
        {/* Left Side - Text Content */}
        <div className="home-content">
          <h1 className="greeting">Hi, I'm</h1>
          <h2 className="name">Arslan Asad</h2>
          <p className="title">Software Developer | Frontend & Backend Enthusiast</p>
          
          <p className="description">
            Fresh BS Computer Science graduate with hands-on experience in
            React, JavaScript, Node.js, and Python. Passionate about building
            clean, responsive, and user-friendly applications.
          </p>

          {/* Key Skills */}
          <div className="skills">
            <span className="skill-badge">React</span>
            <span className="skill-badge">JavaScript</span>
            <span className="skill-badge">Node.js</span>
            <span className="skill-badge">Python</span>
            <span className="skill-badge">Responsive Design</span>
          </div>

          {/* CTA Button */}
          <button
            className="cta-button"
            onClick={() => {
              document.getElementById('projects').scrollIntoView({ behavior: 'smooth' });
            }}
          >
            View My Projects →
          </button>
        </div>

        {/* Right Side - Profile Image */}
        <div className="home-image">
          <div className="image-placeholder">
            <img
              src="https://via.placeholder.com/400x400?text=Your+Photo"
              alt="Arslan Asad"
              className="profile-img"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
