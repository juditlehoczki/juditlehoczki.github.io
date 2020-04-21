import React from "react";
import newsFrontend from "../img/news-frontend.png";
import newsBackend from "../img/news-backend.png";
import hangman from "../img/hangman.png";
import reubenAlldridge from "../img/reuben-alldridge.png";
import portfolio from "../img/portfolio.png";
import pokemon from "../img/pokemonbattler.gif";
import helpinghand from "../img/helpinghand.png";

import S from "./StyledComponent";

const projects = [
  {
    name: "Helping Hand",
    intro: "A full stack mobile application for Android and iOS",
    description:
      "Help the vulnerable by doing their shopping for them! A full stack mobile application inspired by the current lockdown situation where people at higher risk can send in their shopping list and volunteers who live within the same area can pick them up and help out. My graduation project at Northcoders made with two other coders. Our deadline to finish this project is 20th April and the demo video will be live streamed on 24th April on YouTube so please make sure you come back to see what we've made!",
    techStack:
      "Node JS, MongoDB, Mongoose, GraphQL, Express, Bcrypt, Firebase, Google APIs at the backend and Dart + Flutter at the frontend",
    image: helpinghand,
    buttons: {
      gitHubRepo: "",
      demo: "",
    },
    date: "April 2020",
  },
  {
    name: "The Daily News - Frontend",
    intro: "A Reddit-like news site",
    description:
      "A Reddit-like news site for articles by topics and by authors with the belonging comments and optional voting. Comes with two switchable themes. Frontend to a RESTful API server that has also been created by me.",
    techStack:
      "Node JS, Axios, React, Reach Router, Moment and Styled-Components",
    image: newsFrontend,
    buttons: {
      gitHubRepo: "https://github.com/juditlehoczki/news-frontend",
      liveUrl: "https://press-jl.netlify.com/",
    },
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
    buttons: {
      gitHubRepo: "https://github.com/juditlehoczki/news-backend",
      liveUrl: "https://press-jl.herokuapp.com/api",
    },
    date: "March 2020",
  },
  {
    name: "Judit Lehoczki",
    intro: "My Personal Portfolio Site",
    description:
      "This very website to showcase my portfolio and my blog that is accessed through Dev.to's API.",
    techStack:
      "Node JS, Axios, React, Reach Router, Moment and Styled-Components",
    image: portfolio,
    buttons: {
      gitHubRepo: "https://github.com/juditlehoczki/juditlehoczki.github.io",
      liveUrl: "https://juditlehoczki.me/",
    },
    date: "March 2020",
  },
  {
    name: "Hangman",
    intro: "The Classic Hangman Game",
    description:
      "The classic Hangman game styled for International Women's Day. The game is available to play in two languages and in three difficulty levels. The main goal was to create something for International Women's Day that my Mum, who doesn't speak English, can also use.",
    techStack: "Node Js and React",
    image: hangman,
    buttons: {
      gitHubRepo: "https://github.com/juditlehoczki/hangman",
      liveUrl: "https://hangman-iwd2020.netlify.com/",
    },
    date: "March 2020",
  },
  {
    name: "TheTromboist.org",
    intro: "A brochure type single page website",
    description:
      "A brochure type single page website created for Reuben Alldridge, trombonist and music teacher.",
    techStack: "Node JS, React and Styled Components",
    image: reubenAlldridge,
    buttons: {
      gitHubRepo: "https://github.com/juditlehoczki/reuben-alldridge",
      liveUrl: "https://www.thetrombonist.org/",
    },
    date: "March 2020",
  },
  {
    name: "Pokemon Battler",
    intro: "A Command Line Game",
    description:
      "A Pokemon Battler game to be played in the command line. Made in my coding bootcamp to practise working with JavaScript classes.",
    techStack: "Vanilla JavaScript, Inquirer",
    image: pokemon,
    buttons: {
      gitHubRepo: "https://github.com/juditlehoczki/pokemon-battler/",
    },
    date: "February 2020",
  },
];

const ProjectList = () => {
  return (
    <S.ProjectsListContainer>
      {projects.map((project) => {
        return (
          <div className="blogPreviewCard">
            <h1>{project.name}</h1>
            <div className="intro">{project.intro}</div>
            {project.image ? (
              <img src={project.image} alt="screenshot" />
            ) : null}
            <p>{project.date}</p>
            <p>{project.description}</p>
            <p style={{ "padding-bottom": "75px" }}>
              Built with {project.techStack}.
            </p>
            <div className="linkButtonsContainer">
              {!project.liveUrl ? (
                <div style={{ "font-size": "1.2em" }}></div>
              ) : (
                <div style={{ "font-size": "1.2em" }}>
                  Want to see more? Click below!
                </div>
              )}
              <div className="linkButtons">
                {project.buttons.gitHubRepo ? (
                  <a
                    key={project.name}
                    href={project.buttons.gitHubRepo}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i class="fas fa-code"></i>
                    <p>Code.</p>
                  </a>
                ) : null}
                {project.buttons.liveUrl ? (
                  <a
                    key={project.name}
                    href={project.buttons.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i class="fas fa-laptop"></i>
                    <p>Live site.</p>
                  </a>
                ) : null}
                {project.buttons.demo ? (
                  <a
                    key={project.name}
                    href={project.buttons.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i class="fas fa-film"></i>
                    <p>Demo video.</p>
                  </a>
                ) : null}
              </div>
            </div>
          </div>
        );
      })}
    </S.ProjectsListContainer>
  );
};

export default ProjectList;
