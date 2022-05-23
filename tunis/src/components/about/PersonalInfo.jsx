import React from "react";

const personalInfoContent = [
  { meta: "", metaInfo: "un jeune étudiant passionné par la photographie et la création de contenus. Déterminé dans chaque projets qu’il entreprend, il ne vous décevra pas dans le contenu qu’il vous fournira." },
 

  /*{ meta: "", metaInfo: "19ans" },$
   { meta: "last name", metaInfo: "Milner" },
  { meta: "Nationality", metaInfo: "Tunisian" },
  { meta: "Freelance", metaInfo: "Available" },
  { meta: "Address", metaInfo: "Tunis" },
  { meta: "phone", metaInfo: "+21621184010" },
  { meta: "Email", metaInfo: "you@mail.com" },
  { meta: "Skype", metaInfo: " steve.milner" },
  { meta: "langages", metaInfo: "French, English" },*/
];

const PersonalInfo = () => {
  return (
    <ul className="about-list list-unstyled open-sans-font">
      {personalInfoContent.map((val, i) => (
        <li key={i}>
          <span className="title">{val.meta}</span>
          <span className="value d-block d-sm-inline-block d-lg-block d-xl-inline-block">
            {val.metaInfo}
          </span>
        </li>
      ))}
    </ul>
  );
};

export default PersonalInfo;
