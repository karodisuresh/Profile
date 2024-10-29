import "./portfolio.css";

import IMG1 from "../../assets/interview.jpg";
import IMG2 from "../../assets/learning.jpg";
import IMG3 from "../../assets/Startup Agency Project.jpg";
import IMG4 from "../../assets/Score keeper.png";
import IMG5 from "../../assets/blog.jpg";
import React from "react";

//Portfolio function
const Portfolio = () => {
  const soloProjects = [
    {
      id: 1,
      title: "Mock Interview Preparation Project",
      img: IMG1,
      description:
        "AI MOCKINTERVIEW—a tool designed to help users prepare for interviews through personalized mock interview sessions.",
        technologies: "Html | CSS | Javascript | React Js",

      link: "https://idyllic-klepon-6aec0b.netlify.app/",
      github: "https://github.com/karodisuresh/MockInterview_backend",
    },
    {
      id: 2,
      title: "SCORE KEEPER",
      img: IMG4,
      description:
        "This project is live cricket scoring board with comments ",
      technologies: "HTML | CSS | JavaScript",
      link: "https://extraordinary-elf-cc5bb9.netlify.app/",
      github: "https://github.com/karodisuresh/SCORE-KEEPER-APP",
    },
    {
      id: 3,
      title: "Learning Page ",
      img: IMG2,
      description: "It is help to learn the some basic concepts of the learning .It will helps to understand the basic concepts of the learning",
      technologies: "HTML | CSS | JavaScript",
      link: "https://voluble-kulfi-cdc5ad.netlify.app/",
      github: "https://github.com/karodisuresh/Learning_site",
    },
    {
      id: 4,
      title: "Startup Landing Page",
      img: IMG3,
      description:
        "A dedicated, standalone web page built for specific campaigns and target audiences.",
      technologies: "Html | CSS | JavaScript | React Js",
      link: "https://aesthetic-stardust-6e45ad.netlify.app/",
      github: "https://github.com/karodisuresh/greenzine-webapp",
    },
    {
      id: 5,
      title: "BLog",
      img: IMG5,
      description:
        "It is  live comments and you can the latest information in top level and you can delete comments ",
      technologies: "Html | Styled-components | JavaScript",
      link: "https://chipper-basbousa-aa7322.netlify.app/",
      github: "https://github.com/karodisuresh/Blog",
    },
    // {
    //   id: 6,
    //   title: "Fs Poster Website",
    //   img: IMG6,
    //   description:
    //     "Real-world group project which is still in progress and will provide educational platform for future young developers",
    //   technologies: "Html | Scss | Javascript",
    //   link: "https://fs-poster-project.vercel.app/",
    //   github: "https://github.com/Rasif-Taghizada/Fs-Poster-Project",
    // },
  ];

  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {soloProjects.map((pro) => (
          <article className="portfolio__item" key={pro.id}>
            <div className="portfolio__item-image">
              <img src={pro.img} alt={pro.title} />
            </div>
            <div className="portfolio__item-content">
              <h3>{pro.title}</h3>
              <p>{pro.description}</p>
              <p>{pro.technologies}</p>
            </div>
            <div className="portfolio__item-cta">
              <a
                href={pro.github}
                target="_blank"
                className="btn"
                rel="noreferrer"
              >
                GitHub
              </a>
              <a
                href={pro.link}
                target="_blank"
                className="btn btn-primary"
                rel="noreferrer"
              >
                Live Demo
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
