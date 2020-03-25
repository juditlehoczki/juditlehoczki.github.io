import React from "react";
import "./index.css";
import { Router } from "@reach/router";
import Navbar from "./components/Navbar";
import Welcome from "./components/Welcome";
import Footer from "./components/Footer";
import BlogList from "./components/BlogList";
import BlogIndividual from "./components/BlogIndividual";
import AboutMe from "./components/AboutMe";
import S from "./components/StyledComponent";

function App() {
  return (
    <S.App>
      <Navbar />
      <Router>
        <Welcome path="/" />
        <AboutMe path="/about" />
        <BlogList path="/blog" />
        <BlogIndividual path="/blog/:id" />
      </Router>
      <Footer />
    </S.App>
  );
}

export default App;
