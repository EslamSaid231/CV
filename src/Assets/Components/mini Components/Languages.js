import React from "react";
import "../../Styling/Languages.css";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
const Languages = () => {
  return (
    <div className="progressBars">
      <div className="progressBar">
        <CircularProgressbar value={100} text={`${100}%`} />
        <p>Arabic</p>
      </div>
      <div className="progressBar">
        <CircularProgressbar value={90} text={`${90}%`} />
        <p>English</p>
      </div>
    </div>
  );
};

export default Languages;
