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
              Notre crèche offre un environnement chaleureux et sécurisé où
              chaque enfant s’épanouit
              grâce à une attention bienveillante et adaptée à ses besoins.
            </p>

            <p>
              Notre équipe accompagne les tout-petits à travers des activités ludiques et éducatives
              favorisant leur développement et leur autonomie.
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