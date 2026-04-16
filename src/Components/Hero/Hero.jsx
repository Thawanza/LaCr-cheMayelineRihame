import React from 'react';
import './Hero.css';
import AnchorLink from 'react-anchor-link-smooth-scroll';

function Hero() {
  return (
    <section id='hero' className='hero'>
      <div className="hero-overlay"></div>

      <div className='hero-content fade-in'>
        <h1 className='slide-down'>Offrez le meilleur départ à votre enfant</h1>

        <p className='slide-up'>
          Un environnement bienveillant où chaque enfant grandit à son rythme,
          développe sa curiosité et s’épanouit en toute sécurité.
        </p>

        <div className='hero-action fade-in'>
          <AnchorLink className='hero-btn primary' offset={50} href='#contact'>
            Contactez-moi
          </AnchorLink>
          <button className='hero-btn secondary'>
            Découvrir
          </button>
        </div>
      </div>
    </section>
  );
}

export default Hero;