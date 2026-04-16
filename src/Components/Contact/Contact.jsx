import React from 'react'
import './Contact.css'
import Swal from 'sweetalert2'
import theme_pattern from '../../assets/theme_pattern.svg'
import location_icon from '../../assets/location_icon.svg'
import call_icon from '../../assets/call_icon.svg'
import mail_icon from '../../assets/mail_icon.svg'
import facebook from '../../assets/facebook.png'
import instagram from '../../assets/instagram.png'


function Contact() {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    const name = formData.get("name").trim();
    const email = formData.get("email").trim();
    const message = formData.get("message").trim();
    const numero = formData.get("numero").trim();

    // Vérification des champs vides
    if (!name || !email || !message || !numero) {
     Swal.fire({
        icon: 'warning',
        title: 'Champs manquants',
        text: 'Veuillez remplir tous les champs avant d’envoyer 😊',
      });
      return;
    }

    // Validation de l'email
    const regx = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-_]+\.[a-zA-Z]{2,}$/;
    if (!regx.test(email)) {
      Swal.fire({
        icon: 'error',
  title: 'Email invalide',
  text: 'Veuillez entrer une adresse email valide ✉️',
  confirmButtonColor: '#d33',
  confirmButtonText: 'Corriger',
  background: '#fff',
  color: '#333',
  // ✅ largeur auto qui s’adapte parfaitement au mobile
  width: window.innerWidth < 480 ? '85%' : '400px',
  padding: '1.5em',
  // ✅ fond sombre et flou
  backdrop: `
    rgba(0, 0, 0, 0.45)
    left top
    no-repeat
  `,
  customClass: {
    popup: 'swal-custom-popup',
    title: 'swal-custom-title',
    confirmButton: 'swal-custom-btn',}
      });
      return;
    }

    // Ajout de la clé Web3Forms
    formData.append("access_key", "d387795e-895f-410b-8241-7c6a3e29b9ff");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    // Envoi de la requête
    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      alert("Message envoyé avec succès !");
      event.target.reset();
    } else {
      alert("Une erreur est survenue. Veuillez réessayer.");
    }
  };

  return (
    <div id='contact' className='contact'>
      <div className="contact-title">
        <h1>Inscrire votre enfant</h1>
      </div>

      <div className="contact-section">
        {/* Partie gauche */}
        <div className="contact-left">
          <h2>Nos coordonnées</h2>
          <p>
            Je suis disponible pour de nouveaux projets. 
            N'hésitez pas à me contacter pour collaborer ou échanger sur des opportunités.
          </p>

          <div className="contact-details">
            <div className="contact-detail">
              <img src={mail_icon} alt='mail' />
              <p>thawanzaboulanouar@gmail.com</p>
            </div>
            <div className="contact-detail">
              <img src={call_icon} alt='call' />
              <p>0696 33 80 70</p>
            </div>
            <div className="contact-detail">
              <img src={location_icon} alt='location' />
              <p>Aït Idriss, Taskriout, Béjaïa</p>
            </div>
             <div className="contact-detail">
   <img src={facebook} alt='facebook' />
   <p></p>
 </div>
  <div className="contact-detail">
    <img src={instagram} alt='instagram' />
    <p></p>
    </div>

          </div>
        </div>

        {/* Formulaire */}
        <form onSubmit={onSubmit} className="contact-right">
          <label>Votre nom</label>
          <input type="text" placeholder="Entrez votre nom" name="name" />

          <label>Votre email</label>
          <input type="text" placeholder="Entrez votre email" name="email" />

          <label>Votre numéro de téléphone</label>
          <input type="text" placeholder="Entrez votre numéro" name="numero" />

          <label>Votre message</label>
          <textarea name="message" rows={8} placeholder="Saisissez votre message" />

          <button type="submit" className="contact-submit">Envoyer</button>
        </form>
      </div>
    </div>
  )
}

export default Contact
