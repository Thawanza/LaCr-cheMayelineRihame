import React from "react";
import "./About.css";
import about from "../../assets/about.jpg";

function About() {
  return (
    <div id="about" className="about">

      <div className="about-sections">

        {/* LEFT */}
        <div className="about-left">

          <div className="about-title">
            <h1>À propos de nous</h1>
          </div>

          <div className="about-para">
            <p>
              Notre crèche est un lieu chaleureux et sécurisé où chaque enfant est accueilli
              avec bienveillance et attention. Nous avons à cœur d’offrir un environnement
              épanouissant qui favorise le développement, la curiosité et l’autonomie des tout-petits.
            </p>

            <p>
              Grâce à une équipe qualifiée et passionnée, nous accompagnons chaque enfant dans ses
              premiers apprentissages à travers des activités ludiques, éducatives et créatives
              adaptées à son âge.
            </p>
          </div>

        </div>

        {/* RIGHT */}
        <div className="about-right">
          <div className="about-image">
            <img src={about} alt="crèche" />
          </div>
        </div>

      </div>
    </div>
  );
}

export default About;