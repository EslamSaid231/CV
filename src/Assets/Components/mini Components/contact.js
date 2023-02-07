import React from "react";
import "../../Styling/contact.css";
const Contact = ({
  gmailpic,
  phonepic,
  phoneNumber,
  email,
  gitlink,
  gitpic,
}) => {
  return (
    <div className=" justify-center" style={{ marginLeft: "0.8rem" }}>
      <div className="flex contact" style={{ display: "block" }}>
        <p>
          <img className="phonepic" src={phonepic} />
          Phone Number: <span>{phoneNumber}</span>
        </p>
        <p>
          <img className="gmailpic" src={gmailpic} />
          Email:<span> {email}</span>
        </p>
        <p>
          <img className="gitpic" src={gitpic} />
          Github:
          <span>
            <a className="gitLink" href="https://github.com/EslamSaid231">
              {" "}
              {gitlink}
            </a>
          </span>
        </p>
      </div>
    </div>
  );
};

export default Contact;
