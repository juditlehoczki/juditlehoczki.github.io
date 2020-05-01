import React from "react";
import newsFE from "../img/news-frontend.png";
import newsBE from "../img/news-backend.png";
import hangman from "../img/hangman.png";
import reuben from "../img/reuben-alldridge.png";
import portfolio from "../img/portfolio.png";
import pokemon from "../img/pokemonbattler.gif";
import helpinghandFE1 from "../img/helpinghand.png";
import helpinghandFE2 from "../img/helping-hand.gif";
import helpinghandBE from "../img/helpinghand-backend.png";
import guardian1 from "../img/guardian.png";
import guardian2 from "../img/guardian.gif";

import S from "./StyledComponent";

const projects = [
  {
    name: "The Guardian Search",
    intro: "A cross-platform mobile application",
    description:
      "Search The Guardian's articles by entered keyword(s) or browse the categories and request their content articles. The results are displayed with appropriate pagination. At the bottom of the app there's a dummy subscription field with inline email address validation and a pop-up alert window when subscribing.",
    techStack:
      "Node JS, React-Native and The Guardian's API. Tested with Jest.",
    image: [guardian1, guardian2],
    buttons: {
      gitHubRepo: "https://github.com/juditlehoczki/search-the-guardian",
    },
    date: "April 2020",
    timeFrame: "3 days",
  },
  {
    name: "Helping Hand - Frontend",
    intro: "A full stack mobile application for Android and iOS",
    description:
      "Help the vulnerable by doing their shopping for them! A full stack mobile application inspired by the current lockdown situation where people at higher risk can send in their shopping list and volunteers who live within the same area can pick them up and help out. My graduation project at Northcoders made with two other coders. Demo video to come on 24th April!",
    techStack: "Node JS, Dart + Flutter, Firebase and Google Maps API.",
    image: [helpinghandFE1, helpinghandFE2],
    buttons: {
      gitHubRepo: "",
      demo: "https://youtu.be/0aof27FyHCc",
    },
    date: "April 2020",
    timeFrame: "2 weeks (front & backend)",
  },
  {
    name: "Helping Hand - Backend",
    intro: "An Express API Server with GraphQL",
    description:
      "Backend to Helping Hand with a MongoDB database to store users and shopping lists and a GraphQL server for handling http requests and database updates. My graduation project at Northcoders made with two other coders within our given two weeks time frame.",
    techStack:
      "Node JS, MongoDB, Mongoose, GraphQL, Express, Bcrypt, Firebase, Google's Geolocation and Distance Matrix APIs.",
    image: [helpinghandBE],
    buttons: {
      gitHubRepo: "https://github.com/juditlehoczki/helping-hand-backend",
      liveUrl: "http://helping-hand-kjc.herokuapp.com/graphql",
    },
    date: "April 2020",
    timeFrame: "2 weeks (front & backend)",
  },
  {
    name: "The Daily News - Frontend",
    intro: "A Reddit-like news site",
    description:
      "A Reddit-like news site for articles by topics and by authors with the belonging comments and optional voting. Comes with two switchable themes. Frontend to a RESTful API server that has also been created by me.",
    techStack:
      "Node JS, Axios, React, Reach Router, Moment and Styled-Components.",
    image: [newsFE],
    buttons: {
      gitHubRepo: "https://github.com/juditlehoczki/news-frontend",
      liveUrl: "https://press-jl.netlify.com/",
    },
    date: "March 2020",
    timeFrame: "1 week",
  },
  {
    name: "The Daily News - Backend",
    intro: "A RESTful API server",
    description:
      "A RESTful API server developed with full TDD. Created to serve up articles by topics or authors with related comments and votes count. Backend to a reddit-like news site.",
    techStack:
      "Node JS, Express, Knex, PostgreSQL, Nodemon. Tested with Supertest, Mocha and Chai.",
    image: [newsBE],
    buttons: {
      gitHubRepo: "https://github.com/juditlehoczki/news-backend",
      liveUrl: "https://press-jl.herokuapp.com/api",
    },
    date: "March 2020",
    timeFrame: "1 week",
  },
  {
    name: "Judit Lehoczki",
    intro: "My Personal Portfolio Site",
    description:
      "This very website to showcase my portfolio and my blog that is accessed through Dev.to's API.",
    techStack:
      "Node JS, Axios, React, Reach Router, Moment and Styled-Components.",
    image: [portfolio],
    buttons: {
      gitHubRepo: "https://github.com/juditlehoczki/juditlehoczki.github.io",
      liveUrl: "https://juditlehoczki.me/",
    },
    date: "March 2020",
    timeFrame: "ongoing",
  },
  {
    name: "Hangman",
    intro: "The Classic Hangman Game",
    description:
      "The classic Hangman game styled for International Women's Day. The game is available to play in two languages and in three difficulty levels. The main goal was to create something for International Women's Day that my Mum, who doesn't speak English, can also use.",
    techStack: "Node Js and React.",
    image: [hangman],
    buttons: {
      gitHubRepo: "https://github.com/juditlehoczki/hangman",
      liveUrl: "https://hangman-iwd2020.netlify.com/",
    },
    date: "March 2020",
    timeFrame: "2 days",
  },
  {
    name: "TheTromboist.org",
    intro: "A brochure type single page website",
    description:
      "A brochure type single page website created for Reuben Alldridge, trombonist and music teacher.",
    techStack: "Node JS, React and Styled Components.",
    image: [reuben],
    buttons: {
      gitHubRepo: "https://github.com/juditlehoczki/reuben-alldridge",
      liveUrl: "https://www.thetrombonist.org/",
    },
    date: "March 2020",
    timeFrame: "1 day",
  },
  {
    name: "Pokemon Battler",
    intro: "A Command Line Game",
    description:
      "A Pokemon Battler game to be played in the command line. Made in my coding bootcamp to practise working with JavaScript classes.",
    techStack: "Vanilla JavaScript and Inquirer. Tested with Mocha and Chai.",
    image: [pokemon],
    buttons: {
      gitHubRepo: "https://github.com/juditlehoczki/pokemon-battler/",
    },
    date: "February 2020",
    timeFrame: "2 days",
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
            <p style={{ fontSize: "1em" }}>{project.date}</p>
            {project.image ? (
              <div className="imagesContainer">
                {project.image.map((image) => {
                  return <img src={image} alt="screenshot" />;
                })}
              </div>
            ) : null}
            <p>{project.description}</p>
            <p>
              <span>Time Frame:</span> {project.timeFrame}
            </p>
            <p style={{ "margin-bottom": "85px" }}>
              <span className="pink">Tech Stack:</span> {project.techStack}
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
                    href={project.buttons.demo}
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
