import React from 'react';
// import { Link } from '@reach/router';

const Footer = () => {
  return (
    <nav className="footer">
      <address>
        <a
          href="https://www.linkedin.com/in/juditlehoczki/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i class="fab fa-linkedin"></i>
        </a>
        <a
          href="https://dev.to/juditlehoczki"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i class="fab fa-dev"></i>
        </a>
        <a
          href="https://github.com/juditlehoczki/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i class="fab fa-github"></i>
        </a>
      </address>
    </nav>
  );
};

export default Footer;
