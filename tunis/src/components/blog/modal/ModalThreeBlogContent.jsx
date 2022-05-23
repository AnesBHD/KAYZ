import React from "react";

const ModalThreeBlogContent = () => {
  return (
    //  Article Starts
    <article>
      <div className="title-section text-left text-sm-center">
        <h1>
          RAP<span>TIME</span>
        </h1>
        <span className="title-bg">TWITTER</span>
      </div>
      {/* Meta Starts */}

      <div className="meta open-sans-font">
        <span>
          <i className="fa fa-user"></i> KAYZ & RAPTIME
        </span>
        <span className="date">
          <i className="fa fa-calendar"></i> 20 Avril 2022
        </span>
        <span>
          <i className="fa fa-tags"></i> Photographe, designer, rédacteur
        </span>
      </div>
      {/* Meta Ends */}
      {/* Article Content Starts */}

      <h1>Création de contenu pour le média RAPTIME</h1>
      <img src="img/blog/blog-post-3.jpg" className="img-fluid" alt="Blog" />
      <div className="blog-excerpt open-sans-font pb-5">
        <p>
          J'ai eu l'opportunités de travailler avec le 4éme plus gros média,twitter, rap. 
          Sur la création de contenu tel que des futurs concepts, des shootings de rappeurs mais aussi des vidéos.
        </p>
        <div className="quotebox">
          <div className="icon">
            <img src="img/blog/quote.svg" alt="blog quote" />
          </div>
          <p>
            Most photographers find it hard to see interesting pictures in
            places in which they are most familiar. A trip somewhere new seems
            always exactly what our photography needed, as shooting away from
            home consistently inspires us to new artistic heights.
          </p>
        </div>
        <p>
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
          officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit
          amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum
          dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
      {/* Article Content Ends */}
    </article>
    // Article Ends
  );
};

export default ModalThreeBlogContent;
