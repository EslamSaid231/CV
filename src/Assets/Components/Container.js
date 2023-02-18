import React from "react";
import LeftContainer from "./mini Components/LeftContainer";
import myphoto from "./mini Components/mypic.jpg";
import "../Styling/Container.css";
import CarouselCom from "./mini Components/carousal";
import RightContainer from "./mini Components/RightContainer";
import About from "./mini Components/about";

const Container = () => {
  return (
    <>
      <div className="containerBig ">
        <div className="flex ">
          <LeftContainer
            mypic={myphoto}
            fullName="Eslam Said"
            jobDescription="Front-end Web Developer"
            residency={"Egypt"}
            city={"Cairo"}
            age={"27"}
          />
        </div>
        <div className="tc justify-center carousel">
          <div className="Carousel ">
            <CarouselCom />
          </div>
          <div>
            <About
              title={"Objective"}
              paragraph={
                "A web developer keen to establish a career in the web development industry with alot of enthusiasm for the user interface and experiance the computer industry"
              }
            />
            <About
              title={"Education"}
              paragraph={
                "Studied Civil Engineering at Obour High Institute for engineering and technology."
              }
            />
            <div>
              <li
                style={{ listStyle: "none", float: "left", marginLeft: "1rem" }}
              >
                Studied Web Development at GoMyCode.{" "}
              </li>
            </div>
          </div>
        </div>
        <div className="rightContainer">
          <RightContainer />
        </div>
      </div>
    </>
  );
};

export default Container;
