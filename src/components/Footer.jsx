import React from "react";
import S from "./StyledComponent";

const Footer = () => {
  return (
    <S.Footer>
      <address>
        <a
          href="https://www.linkedin.com/in/juditlehoczki/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i class="fab fa-linkedin-in"></i>
        </a>
        <a
          href="https://dev.to/juditlehoczki"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-dev"></i>
        </a>
        <a
          href="https://github.com/juditlehoczki/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-github"></i>
        </a>
        <a
          href="https://twitter.com/juditlehoczki"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i class="fab fa-twitter"></i>
        </a>
      </address>
    </S.Footer>
  );
};

export default Footer;
