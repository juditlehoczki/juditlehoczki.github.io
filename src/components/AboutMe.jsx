import React from "react";
import S from "./StyledComponent";
import cvPage1 from "../img/1.png";
import cvPage2 from "../img/2.png";
import profile from "../img/profile.png";
import cvPdf from "../juditlehoczki_cv.pdf";

const AboutMe = () => {
  return (
    <S.About>
      <div class="aboutContainer">
        <div
          style={{
            textAlign: "center",
            marginBottom: "-40px",
            marginTop: "20px",
          }}
        >
          <img
            style={{ borderRadius: "50%" }}
            src={profile}
            alt="first page of my CV"
          />
        </div>
        <h1>Who Am I?</h1>
        <p>
          <h3>I am a Software Developer.</h3>
          <p>
            Originally qualified as an <span className="pink">Economist</span>,
            built a successful career as an{" "}
            <span className="pink">Accountant</span>, retrained to be a{" "}
            <span className="pink">Software Developer</span>.
          </p>
          <p>
            After 12 years of accounting and years of playing with the thought
            of becoming a developer, I started learning to code at some point in
            2018. It went a bit on and off as I was still working full time. I
            taught myself from Freecodecamp and Codecademy, learnt HTML and CSS
            and got my first certificate in Responsive Web Design. Then I
            continued with JavaScript and that's when I got really interested in
            programming. After getting my second certificate, this time in
            JavaScript Algorithms and Data Structures, I decided that software
            development was what I wanted to do.
            <p>So I quit my job.</p>
            I decided to invest in myself and started a 12-weeks, full-time
            coding bootcamp at Northcoders. It is safe to say that this was the
            best decision I had made for a long time.
            <br />I learnt more about JavaScript fundamentals and testing with
            Mocha and Chai. I learnt how to build servers with REST APIs and
            also GraphQL. I learnt how to create SQL and MongoDB databases. I
            built frontend applications for all the backend services I created,
            including web and mobile applications using React and Flutter.{" "}
            <br />I graduated in April 2020 where my graduation project was a
            cross-platform, full-stack mobile application: Helping Hand. You can
            watch my graduation presentation below.
            <br />
            Now, after graduation, I continue to learn. I have learnt to use
            React-Native and testing with Jest and built my next mobile
            application: The Guardian Search. <br />I am also looking for a job
            where I can fulfill my passion for coding and progress further.
          </p>
          <div
            stlye={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
            }}
          >
            <a href={cvPdf} download>
              Download my CV!
              <br />
            </a>
            <a href={cvPdf} download>
              <img src={cvPage1} alt="first page of my CV" />
              {/* <img src={cvPage2} alt="second page of my CV" /> */}
            </a>
            <iframe
              title="Helping Hand"
              width="400"
              height="225"
              src="https://www.youtube.com/embed/99avgdNAwC4"
              frameborder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
        </p>

        <h3>I am also just a normal person.</h3>
        <p>
          I am a dog-owner wannabe, a hobby cyclist, a blogger, and occasional
          gamer and arts and craftser.
        </p>
        <p>
          <p>
            Born and raised in Budapest, Hungary, former resident of Aviemore,
            Scotland, now settled in Manchester, England.
          </p>
        </p>
      </div>
    </S.About>
  );
};

export default AboutMe;
