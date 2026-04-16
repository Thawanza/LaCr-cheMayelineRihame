// import react from './react.svg'
// import nodejs from './nodejs.svg'
// import java from './java.svg'
// import reactnative from './reactnative.svg'
// import calculatrice from './calculatrice.svg'
// import eredis from './eredis.svg'
import bus from './bus.png';
const mywork_data = [
    {
        w_no: 1,
        w_name: "Plateforme e-commerce dédiée à l'artisanat",
        w_img: bus,
        w_desc: `Développement d’une plateforme e-commerce dédiée aux produits artisanaux, permettant aux artisans de vendre leurs articles en ligne.

Réalisée avec React.js et Next.js, la plateforme prend en charge plusieurs rôles utilisateurs (administrateur, artisan, client), une gestion complète des produits et des commandes, ainsi que plusieurs moyens de paiement (Stripe et reçu CCP).

Nous avons intégré une gestion multilingue (français / arabe) avec i18next, en adaptant dynamiquement la direction de l’interface (RTL/LTR) selon la langue sélectionnée.

Le système ajuste également les devises et les prix affichés en fonction de la localisation du client, pour offrir une expérience utilisateur personnalisée et internationalisée.
`
    },
    {
        w_no: 2,
        w_name: "API Backend sécurisée",
        w_img: bus,
        w_desc: `Projet backend réalisé en suivant un tutoriel YouTube dans le cadre d'une formation pour découvrir les bases du développement backend avec Node.js.
J’ai mis en place des routes API, connecté l’application à une base de données MongoDB, et utilisé Postman pour les tests.

Ce projet m’a permis de comprendre :
- la structure d’une API REST,
- les requêtes HTTP (GET, POST, PUT, DELETE),
- la gestion des utilisateurs (authentification / autorisation),
- les bases de la sécurité des API.`
    },
    {
        w_no: 3,
        w_name: "Réalisation d'un portfolio",
        w_img: bus,
        w_desc: "Création d’un site portfolio responsive en React.js pour mettre en valeur mes projets, compétences et expériences, avec design moderne et animations interactives."
    },
    {
        w_no: 4,
        w_name: "Application mobile pour l'adoption d'animaux",
        w_img: bus,
        w_desc: `Projet réalisé en suivant un tutoriel YouTube dans le cadre d'une formation pour apprendre à développer une application mobile full-stack avec React Native, Expo et Firebase. 

Elle permet aux utilisateurs de: 
Ajouter et consulter des profils d’animaux à adopter ,

créer un compte via Firebase Auth ,

envoyer et recevoir des messages dans un système de messagerie intégré .

Ce projet m’a permis d’apprendre :
Comprendre la structure d’une app mobile avec Expo, 

la navigation multi-écrans avec React Native Navigation,

l’intégration de Firebase (authentification, base de données),

la mise en place d’une messagerie sécurisée entre utilisateurs. 


Source d’apprentissage : Tutoriel YouTube – Build Pet Adopt App with React Native, Expo & Firebase`
    },
    {
        w_no: 5,
        w_name: "Application web pour la gestion des emplois d'examens",
        w_img: bus,
        w_desc: `Projet réalisé dans le cadre de notre Master 1 en Génie Logiciel à l’Université de Bejaïa.  
Nous avons conçu et développé une application web avec Laravel, permettant aux établissements universitaires de générer automatiquement les emplois du temps des examens, tout en tenant compte des contraintes réelles : indisponibilités des enseignants, modules, salles, spécialités et sessions (normale, rattrapage, remplacement).  
L’application offre une interface intuitive pour la gestion des données académiques et intègre un système intelligent de génération de planning conforme aux critères pédagogiques.
`
    },
    {
        w_no: 6,
        w_name: "Application mobile pour la gestion des soins infirmiers",
        w_img: bus,
        w_desc: `Projet réalisé dans le cadre du Master 1 en Génie Logiciel à l’Université de Bejaïa.

Nous avons conçu une application mobile visant à améliorer la gestion quotidienne des soins infirmiers dans les établissements de santé.
L’application permet :

L’authentification sécurisée du personnel médical selon leur rôle (administrateur, médecin, infirmier, aide-soignant)

La gestion des dossiers médicaux des patients (ajout, modification, consultation)

Le suivi des soins, des signes vitaux, et des remarques médicales`
    },
    {
        w_no: 7,
        w_name: "Application mobile pour laboratoire d'analyse",
        w_img: bus,
        w_desc: `AnalyzeMe est une application mobile développée en Java avec Android Studio, réalisée dans le cadre de notre projet de fin de cycle de licence.

Elle permet aux utilisateurs de :

 Prendre rendez-vous dans un laboratoire d’analyses médicales,

 Consulter leurs résultats directement via l’application,

 Faciliter la gestion des interactions entre patients et laboratoires.

Technologies utilisées:
Java, Android Studio, MySql.`
    },
    {
        w_no: 8,
        w_name: "Application mobile pour le calcul de la moyenne L3",
        w_img: bus,
        w_desc: `Projet académique visant à faciliter le calcul des moyennes semestrielles et annuelles pour les étudiants en Licence 3.

Développée avec Java, l’application permet aux étudiants de saisir leurs notes par module, en tenant compte des coefficients, afin d’obtenir automatiquement leur moyenne globale.  
Elle propose une interface simple et intuitive, permettant un suivi rapide de la validation des semestres.
`
    }
]

export default mywork_data
