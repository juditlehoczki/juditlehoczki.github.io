import React from "react";
import { Link } from "@reach/router";
import S from "./StyledComponent";

const Navbar = () => {
  return (
    <S.NavBar>
      {" "}
      <div className="pcNavbar">
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
      <div className="mobileNavbar">
        <Link to="/">
          <i class="fas fa-home"></i>
          <i className="text">
            Welcome<span className="dot">.</span>
          </i>
        </Link>
        <Link to="/about">
          <i class="far fa-user"></i>
          <i className="text">
            About Me<span className="dot">.</span>
          </i>
        </Link>
        <Link to="/projects">
          <i class="fas fa-gifts"></i>{" "}
          <i className="text">
            Projects<span className="dot">.</span>
          </i>
        </Link>
        <Link to="/blog">
          <i class="fas fa-feather"></i>{" "}
          <i className="text">
            Blog<span className="dot">.</span>
          </i>
        </Link>
        <Link to="/contact">
          <i class="fas fa-at"></i>{" "}
          <i className="text">
            Contact<span className="dot">.</span>
          </i>
        </Link>
      </div>
    </S.NavBar>
  );
};

export default Navbar;
