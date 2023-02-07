import React from "react";
import ContextualExample from "./progressBar";
const Skills = ({ skillName, pro }) => {
  return (
    <div>
      <p className="flex ml4 mt3">{skillName}</p>
      <div>
        <ContextualExample progress={pro} />
      </div>
    </div>
  );
};

export default Skills;
