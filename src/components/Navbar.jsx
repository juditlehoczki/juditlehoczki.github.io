import React from 'react';
import { Link } from '@reach/router';

const Navbar = () => {
  return (
    <nav className="nav">
      {' '}
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
        <Link to="/contact">
          Hire Me<span className="dot">.</span>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
