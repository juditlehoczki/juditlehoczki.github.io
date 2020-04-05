import React from "react";
import newsFrontend from "../img/news-frontend.png";
import newsBackend from "../img/news-backend.png";
import hangman from "../img/hangman.png";
import reubenAlldridge from "../img/reuben-alldridge.png";
import portfolio from "../img/portfolio.png";

import S from "./StyledComponent";

const projects = [
  {
    name: "The Daily News - Frontend",
    intro: "A Reddit-like news site",
    description:
      "A Reddit-like news site for articles by topics and by authors with the belonging comments and optional voting. Comes with two switchable themes. Frontend to an RESTful API server that has also been created by me.",
    techStack: "Node JS, Axios, React, Reach Router, Moment, Styled-Components",
    image: newsFrontend,
    gitHubRepo: "https://github.com/juditlehoczki/news-frontend",
    liveUrl: "https://press-jl.netlify.com/",
    date: "March 2020",
  },
  {
    name: "The Daily News - Backend",
    intro: "A RESTful API server",
    description:
      "A RESTful API server developed with full TDD. Created to serve up articles by topics or authors with related comments and votes count. Backend to a reddit-like news site.",
    techStack:
      "Node JS, Express, Knex, PostgreSQL, Nodemon. Tested with Supertest, Mocha and Chai",
    image: newsBackend,
    gitHubRepo: "https://github.com/juditlehoczki/news-backend",
    liveUrl: "https://press-jl.netlify.com/",
    date: "March 2020",
  },
  {
    name: "Hangman",
    intro: "The Classic Hangman Game",
    description:
      "The Classic Hangman Game Styled For International Women's Day",
    techStack: "",
    image: hangman,
    gitHubRepo: "https://github.com/juditlehoczki/hangman",
    liveUrl: "https://hangman-iwd2020.netlify.com/",
    date: "March 2020",
  },
  {
    name: "Reuben Alldridge",
    intro: "The Trombonist",
    description:
      "A single page brochure type static website created for Reuben Alldridge, trombonist and music teacher.",
    techStack: "Node JS, React, Styled Components",
    image: reubenAlldridge,
    gitHubRepo: "https://github.com/juditlehoczki/reuben-alldridge",
    liveUrl: "https://reuben-alldridge.netlify.com/",
    date: "March 2020",
  },
  {
    name: "My Personal Portfolio",
    intro: "Judit Lehoczki - Software Developer",
    description:
      "A single page brochure type static website created for Reuben Alldridge, trombonist and music teacher.",
    techStack: "Node JS, Axios, React, Reach Router, Moment, Styled-Components",
    image: portfolio,
    gitHubRepo: "https://github.com/juditlehoczki/juditlehoczki.github.io",
    liveUrl: "https://juditlehoczki.me/",
    date: "March 2020",
  },
];

const ProjectList = () => {
  return (
    <S.ProjectsListContainer>
      {projects.map((project) => {
        return (
          <a
            className="blogPreviewCard"
            key={project.name}
            href={project.gitHubRepo}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h1>{project.name}</h1>
            <div className="intro">{project.intro}</div>
            <img src={project.image} alt="screenshot" width="100%" />
            <p>{project.description}</p>
            <p style={{ "padding-bottom": 20 }}>
              Built with {project.techStack}.
            </p>
            <p className="readmore">Click for more &gt;&gt;</p>
          </a>
        );
      })}
    </S.ProjectsListContainer>
  );
};

export default ProjectList;
