// components/Home.jsx
import { useState, useEffect } from 'react';
import { FiGithub , FiLinkedin } from 'react-icons/fi';
// import { SiNaukri } from 'react-icons/si';
import { Link } from 'react-router-dom';
import Mine from '../../assets/Mine.png'
import './Home.css';


const TechItem = ({ tech, definition, isActive, onClick }) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div
      className={`tech-item ${isActive ? 'active' : ''} ${isHovered ? 'hovered' : ''}`}
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      data-hover-tech={tech}
    >
      {tech}
    </div>
  );
};

const Home = () => {
  const [selectedTech, setSelectedTech] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  const techDefinitions = {
  HTML: "HTML (HyperText Markup Language) is the standard markup language used to create and structure content for the World Wide Web. It provides the foundational structure of web pages by defining elements like headings, paragraphs, images, links, forms, and more.",

  CSS: "CSS (Cascading Style Sheets) is a language used to style and layout web pages. It controls the visual presentation of HTML elements, including colors, fonts, spacing, animations, and responsiveness.",

  JavaScript: "JavaScript (JS) is a high-level, versatile programming language used to create dynamic, interactive behavior on web pages and applications. It’s one of the core technologies of the web, alongside HTML (structure) and CSS (styling).",

  React: "React.js (commonly called React) is an open-source JavaScript library for building user interfaces (UIs). Developed by Meta (formerly Facebook), it focuses on creating reusable components to build dynamic, fast, and scalable web applications.",

  "Next.js": "Next.js is a powerful React framework for building full-stack web applications with features like server-side rendering (SSR), static site generation (SSG), API routes, and built-in routing. Developed by Vercel, it simplifies performance optimization and SEO for React-based projects.",

  "Node.js": "Node.js is an open-source, JavaScript runtime environment that allows you to run JavaScript code outside a web browser (e.g., on servers, desktops, or IoT devices). Built on Chrome’s V8 JavaScript engine, it’s designed for building scalable, high-performance network applications.",

  MongoDB: "MongoDB is a NoSQL, document-oriented database designed for flexibility, scalability, and high performance. Unlike traditional relational databases (e.g., MySQL, PostgreSQL), it stores data in JSON-like documents (BSON format) instead of tables, making it ideal for unstructured or semi-structured data."

  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const section = document.querySelector('.home-section');
    if (section) observer.observe(section);

    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  const handleTechClick = (tech) => {
    setSelectedTech(selectedTech === tech ? null : tech);
  };

  return (
    <section className={`home-section ${isVisible ? 'visible' : ''}`}>
      <div className="home-container">
        <div className="home-content">
          <h4 className="home-subtitle">Hi, my name is</h4>
          <h1 className="home-title">Anurag.</h1>
          <h2 className="home-subtitle-large">I build things for the web.</h2>

          <p className="home-description">
            I'm a full-stack developer specializing in creating exceptional digital experiences.
            Currently focused on building responsive web applications with modern technologies.
          </p>

          <div className="home-cta">
            <Link to="/projects" className="cta-button" aria-label="View Projects">
              View Projects
            </Link>
            <div className="social-links">
              <a href="https://github.com/ANURAGGGGGGGGGGGG" target="_blank" rel="noopener noreferrer">
                <FiGithub className="social-icon" />
              </a>
                  <a href="https://www.linkedin.com/in/anurag-mahantaa/" target="_blank" rel="noopener noreferrer">
                  <FiLinkedin className = "social-icon"/>
                  </a>
            </div>
          </div>
        </div>

        <div className="home-image">
          <div className="profile-image-wrapper">
            <div className="glow-effect"></div>
            <img
              src={Mine}
              alt="Anurag's Profile"
              className="profile-image"
            />
          </div>
        </div>
      </div>

      <div className="tech-stack">
        <span>Tech Stack:</span>
        <div className="tech-icons">
          {Object.keys(techDefinitions).map((tech) => (
            <TechItem
              key={tech}
              tech={tech}
              definition={techDefinitions[tech]}
              isActive={selectedTech === tech}
              onClick={() => handleTechClick(tech)}
            />
          ))}
        </div>

        {selectedTech && (
          <div className="tech-definition">
            <h4>{selectedTech}</h4>
            <p>{techDefinitions[selectedTech]}</p>
            <button
              className="close-definition"
              onClick={() => setSelectedTech(null)}
              aria-label="Close definition"
            >
              ×
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Home;