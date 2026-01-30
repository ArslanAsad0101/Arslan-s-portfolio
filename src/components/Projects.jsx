import React from 'react';
import ProjectCard from './ProjectCard';
import './Projects.css';

function Projects({ theme }) {
  // Sample projects - Replace with your actual projects
  const projects = [
    {
      id: 1,
      title: 'AudioScope',
      description: 'AudioScope is a mobile application frontend built with TypeScript and Expo (React Native).',
      tags: ['React Native', 'TypeScript', 'Expo'],
      images: [
        'https://image2url.com/r2/default/images/1769805815185-d0182eab-30ce-49f0-89b2-9148517f0501.jpeg',
        'https://image2url.com/r2/default/images/1769805880982-5c41c860-9490-454b-b071-d408b997370a.jpeg',
        'https://image2url.com/r2/default/images/1769805907797-41534d1d-9116-457e-962a-80ff693d1573.jpeg',
        'https://image2url.com/r2/default/images/1769805935331-f4726a5b-0af9-4dea-a2c4-77dc0e57e76f.jpeg',
        'https://image2url.com/r2/default/images/1769805976680-6a8dc362-ad42-46e6-85e7-ddd123486941.jpeg',
        'https://image2url.com/r2/default/images/1769806007358-96acfca2-0ddb-4ea8-b4ee-f1ec27d8aa2d.jpeg',
      ],
      githubLink: 'https://github.com/ArslanAsad0101/AudioScope',
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'A responsive task management application with real-time updates and user authentication.',
      tags: ['JavaScript', 'HTML5', 'CSS'],
      image: 'https://image2url.com/r2/default/images/1769805386919-b80998ef-bd55-4c0e-a29b-dfd009bf8b62.jpeg',
      githubLink: 'https://github.com/ArslanAsad0101/To-do-list',
    },
    {
      id: 3,
      title: 'Quiz App',
      description: 'An interactive quiz application with multiple choice questions, and score tracking. Clean UI with smooth animations.',
      tags: ['React', 'JavaScript', 'Responsive Design'],
      image: 'https://image2url.com/r2/default/images/1769805169798-e3d11589-f5e4-4374-96a7-7ed8ab86fe5e.png',
      githubLink: 'https://github.com/ArslanAsad0101/Quiz-App',
    },
    {
      id: 4,
      title: 'Selenium Testing',
      description: 'This project is an automated login test built using Selenium WebDriver with Python.',
      tags: ['Python', 'Selenium', 'WebDriver'],
      image: 'https://via.placeholder.com/300x200?text=Blog+Platform',
      githubLink: 'https://github.com/ArslanAsad0101/selenium-testing',
    },
    {
      id: 5,
      title: 'Social Media Dashboard',
      description: 'Analytics dashboard for social media metrics with beautiful charts and real-time data.',
      tags: ['React', 'Chart.js', 'REST API'],
      image: 'https://via.placeholder.com/300x200?text=Social+Dashboard',
      githubLink: 'https://github.com/yourusername/social-dashboard',
    },
    {
      id: 6,
      title: 'Fitness Tracker',
      description: 'Mobile-responsive fitness tracking app with workout logging and progress visualization.',
      tags: ['React', 'Python', 'SQLite'],
      image: 'https://via.placeholder.com/300x200?text=Fitness+Tracker',
      githubLink: 'https://github.com/yourusername/fitness-tracker',
    },
  ];

  return (
    <section id="projects" className={`projects ${theme}`}>
      <div className="projects-container">
        <h2 className="section-title">My Projects</h2>
        <p className="section-subtitle">Check out some of my recent work</p>

        <div className="projects-grid">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} theme={theme} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
