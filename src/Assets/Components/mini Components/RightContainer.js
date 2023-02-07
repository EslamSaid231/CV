import React from "react";
import Skills from "./Skills";
import "../../Styling/RightContainer.css";
const RightContainer = () => {
  return (
    <div className="rightContainerStyle  db tc content-center">
      <div>
        <h2 className="flex">Skills</h2>
      </div>
      <hr />
      <div className="db tc justify-center ">
        <div>
          <Skills skillName={"HTML"} pro={95} />
        </div>
        <div>
          <Skills skillName={"CSS"} pro={90} />
        </div>
        <div>
          <Skills skillName={"Javascript"} pro={80} />
        </div>
        <div>
          <Skills skillName={"Javascript DOM"} pro={80} />
        </div>
        <div>
          <Skills skillName={"ReactJS"} pro={70} />
        </div>
        <div>
          <Skills skillName={"AutoCAD"} pro={90} />
        </div>
        <div>
          <Skills skillName={"Autodesk Civil 3D"} pro={80} />
        </div>
        <div>
          <Skills skillName={"Microsoft Office"} pro={80} />
        </div>
      </div>
    </div>
  );
};

export default RightContainer;
