import React, { useRef } from 'react'
import './Navbar.css'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import menu_open from '../../assets/menu_open.svg'
import menu_close from '../../assets/menu_close.svg'
import MonCv from '../../assets/Mon Cv.pdf'

function Navbar() {
  const menuRef = useRef();

  const openMenu = () => {
    menuRef.current.style.right = '0';
  };

  const closeMenu = () => {
    menuRef.current.style.right = '-350px';
  };

  return (
    <div className="navbar">

      {/* LOGO + ANIMATION */}
      <div className='logo'>
        <h6> Crèche Mayeline <br /> Rihame </h6>
        <span className="star star1">✨</span>
        <span className="star star2">✨</span>
        <span className="star star3">✨</span>
      </div>

      {/* BURGER ICON */}
      <img
        src={menu_open}
        onClick={openMenu}
        alt=""
        className='nav-mob-open'
      />

      {/* MENU */}
      <ul ref={menuRef} className="nav-menu">

        <img
          src={menu_close}
          onClick={closeMenu}
          alt=""
          className="nav-mob-close"
        />

        <li><AnchorLink offset={50} href='#home'>Accueil</AnchorLink></li>
        <li><AnchorLink offset={50} href='#hero'>À propos</AnchorLink></li>
        <li><AnchorLink offset={50} href='#compétences'>Services</AnchorLink></li>
        <li><AnchorLink offset={50} href='#testimonials'>Témoignages</AnchorLink></li>
        <li><AnchorLink offset={50} href='#galerie'>Galerie</AnchorLink></li>
        <li><AnchorLink offset={50} href='#contact'>Contact</AnchorLink></li>

        <div className="nav-downloadcv">
          <a href={MonCv} download='MonCv' className="btn-cv">
            Réserver
          </a>
        </div>

      </ul>
    </div>
  );
}

export default Navbar