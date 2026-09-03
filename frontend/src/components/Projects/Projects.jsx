// components/Projects.jsx
import { useState } from 'react';
import { FiGithub, FiExternalLink } from 'react-icons/fi';
import Reveal from '../Reveal';
import Usability from "../../assets/UsabilityHub.png";
import NextBuy from "../../assets/NextBuy.png";
import QrGenerator from "../../assets/QrGenerator.png";
import BgRemover from "../../assets/BgRemover.png";
import Portfolio_1 from "../../assets/Portfolio_1.png";
import PasswordValidator from "../../assets/Password-Validator.png";
import AiTextHumanizer from "../../assets/Ai_text_humanizer.png"
import WeatherApp from "../../assets/WeatherApp.png"
import QuizApp from "../../assets/QuizApp.png";
import ZestyBite from "../../assets/ZestyBite.png";
import QrCode from "../../assets/Qr Code Scanner.jpg";
import TicTacToe from "../../assets/TicTacToe.jpg";
import UrlShort from "../../assets/UrlShort.jpg";
import './Projects.css';

const Projects = () => {
  const [selectedTag, setSelectedTag] = useState('All');

  const projects = [
    {
      id: 1,
      title: "Usability Hub",
      description: "Usability Hub Website using HTML CSS",
      tags: ["HTML", "CSS"],
      demo: "https://anuragggggggggggg.github.io/UsabilityHub/",
      code: "https://github.com/ANURAGGGGGGGGGGGG/Website",
      image: Usability
    },
    {
      id: 2,
      title: "ShopLux",
      description: "Real-time product adding, edit, Delete Functionality ",
      tags: ["React", "Express", "Node.js", "MongoDb"],
      demo: "https://ecommerce-rust-six-96.vercel.app/",
      code: "https://github.com/ANURAGGGGGGGGGGGG/Ecommerce",
      image: "https://i.postimg.cc/vHb0Cvxc/Screenshot-2026-05-30-163632.png`"
    },
    {
      id: 3,
      title: "Portfolio Old",
      description: "1st Portfolio using HTML CSS JS",
      tags: ["HTML", "CSS", "JS"],
      demo: "https://anuragggggggggggg.github.io/Portfolioo/",
      code: "https://github.com/ANURAGGGGGGGGGGGG/Portfolioo",
      image: Portfolio_1
    },
    {
      id: 4,
      title: "Qr Code Generator",
      description: "Qr Code Generator For User Input",
      tags: ["React"],
      demo: "https://anuragggggggggggg.github.io/qr-code-generator/",
      code: "https://github.com/ANURAGGGGGGGGGGGG/qr-code-generator/blob/main/src/Qr_Generator.jsx",
      image: QrGenerator
    },
    {
      id: 5,
      title: "Image Background Remover",
      description: "Image Background Remover Using React.js",
      tags: ["React"],
      demo: "https://anuragggggggggggg.github.io/imageBgRemover/",
      code: "https://github.com/ANURAGGGGGGGGGGGG/imageBgRemover",
      image: BgRemover
    },
    {
      id: 6,
      title: "Password Validator",
      description: "This is a password checker which shows ur passowrd is strong or not",
      tags: ["React"],
      demo: "https://anuragggggggggggg.github.io/password-validator/",
      code: "https://github.com/ANURAGGGGGGGGGGGG/password-validator",
      image: PasswordValidator

    },
    {
      id: 7,
      title: "Ai Text Humanizer",
      description: "AI-generated text into natural, human-like content",
      tags: ["React", "Vite", "CSS"],
      demo: "https://anuragggggggggggg.github.io/ai-text-humanizer/",
      code: "https://github.com/ANURAGGGGGGGGGGGG/ai-text-humanizer",
      image: AiTextHumanizer
    },
    {
      id: 8,
      title: "Weather App",
      description: "Get current weather and 5-day forecast by city or zip code, with clear info and helpful error messages.",
      tags: ["React", "Vite", "CSS", "Bootstrap"],
      demo: "https://anuragggggggggggg.github.io/weather-app/",
      code: "https://github.com/ANURAGGGGGGGGGGGG/weather-app",
      image: WeatherApp
    },
    {
      id: 9,
      title: "Quiz App",
      description: "Test your knowledge with these quiz questions!",
      tags: ["React", "Vite", "CSS", "Bootstrap", "Open Trivia Database API"],
      demo: "https://anuragggggggggggg.github.io/quiz-app/",
      code: "https://github.com/ANURAGGGGGGGGGGGG/quiz-app",
      image: QuizApp
    },
    {
      id: 10,
      title: "Zesty Bite",
      description: "A modern Food Delivery App",
      tags: ["Next.js", "Tailwind CSS"],
      demo: "https://zesty-bite-iota.vercel.app/",
      code: "https://github.com/ANURAGGGGGGGGGGGG/zesty-bite",
      image: ZestyBite
    },
    {
      id: 11,
      title: "Qr Code Scanner",
      description: "Unlock Seamless QR Scanning with Our Next.js-Powered Solution!",
      tags: ["Next.js", "Tailwind CSS"],
      demo: "https://qr-plum-zeta.vercel.app/",
      code: "https://github.com/ANURAGGGGGGGGGGGG/Qr",
      image: QrCode
    },
    {
      id: 12,
      title: "Tic Tac Toe",
      description: "Tic Tac Toe the classic game using the latest in modern web development",
      tags: ["Next.js", "Tailwind CSS"],
      demo: "https://tic-tac-toe-xi-sandy.vercel.app/",
      code: "https://github.com/ANURAGGGGGGGGGGGG/tic-tac-toe",
      image: TicTacToe
    },
    {
      id: 13,
      title: "Url Shortner",
      description: "Privacy-First URL Shortener URL shortening with complete privacy protection",
      tags: ["Next.js", "Tailwind CSS"],
      demo: "https://url-shortner-ten-beta.vercel.app/",
      code: "https://github.com/ANURAGGGGGGGGGGGG/url_shortner",
      image: UrlShort
    },
    {
      id: 14,
      title: "E‑commerce Website (ShopEasy)",
      description: "Checkout flow with accurate totals, instant status & polished UI",
      tags: ["Next.js", "Tailwind CSS"],
      demo: "https://future-fs-02-red.vercel.app/",
      code: "https://github.com/ANURAGGGGGGGGGGGG/FUTURE_FS_02",
      image: "https://i.postimg.cc/MZrzb0Ry/image.png"
    },
    {
      id: 14,
      title: "BrewMate (Coffee Shop Web App)",
      description: "BrewMate ☕ – A modern web app for easy coffee ordering.",
      tags: ["Next.js", "Tailwind CSS", "React"],
      demo: "https://future-fs-03-gamma.vercel.app/",
      code: "https://github.com/ANURAGGGGGGGGGGGG/FUTURE_FS_03",
      image: "https://i.postimg.cc/bJgwjKsV/image.png"
    },
    {
      id: 15,
      title: "Meme Generator",
      description: "A Privacy-Focused Web App for Creating Hilarious Memes! 😂",
      tags: ["Next.js", "Tailwind CSS", "React" , "Html"],
      demo: "https://meme-generator-rosy-five.vercel.app/",
      code: "https://github.com/ANURAGGGGGGGGGGGG/meme-generator",
      image: "https://i.postimg.cc/yNVJSTCc/Screenshot-2025-10-29-172657.png"
    },
    {
      id: 16,
      title: "Screenly ",
      description: "Secure, Scalable Digital Signage",
      tags: ["Next.js", "Tailwind CSS", "React" , "Html"],
      demo: "https://moviee-app-lemon.vercel.app/",
      code: "https://github.com/ANURAGGGGGGGGGGGG/moviee-app",
      image: "https://i.postimg.cc/02dc1nf5/Screenshot-2025-10-06-221908.png"
    },
    {
      id: 17,
      title: "Sketchboard",
      description: "A fast, minimal drawing app built with Next.js and Tailwind CSS.",
      tags: ["Next.js", "Tailwind CSS", "React" , "Html"],
      demo: "https://drawing-app-omega-two.vercel.app/",
      code: "https://github.com/ANURAGGGGGGGGGGGG/drawing-app",
      image: "https://i.postimg.cc/hPzwXMnM/image.png"
    },
    {
      id: 18,
      title: "Email Spam Report Tool",
      description: "Inbox/Spam/Promotions",
      tags: ["Next.js", "Tailwind CSS", "React" , "Html"],
      demo: "https://email-spammer-tool.vercel.app/",
      code: "https://github.com/ANURAGGGGGGGGGGGG/email-spammer-tool",
      image: "https://i.postimg.cc/MpYhwHxb/image.png"
    },
    {
      id: 19,
      title: "Survey Insights Tool",
      description: " — Create, Share, Analyze",
      tags: ["Next.js", "Tailwind CSS", "React" , "Html"],
      demo: "https://survey-app-puce.vercel.app/",
      code: "https://github.com/ANURAGGGGGGGGGGGG/survey-app",
      image: "https://i.postimg.cc/ydMJ6Rb7/image.png"
    },
    {
      id: 20,
      title: "🎬 Netflix Clone",
      description: "Stream, Browse, Discover",
      tags: ["Next.js", "Tailwind CSS", "React" , "Html"],
      demo: "https://netflix-clone-ten-ruddy-20.vercel.app/",
      code: "https://github.com/ANURAGGGGGGGGGGGG/netflix-clone",
      image: "https://i.postimg.cc/TY2mfL6y/image.png"
    },
    {
      id: 21,
      title: "Parallex Website",
      description: "Depth, Motion, Storytelling",
      tags: ["Next.js", "Tailwind CSS", "React" , "Html"],
      demo: "https://parallex-landing.vercel.app/",
      code: "https://github.com/ANURAGGGGGGGGGGGG/parallex-landing",
      image: "https://i.postimg.cc/QMgycvZt/image.png"
    }

  ];

  const tags = ['All', 'React', 'Vite', 'JS', 'Node.js', 'MongoDb', 'Express', 'HTML', 'CSS', "Next.js"];

  const filteredProjects = selectedTag === 'All'
    ? projects
    : projects.filter(project => project.tags.includes(selectedTag));

  return (
    <section className="projects-section">
      <div className="projects-container">
        <Reveal direction="up">
          <h2 className="section-title">My Projects</h2>
        </Reveal>

        <Reveal className="filter-tags" delay={120}>
          {tags.map(tag => (
            <button
              key={tag}
              className={`tag ${selectedTag === tag ? 'active' : ''}`}
              onClick={() => setSelectedTag(tag)}
            >
              {tag}
            </button>
          ))}
        </Reveal>

        <div className="projects-grid">
          {filteredProjects.map((project, index) => (
            <Reveal
              key={`${selectedTag}-${project.id}-${index}`}
              direction="up"
              delay={(index % 3) * 100}
            >
              <div className="project-card">
                <div className="project-image">
                  <img src={project.image || '/default-project.jpg'} alt={project.title} />
                  <div className="project-links">
                    <a href={project.demo} target="_blank" rel="noopener noreferrer">
                      <FiExternalLink className="icon" />
                    </a>
                    <a href={project.code} target="_blank" rel="noopener noreferrer">
                      <FiGithub className="icon" />
                    </a>
                  </div>
                </div>

                <div className="project-content">
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.description}</p>

                  <div className="project-tags">
                    {project.tags.map(tag => (
                      <span key={tag} className="tech-tag">{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;