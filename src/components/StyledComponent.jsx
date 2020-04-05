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
  @media (max-width: 420px) {
    font-size: 0.6em;
  }
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
    text-decoration: none;
  }
  .dot {
    color: ${theme.colours.main};
    font-family: Arial, "Times New Roman", Times, serif;
  }
`;

const Main = css`
  // border: 1px solid red;
  padding: 9vh 8vh;
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
  margin: 5px;
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
    color: ${theme.colours.main};
    display: flex;
    justify-content: space-between;
    font-weight: bold;
    line-height: 1.2;
    font-family: "Josefin Slab", serif;
  }

  .intro {
    font-size: 1em;
    margin: 10px;
  }

  p {
    margin: 0px;
    font-size: 1.2em;
    font-family: "Josefin Slab", serif;
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
  ${NavAndFooter}
  top: 0px;
  @media (max-width: 420px) {
    position: fixed;
    top: 0px;
  }
`;

S.Footer = styled.footer`
  ${NavAndFooter}
  bottom: 0px;
`;

S.Welcome = styled.main`
  ${Main}
  height: 100vh;

  @keyframes welcomeAnim {
    0% {
      font-size: 8em;
    }
    100% {
    }
  }

  h1 {
    font-family: ${theme.fonts.title};
    font-size: 10em;
    line-height: 0.75em;
    color: ${theme.colours.grey1};
    margin-bottom: 0px;
    animation: welcomeAnim 2s;
  }
  h2 {
    font-family: ${theme.fonts.title};
    font-size: 3em;
    color: ${theme.colours.main};
    margin-top: 0px;
  }
`;

S.About = styled.main`
  ${Main}
  text-align: justify;
`;

S.BlogsListContainer = styled.main`
  ${Container};
  .blogPreviewCard {
    ${Card}
    ${CardAnim};
    min-width: 280px;
    max-width: 500px;
  }
`;

S.BlogIndividual = styled.main`
${Main}
font-family: ${theme.fonts.main};

  font-size: 1.3em;
  line-height: 1.6;
  border: 3px ${theme.colours.main} solid;
  border-radius: 20px;
  background-color: ${theme.colours.white};
  margin: 10vh auto;
  width: 80%;
  div {
    align-self: flex-start;
    text-align: justify;
    text-indent: 20px;
  }
  img {
    width: 90%;
    min-width: 300px;
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
    ${CardAnim};
    min-width: 280px;
    max-width: 200px;
    min-height: 400px;
    img {
      background: none;
    }
    p,
    .intro {
      margin: 10px 0px;
    }
    .readmore {
      position: absolute;
      bottom: 5px;
      right: 5px;
      margin: 10px;
    }
  }
`;

S.BusinessCard = styled.main`
  // ${Main}
   height: 100vh;

  .flip-card {
    background-color: transparent;
    width: 500px;
    height: 270px;
  }

  .flip-card-inner {
    position: relative;
    width: 100%;
    height: 100%;
    text-align: center;
    transition: transform 0.6s;
    transform-style: preserve-3d;
    box-shadow: 10px 10px 8px #888888;
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
  }

  .flip-card-front {
    background-color: #fcf0ef;
    color: ${theme.colours.grey1};
    p {
      margin: 0px;
    }
  }

  .flip-card-back {
    display: flex;
    justify-content: space-between;
    align-items: center;
    div {
      padding: 20px;
      text-align: right;
      font-family: Impact, Charcoal, sans-serif;
      font-size: 1.5em;
    }
    i {
      color: #FF9500;
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
      border: 3px #F05D5E solid;
      border-radius: 50%;
    }
  }
`;

export default S;
