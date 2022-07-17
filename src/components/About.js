import React from "react";
import { image } from "../data/data";

function About() {
  return (
  <div id="about">
    <h2>About Me</h2>
    <p>One thing about Victor is he's gonna figure it out.</p>
    <img src={image} alt="I made this"></img>
  </div>
  );
}

export default About;
