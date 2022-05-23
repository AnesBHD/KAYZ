import React from "react";

const skillsContent = [
  { skillClass: "38", skillPercent: "23", skillName: "WEYZ CLOTHING" },
  { skillClass: "", skillPercent: "", skillName: "RAPTIME" },
  { skillClass: "", skillPercent: "", skillName: "KULTUR" },
  { skillClass: "", skillPercent: "", skillName: "RAPUNCHLINE" },
  { skillClass: "", skillPercent: "", skillName: "AWA GANG" },
  { skillClass: "", skillPercent: "", skillName: "XXX" },
  { skillClass: "", skillPercent: "", skillName: "XXX" },
  { skillClass: "", skillPercent: "", skillName: "XXX" },
];

const Skills = () => {
  return (
    <>
      {skillsContent.map((val, i) => (  
        <div className="col-6 col-md-3 mb-3 mb-sm-5" key={i}>
          <div className={`c100 ${val.skillClass}`}>
            <span>{val.skillPercent}%</span>
            <div className="slice">
              <div className="bar"></div>
              <div className="fill"></div>
            </div>
          </div>
          <h6 className="text-uppercase open-sans-font text-center mt-2 mt-sm-4">
            {val.skillName}
          </h6>
        </div>
      ))}
    </>
  );
};

export default Skills;
