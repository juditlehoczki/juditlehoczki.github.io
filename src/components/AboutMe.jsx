import React from "react";
import S from "./StyledComponent";
import cvPage1 from "../img/1.png";
import cvPage2 from "../img/2.png";
import cvPdf from "../juditlehoczki_cv.pdf";

const AboutMe = () => {
  return (
    <S.About>
      <a href={cvPdf} download>
        &gt;&gt; Click here to download my CV in PDF.
      </a>
      <img src={cvPage1} alt="first page of my CV" />
      <img src={cvPage2} alt="second page of my CV" />
    </S.About>
  );
};

export default AboutMe;
