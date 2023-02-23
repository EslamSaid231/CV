import React, { useState } from "react";
import "../../Styling/LeftContainer.css";
import "tachyons";
import Languages from "./Languages";
import "react-circular-progressbar/dist/styles.css";
import Contact from "../mini Components/contact";
import gmailpic from "../mini Components/imgs/gmail.png";
import gitpic from "./imgs/githubicon.png";
import phonepic from "../mini Components/imgs/phone.png";
const LeftContainer = ({
  mypic,
  fullName,
  jobDescription,
  residency,
  city,
  age,
}) => {
  return (
    <div
      className="db tc leftContainer content-center shadow-2"
      style={{ width: "360px" }}
    >
      <div className="db tc justify-center">
        <img
          className=" tc mt4 grow profilephoto  "
          style={{}}
          src={mypic}
          roundedCircle
          alt="mypic"
        />
        <p className="	athelas">{fullName}</p>
        <p>{jobDescription}</p>
        <div
          className="ml2"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
          }}
        >
          <h4 className="flex " style={{ marginLeft: "0.5rem" }}>
            Residency: <span style={{ marginLeft: "9.5rem" }}>{residency}</span>
          </h4>
          <h4 className=" ml3" style={{ marginLeft: "0.5rem" }}>
            City: <span style={{ marginLeft: "13.5rem" }}>{city}</span>
          </h4>
          <h4 className=" ml3" style={{ marginLeft: "0.5rem" }}>
            Age: <span style={{ marginLeft: "14rem" }}>{age}</span>
          </h4>
        </div>
        <div className="languages" style={{ display: "block" }}>
          <h4>Languages</h4>
          <Languages />
        </div>
        <div>
          {" "}
          <div className="contact">
            <Contact
              gmailpic={gmailpic}
              phonepic={phonepic}
              phoneNumber="+201024045537"
              email={"eslamsayed2607@gmail.com"}
              gitlink={"https://github.com/EslamSaid231"}
              gitpic={gitpic}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftContainer;
