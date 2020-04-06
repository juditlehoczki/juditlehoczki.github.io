import React from "react";
import { Link } from "@reach/router";
import S from "./StyledComponent";

const Navbar = () => {
  return (
    <S.NavBar>
      {" "}
      <div>
        <Link to="/">
          Welcome<span className="dot">.</span>
        </Link>
        <Link to="/about">
          About Me<span className="dot">.</span>
        </Link>
        <Link to="/projects">
          Projects<span className="dot">.</span>
        </Link>
        <Link to="/blog">
          Blog<span className="dot">.</span>
        </Link>
        <Link to="/contact">
          Contact<span className="dot">.</span>
        </Link>
      </div>
    </S.NavBar>
  );
};

export default Navbar;
