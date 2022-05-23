import React from "react";

const ModalTwoBlogContent = () => {
  return (
    //  Article Starts
    <article>
      <div className="title-section text-left text-sm-center">
        <h1>
          Green <span>Montana</span>
        </h1>
        <span className="title-bg">party</span>
      </div>
      {/* Meta Starts */}

      <div className="meta open-sans-font">
        <span>
          <i className="fa fa-user"></i> KAYZ
        </span>
        <span className="date">
          <i className="fa fa-calendar"></i> 15 Avril 2022
        </span>
        <span>
          <i className="fa fa-tags"></i> Photographe
        </span>
      </div>
      {/* Meta Ends */}
      {/* Article Content Starts */}

      <h1>Shooting Green Montana</h1>
      <img src="img/blog/blog-post-2.jpg" className="img-fluid" alt="Blog" />
      <div className="blog-excerpt open-sans-font pb-5">
        <p>
          Ayant été invité à la release party du rappeur Green Montana pour le lancement de son album "Nostaliga +"
          j'ai eu l'opportunité de pouvoir le prendre en photo. Ces derniers ont ensuité été reposté par son équipe
          et le rappeur lui même sur leurs réseaux sociaux.
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

export default ModalTwoBlogContent;
