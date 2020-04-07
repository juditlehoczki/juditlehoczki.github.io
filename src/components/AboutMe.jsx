import React from "react";
import S from "./StyledComponent";
import cvPage1 from "../img/1.png";
import cvPage2 from "../img/2.png";

const AboutMe = () => {
  return (
    <S.About>
      <img src={cvPage1} alt="first page of my CV" />
      <img src={cvPage2} alt="second page of my CV" />
    </S.About>
  );
};

export default AboutMe;
