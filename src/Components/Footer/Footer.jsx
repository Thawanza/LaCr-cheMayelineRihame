import React from 'react'
import './Footer.css'
import instagram from '../../assets/instagram.png'
import facebook from '../../assets/facebook.png'
import mail from '../../assets/mail_icon.svg'
import phone from '../../assets/call_icon.svg'
import location from '../../assets/location_icon.svg'

function Footer() {
  return (
    <div className='footer'>

      <div className="footer-top">
        <div className="footer-top-left">
          <h3>Crèche MayelineRihame</h3>
          <p>Un environnement sûr,
            chaleureux et bienveillant où chaque enfant grandit, apprend et s'épanouit à son rythme.
          </p>
          <h4>Contactez-nous</h4>
          <div className="footer-top-left-contact">
            <a href="https://www.instagram.com/crechesmiling/" target="_blank">
              <img src={instagram} alt="Instagram" />
            </a>
            <a href="https://www.facebook.com/profile.php?id=100083445386969" target="_blank">
              <img src={facebook} alt="Facebook" />
            </a>
          </div>

        </div>
        <div className="footer-top-right">
          <h3>Nos infos</h3>
          <div className='footer-contact'>
            <img src={location} alt="Localisation" />
            <p>Tazrart Ait-Idriss Taskriout</p>
          </div>
          <div className='footer-contact'>
            <img src={phone} alt="Téléphone" />
            <p>0698 34 76 00</p>
          </div>
          <div className='footer-contact'>
            <img src={mail} alt="Courriel" />
            <p>creche.mayeline@live.fr</p>
          </div>


        </div>
      </div>
      <hr />
      <div className="footer-bottom">
        <p> © 2026 Crèche MayelineRihame. Tous droits réservés.</p>
        <p>Développé par <a href="" target="_blank">Thawanza Boulanouar</a></p>
      </div>





    </div>
  )
}

export default Footer