import React from "react";
import logo from "../img/logo.png";
import profile from "../img/profile.png";

import S from "./StyledComponent";

const Contact = () => {
  return (
    <S.BusinessCard>
      <div className="flip-card">
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <img src={logo} alt="logo" />
            <p style={{ fontFamily: "Courier New", fontWeight: "bold" }}>
              &lt; SoftwareDeveloper /&gt;
            </p>
          </div>
          <div className="flip-card-back">
            <div>
              <img src={profile} height="165" alt="logo" />
            </div>
            <div>
              <i className="fullName">Judit Lehoczki</i>
              <p style={{ "margin-top": "0px" }}>Software Developer</p>
              <i class="far fa-heart">
                {" "}
                <span>
                  <a
                    href="http://juditlehoczki.me/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    ~ www.juditlehoczki.me
                  </a>
                </span>
              </i>
              <i className="far fa-paper-plane">
                <span>
                  <a
                    href="mailto:lehoczki.judit@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {" "}
                    ~ lehoczki.judit@gmail.com
                  </a>
                </span>
              </i>
              <i className="fab fa-github-alt">
                <span>
                  {" "}
                  <a
                    href="http://www.github.com/juditlehoczki"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    ~ www.github.com/juditlehoczki
                  </a>
                </span>
              </i>
              <i className="fab fa-linkedin-in">
                <span>
                  {" "}
                  <a
                    href="https://www.linkedin.com/in/juditlehoczki/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    ~ www.linkedin.com/in/juditlehoczki/
                  </a>
                </span>
              </i>
            </div>
          </div>
        </div>
      </div>
    </S.BusinessCard>
  );
};

export default Contact;
