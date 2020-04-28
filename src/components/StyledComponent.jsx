import styled, { css, keyframes } from "styled-components";

const S = {};

const theme = {
  fonts: {
    title: '"Amatic SC", cursive',
    title2: '"Fredericka the Great", cursive;',
    main: '"Josefin Slab", serif',
  },
  colours: {
    grey1: "#333333",
    white: "#ede6d6",
    main: "#ff007f",
  },
};

const NavAndFooter = css`
  padding: 0.5em;
  position: fixed;
  background-color: ${theme.colours.grey1};
  width: 100%;
  text-align: center;
  z-index: 1;
  a {
    color: ${theme.colours.white};
    text-decoration: none;
    padding: 0rem 2rem;
    font-family: "Amatic SC", cursive;
    font-size: 2em;
    font-weight: bold;
    @media (max-width: 420px) {
      padding: 5px;
    }
  }
  a: hover {
    border-bottom: 1px solid ${theme.colours.main};
    color: ${theme.colours.main};
  }
  .dot {
    color: ${theme.colours.main};
    font-family: Arial, "Times New Roman", Times, serif;
  }
`;

const Main = css`
  padding: 9vh 8vh;
  @media (max-width: 420px) {
    padding-top: 75px;
    padding-bottom: 60px;
    padding-left: 5px;
    padding-right: 5px;
  }
  height: 100%;
  width: 100%;
  box-sizing: border-box;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Card = css`
  border: 1px ${theme.colours.main} solid;
  border-radius: 20px;
  padding: 15px;
  margin: 10px;
  @media (max-width: 420px) {
    margin-bottom: 5px;
  }
  background-color: ${theme.colours.white};
  color: ${theme.colours.grey1};
  text-decoration: none;
  text-align: justify;
  flex-grow: 1;

  h1 {
    margin: 0px;
    font-size: 1.2em;
    font-family: "Fredericka the Great", cursive;
    font-weight: normal;
  }

  div {
    margin: 0px;
    font-size: 0.8em;
    display: flex;
    justify-content: space-between;
    font-weight: bold;
    line-height: 1.2;
    font-family: "Josefin Slab", serif;
  }

  .intro {
    color: ${theme.colours.main};
    font-size: 1.2em;
    margin-top: 10px;
    margin-bottom: 10px;
  }

  .pink {
    color: ${theme.colours.main};
    font-weight: bold;
  }

  p {
    margin: 0px;
    font-size: 1.2em;
    font-family: "Josefin Slab", serif;
    line-height: 1.2;
  }

  .readmore {
    font-size: 1em;
    text-align: right;
    font-weight: bold;
    margin-top: 5px;
  }
`;

const CardAnim = css`
  transition: transform 300ms ease-in-out;
  :hover {
    transform: scale(1.1) rotate(2deg);
    background-color: #d5cfc0;
    box-shadow: 5px 10px 8px #888888;
  }
`;

const Container = css`
  ${Main}
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: stretch;
`;

S.App = styled.div`
  margin: 0px;
  width: 100%;
  height: 100vh;
`;

S.NavBar = styled.nav`
  ${NavAndFooter};
  top: 0px;
  @media (max-width: 420px) {
    .pcNavbar {
      display: none;
    }
    .mobileNavbar {
      margin: 0 auto;
      display: flex;
      justify-content: space-evenly;
      font-size: 1em;
      a {
        display: flex;
        flex-direction: column;
      }
      .text {
        font-size: 0.5em;
        font-style: normal;
      }
    }
  }
  @media (min-width: 420px) {
    .mobileNavbar {
      display: none;
    }
  }
`;

S.Footer = styled.footer`
  ${NavAndFooter};
  bottom: 0px;
`;

S.Welcome = styled.main`
  ${Main}
  height: 100vh;

  @keyframes welcomeAnim {
    0% {
      font-size: 4em;
    }
    100% {
    }
  }
  h1 {
    font-family: ${theme.fonts.title};
    font-size: 10em;
    @media (max-width: 420px) {
      font-size: 8em;
    }
    line-height: 0.75em;
    color: ${theme.colours.grey1};
    margin-bottom: 0px;
    animation: welcomeAnim 4s;
  }
  h2 {
    font-family: ${theme.fonts.title};
    font-size: 3em;
    @media (max-width: 420px) {
      font-size: 2em;
    }
    color: ${theme.colours.main};
    margin-top: 0px;
  }
`;

S.About = styled.main`
  ${Main}
  text-align: justify;
  img {
    margin: 10px;
    max-width: 100%;
  }
  a {
    font-family: ${theme.fonts.title};
    font-size: 1.5em;
    text-decoration: none;
    color: ${theme.colours.grey1};
    margin: 5px;
    @media (max-width: 420px) {
      font-size: 1.2em;
      margin-top: 18px;
    }
  }
  a: hover {
    color: ${theme.colours.main};
    box-shadow: 2px 3px 5px #888888;
    border-radius: 5px;
  }
`;

S.BlogsListContainer = styled.main`
  ${Container};
  .blogPreviewCard {
    ${Card}
    ${CardAnim};
    min-width: 280px;
    max-width: 500px;
    .reactions {
      @media (max-width: 420px) {
        display: none;
      }
    }
  }
`;

S.BlogIndividual = styled.main`
  ${Main};
  font-family: ${theme.fonts.main};
  font-size: 1.3em;
  line-height: 1.6;
  border: 3px ${theme.colours.main} solid;
  border-radius: 20px;
  background-color: ${theme.colours.white};
  margin: 10vh auto;
  width: 80%;
  @media (max-width: 420px) {
    line-height: 1.2;
    width: 95%;
    border: none;
    padding-top: 85px;
    margin: 0px auto;
  }
  div {
    align-self: flex-start;
    text-align: justify;
    text-indent: 20px;
  }
  img {
    width: 90%;
    min-width: 260px;
    border-radius: 20px;
    border: 1px ${theme.colours.grey1} solid;
  }
  h1 {
    color: ${theme.colours.main};
    font-family: ${theme.fonts.title};
    text-indent: 0px;
    font-size: 1.5em;
  }
  h2 {
    font-family: ${theme.fonts.title2};
    font-weight: normal;
    font-size: 1.2em;
    text-indent: 0px;
  }
  a {
    color: ${theme.colours.grey1};
    text-decoration: underline ${theme.colours.main};
  }
  a: hover {
    color: ${theme.colours.white};
    text-decoration: none;
    background-color: ${theme.colours.grey1};
  }
`;

S.ProjectsListContainer = styled.main`
  ${Container};
  .blogPreviewCard {
    position: relative;
    ${Card}
    min-width: 280px;
    max-width: 350px;
    .imagesContainer {
      display: flex;
      flex-direction: row;
      justify-content: center;
    }
    img {
      background: none;
      max-width: 100%;
      max-height: 200px;
      display: block;
    }
    p,
    .intro {
      margin: 10px 0px;
    }
    .linkButtonsContainer {
      position: absolute;
      left: 0;
      right: 0;
      margin-left: auto;
      margin-right: auto;
      bottom: 10px;
      margin: 0px auto;
      align-self: center;
      display: flex;
      flex-direction: column;
      width: 90%;
      a {
        ${Card}
        ${CardAnim}
        background-color: #d5cfc0;
        border-radius: 3px;
        margin: 5px;
        text-align: center;
        border: none;
        i {
          font-size: 3em;
        }
      }
    }
  }
`;

S.BusinessCard = styled.main`
  ${Main}
  height: 100vh;

  .flipMe {
    font-family: ${theme.fonts.title};
    color: #9b9b9b;
    font-size: 1.2em;
    transform: rotate(15deg);
    text-align: center;
    width: 100px;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    margin-left: 10px;
    @media (max-width: 420px) {
      padding-top: 100px;
      width: 100%;
      text-align: center;
      transform: rotate(-25deg);
    }
  }

  .flip-card {
    width: 500px;
    height: 270px;
    @media (max-width: 420px) {
      width: 290px;
      height: 100%;
      max-height: 500px;
      max-width: 300px;
      margin-top: 5px;
    }
  }

  .flip-card-inner {
    position: relative;
    width: 100%;
    height: 100%;
    text-align: center;
    transition: transform 0.8s;
    transform-style: preserve-3d;
  }

  .flip-card:hover .flip-card-inner {
    transform: rotateY(180deg);
  }

  .flip-card-front,
  .flip-card-back {
    border-radius: 2px;
    position: absolute;
    width: 100%;
    height: 100%;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    @media (max-width: 420px) {
      flex-direction: column;
    }
  }

  .flip-card-front {
    background-color: #fcf0ef;
    color: ${theme.colours.grey1};
    box-shadow: 10px 10px 8px #888888;
    p,
    img {
      margin: 0px;
      @media (max-width: 420px) {
        padding-top: 50px;
      }
    }
  }

  .flip-card-back {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    box-shadow: 10px 10px 8px #888888;
    div {
      margin: 20px;
      text-align: right;
      font-family: Impact, Charcoal, sans-serif;
      font-size: 1.5em;
      @media (max-width: 420px) {
        margin-bottom: 0px;
      }
    }
    i {
      color: #ff9500;
    }
    span {
      font-size: 14px;
      font-family: Arial, Helvetica, sans-serif;
      vertical-align: middle;
    }
    a {
      text-decoration: none;
      color: ${theme.colours.grey1};
    }
    .fullName {
      font-size: 36px;
      color: ${theme.colours.grey1};
      font-style: normal;
    }
    background-color: #fcf0ef;
    color: ${theme.colours.grey1};
    transform: rotateY(180deg);
    img {
      border: 3px #f05d5e solid;
      border-radius: 50%;
      margin-left: 30px;
    }
  }
`;

export default S;
