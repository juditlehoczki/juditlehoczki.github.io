import styled, { css } from "styled-components";

const S = {};

const theme = {
  fonts: {
    title: '"Amatic SC", cursive',
    title2: '"Fredericka the Great", cursive;',
    main: '"Josefin Slab", serif'
  },
  colours: {
    grey1: "#333333",
    white: "#ede6d6",
    main: "#ff007f"
  }
};

const NavAndFooter = css`
  padding: 0.5em;
  position: fixed;
  background-color: ${theme.colours.grey1};
  width: 100%;
  text-align: center;
  @media screen (min-width: 420) {
    padding: 0em;
    font-size: 5em;
  }
  a {
    color: ${theme.colours.white};
    text-decoration: none;
    padding: 0rem 2rem;
    font-family: "Amatic SC", cursive;
    font-size: 2em;
    font-weight: bold;
  }
  a: hover {
    border-bottom: 1px solid ${theme.colours.main};
    color: ${theme.colours.main};
    text-decoration: none;
  }
  .dot {
    color: ${theme.colours.main};
    font-family: Georgia, "Times New Roman", Times, serif;
  }
`;

const Main = css`
  border: 1px solid red;
  padding: 8vh 8vh;
  height: 100%;
  width: 100%;
  box-sizing: border-box;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

S.App = styled.div`
  margin: 0px;
  width: 100%;
  height: 100vh;
`;

S.NavBar = styled.nav`
  ${NavAndFooter}
  top: 0px;
`;
S.Footer = styled.footer`
  ${NavAndFooter}
  bottom: 0px;
`;

S.Welcome = styled.main`
  ${Main}
  height: 100vh;
  h1 {
    font-family: ${theme.fonts.title};
    font-size: 10em;
    line-height: 0.75em;
    color: ${theme.colours.grey1};
  }
  h2 {
    font-family: ${theme.fonts.title};
    font-size: 3em;
    color: ${theme.colours.main};
  }
`;

S.About = styled.main`
  ${Main}
  text-align: justify;
`;

S.BlogsListContainer = styled.main`
  ${Main}
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  .blogPreviewCard {
    border: 1px ${theme.colours.main} solid;
    border-radius: 20px;
    min-width: 320px;
    max-width: 600px;
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
    }

    span {
      margin: 0px;
      font-family: "Josefin Slab", serif;
      font-size: 1.2em;
    }

    p {
      margin: 0px;
      font-size: 1.2em;
      font-family: "Josefin Slab", serif;
    }
    :hover {
      background-color: #d5cfc0;
      box-shadow: 5px 10px 8px #888888;
    }
  }
`;

export default S;
