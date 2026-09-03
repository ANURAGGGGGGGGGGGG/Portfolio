// components/Skills.jsx
import { useEffect, useRef, useState } from 'react';
import './Skills.css';
import { FiDatabase, FiCode, FiCloud, FiTool } from 'react-icons/fi';

const SkillItem = ({ name, level }) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isVisible) {
      const duration = 1500;
      const start = Date.now();
      
      const animate = () => {
        const now = Date.now();
        const elapsed = now - start;
        const progress = Math.min(elapsed / duration, 1);
        setCount(Math.floor(progress * level));

        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };

      requestAnimationFrame(animate);
    }
  }, [isVisible, level]);

  return (
    <div className="skill-item" ref={ref}>
      <div className="skill-info">
        <span>{name}</span>
        <span>{count}%</span>
      </div>
      <div className="skill-progress">
        <div 
          className="progress-bar" 
          style={{ 
            width: isVisible ? `${level}%` : '0%',
            transition: 'width 1.5s ease-out' 
          }}
        />
      </div>
    </div>
  );
};

const Skills = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const skills = {
    // ... keep your skills data same as before
    frontend: {
      icon: <FiCode />,
      title: "Frontend Development",
      items: [
        { name: "HTML5", level: 95 },
        { name: "CSS3", level: 90 },
        { name: "JavaScript", level: 85 },
        { name: "React", level: 80 },
        { name: "Vite", level: 85 },
        {name : "Next.js" , level : 70}
      ]
    },
    backend: {
      icon: <FiCloud />,
      title: "Backend Development",
      items: [
        { name: "Node.js", level: 80 },
        { name: "Express", level: 75 },
        { name: "REST APIs", level: 80 }
      ]
    },
    database: {
      icon: <FiDatabase />,
      title: "Database",
      items: [
        { name: "MongoDB", level: 75 },
        { name: "Mongoose", level: 70 }
      ]
    },
    tools: {
      icon: <FiTool />,
      title: "Tools & Other",
      items: [
        { name: "Git", level: 80 },
        { name: "VS Code", level: 90 },
        { name: "Postman", level: 75 }
      ]
    }
  };

  return (
    <section 
      className={`skills-section ${isVisible ? 'visible' : ''}`} 
      ref={sectionRef}
    >
      <div className="skills-container">
        <h2 className="section-title">Technical Skills</h2>
        
        <div className="skills-grid">
          {Object.entries(skills).map(([category, data], index) => (
            <div
              key={category}
              className="skill-category"
              style={{ transitionDelay: `${index * 130}ms` }}
            >
              <div className="category-header">
                <span className="category-icon">{data.icon}</span>
                <h3>{data.title}</h3>
              </div>
              
              <div className="skills-list">
                {data.items.map((skill) => (
                  <SkillItem
                    key={skill.name}
                    name={skill.name}
                    level={skill.level}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;