import React from "react";
import "./home.css";
import Button from "./Button";
import About from "./About";
import Service from "./Service";
import Skill from "./Skill";
import Contact from "./Contact";
import Buttonn from "./Buttonn";
function Home() {
  return (
    <>
      <div class="center">
        <h1>
          <span className="im"> &nbsp; &nbsp; i'm</span> <br />{" "}
          <span className="txt">ANKITpatel</span> <br />
          <span className="d-txt">
            FRONT-END SOFTWARE ENGINEER & STUDENT LOOKING FOR <br />{" "}
            OPPORTUNITIES IN THE INDUSTRY.
          </span>{" "}
          <br />
          <Button text="RESUME" />
          <Buttonn texxt="HIRE ME" />
        </h1>
      </div>
      <About />
      <Service />
      <Skill />
      <Contact />
    </>
  );
}

export default Home;
