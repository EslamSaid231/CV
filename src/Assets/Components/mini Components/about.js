import React from "react";

const About = ({ title, paragraph }) => {
  return (
    <div className="db ml2 mr2 mt3">
      <h2 className="flex ml3 ">{title} :</h2>
      <hr />
      <div
        style={{
          display: "flex",
        }}
      >
        <p className="tl mt2 ml2">{paragraph}</p>
      </div>
    </div>
  );
};
export default About;
