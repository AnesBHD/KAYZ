import React from "react";

const achievementsContent = [
  { title: "2", subTitle1: "ans d'éxperience", subTitle2: "dans le digital" },
  { title: "20", subTitle1: "projets", subTitle2: "accomplis" },
  { title: "41", subTitle1: "Clients", subTitle2: "satisfaits" },
  { title: "XX", subTitle1: "XX", subTitle2: "XX" },
];

const Achievements = () => {
  return (
    <div className="row">
      {achievementsContent.map((val, i) => (
        <div className="col-6" key={i}>
          <div className="box-stats with-margin">
            <h3 className="poppins-font position-relative">{val.title}</h3>
            <p className="open-sans-font m-0 position-relative text-uppercase">
              {val.subTitle1} <span className="d-block">{val.subTitle2}</span>
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Achievements;
