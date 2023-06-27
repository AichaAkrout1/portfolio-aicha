import React from "react";
import AboutMe from "../assests/images/about-me.png";
import { FaAward } from "react-icons/fa";
import { VscFolderLibrary } from "react-icons/vsc";
import { MdModelTraining } from "react-icons/md";
import "../Scss/about.css";

function About() {
  return (
    <section id="about">
      <h5>Get to Know</h5>
      <h2>About Me</h2>
      <div className="container about_container">
        <div className="about_me">
          <div className="about-me-image">
            <img src={AboutMe} alt="aboutme" />
          </div>
        </div>
        <div className="about_content">
          <div className="about_cards">
            <article className="about_card">
              <FaAward className="about_icon" />
              <h5>Experience</h5>
              <small>1 Year Working</small>
            </article>
            <article className="about_card">
              <MdModelTraining className="about_icon" />
              <h5>Training</h5>
              <small>5 Months</small>
            </article>
            <article className="about_card">
              <VscFolderLibrary className="about_icon" />
              <h5>Projects</h5>
              <small>3 Completed</small>
            </article>
          </div>
          <p>
            Front End Developer is eagerly open to a new career challenge and
            ready to take on responsibilities. Reliable team member who is
            always ready to help. A quick learner with a problem-solving and
            decision-making mindset, and excellent interpersonal skills, I’am
            seeking to work in a company with a strong organizational culture,
            where I can add value using my previous professional skills and
            experience.
          </p>
          <a href="#contact" className="btn btn-primary">Let's Talk</a>
        </div>
      </div>
    </section>
  );
}

export default About;
