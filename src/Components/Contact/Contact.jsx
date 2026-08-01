import React from 'react'
import './Contact.css'
import Swal from 'sweetalert2'
import theme_pattern from '../../assets/theme_pattern.svg'
import location_icon from '../../assets/location_icon.svg'
import call_icon from '../../assets/call_icon.svg'
import mail_icon from '../../assets/mail_icon.svg'
import facebook from '../../assets/facebook.png'
import instagram from '../../assets/instagram.png'
import lhorloge from '../../assets/horloge.png'
import calendrier from '../../assets/calendrier.png'
import horlogemurale from '../../assets/horloge-murale.png'
import bebe from '../../assets/bebe.png'


function Contact() {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    const name = formData.get("name").trim();
    //const email = formData.get("email").trim();
    const nameEnfant = formData.get("name").trim();
    const message = formData.get("message").trim();
    const numero = formData.get("numero").trim();
    const age = formData.get("age").trim();
    const formule = formData.get("formule").trim();

    // Vérification des champs vides
    if (!name || !nameEnfant || !numero || !age || !formule) {
      Swal.fire({
        icon: 'warning',
        title: 'Champs manquants',
        text: 'Veuillez remplir tous les champs marqués d’une étoile (*) avant d’envoyer😊',
      });
      return;
    }

    // Validation de l'email
    // const regx = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-_]+\.[a-zA-Z]{2,}$/;
    // if (!regx.test(email)) {
      // Swal.fire({
        // icon: 'error',
        // title: 'Email invalide',
        // text: 'Veuillez entrer une adresse email valide ✉️',
        // confirmButtonColor: '#d33',
        // confirmButtonText: 'Corriger',
        // background: '#fff',
        // color: '#333',
       // ✅ largeur auto qui s’adapte parfaitement au mobile
        // width: window.innerWidth < 480 ? '85%' : '400px',
        // padding: '1.5em',
       // ✅ fond sombre et flou
        // backdrop: `
    // rgba(0, 0, 0, 0.45)
    // left top
    // no-repeat
  // `,
        // customClass: {
          // popup: 'swal-custom-popup',
          // title: 'swal-custom-title',
          // confirmButton: 'swal-custom-btn',
        // }
      // });
      // return;
    // }

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
          <div className="info-tarif-title">
            <h2>Tarifs et Ages</h2>
          </div>
          <div className="info-tarif">
            <div className="info-tarif-price">
              <div className="info-tarif-price-item1">
                <img src={lhorloge} alt="" />
                <div className="info-tarif-price-item1-text">
                  <h3>journée complète</h3>
                  <p>tous les jours</p>
                </div>

                <div className="info-tarif-price-item1-text2">
                  <p>10000 DA</p>
                  <p>/par mois</p>
                </div>
              </div>
              <div className="info-tarif-price-item1">
                <img src={calendrier} alt="" />
                <div className="info-tarif-price-item1-text">
                  <h3>journée complète</h3>
                  <p>3 jours par semaine</p>
                </div>
                <div className="info-tarif-price-item1-text2">
                  <p>7000 DA</p>
                  <p>/par mois</p>
                </div>
              </div>
              <div className="info-tarif-price-item1">
                <img src={horlogemurale} alt="" />
                <div className="info-tarif-price-item1-text">
                  <h3>demi-journée</h3>
                  <p>tous les jours</p>
                </div>
                <div className="info-tarif-price-item1-text2">
                  <p>5000 DA</p>
                  <p>/par mois</p>
                </div>
              </div>

              <div className="info-tarif-price-item1">
                <img src={bebe} alt="" />
                <div className="info-tarif-price-item1-text">
                  <h3>Ages accueils</h3>
                </div>
                <div className="info-tarif-price-item1-text2">
                  <p>de 6 mois à 5 ans</p>

                </div>
              </div>

            </div>
          </div>
          <div className="info-ouverture">
            <h3>Ouverture</h3>
            <p>du dimanche au jeudi</p>
            <p>de 7h:30 à 17h</p>
          </div>
        </div>

        {/* Formulaire */}
        <form onSubmit={onSubmit} className="contact-right">
          <label>Nom et prénom du parent <span style={{color:'red'}}>*</span></label>
          <input type="text" placeholder="Entrez votre nom et prénom" name="name" />

          {/* <label>Votre email</label> */}
          {/* <input type="text" placeholder="Entrez votre email" name="email" /> */}

          <label>Nom et prénom du l'nfant <span style={{color:'red'}}>*</span></label>
          <input type="text" placeholder="Entrez le nom et le prénom de l'enfant" name="nameEnfant" />


          <label>Votre numéro de téléphone <span style={{color:'red'}}>*</span> </label>
          <input type="text" placeholder="Entrez votre numéro" name="numero" />

          <label>Age de l'enfant <span style={{color:'red'}}>*</span></label>
          <input type="text" placeholder="Entrez l'âge de l'enfant" name="age" />

          <label>Type d'accueil <span style={{color:'red'}}> * </span></label>
          <select name="formule">
            <option>Journée complète</option>
            <option>Demi-journée</option>
            <option>3 jours par semaine</option>
          </select>

          <label>Votre message</label>
          <textarea name="message" rows={8} placeholder="Saisissez votre message" />

          <button type="submit" className="contact-submit">Envoyer</button>
        </form>
      </div>
    </div>
  )
}

export default Contact
