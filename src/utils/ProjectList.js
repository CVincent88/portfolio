import chariots from "../assets/images/screenshots/chariots-gcs.png";
import GOX from "../assets/images/screenshots/GOX.png";
import screen_LaChouetteAgence from "../assets/images/screenshots/LaChouetteAgence_large.png";
import chasse from "../assets/images/screenshots/chasse-galerie.png";
import screen_Groupomania from "../assets/images/screenshots/Groupomania_large.png";
import screen_Trellu from "../assets/images/screenshots/Trellu_large.png";
import screen_Connection from "../assets/images/screenshots/Connection_large.png";

export const projects = [
   {
      id: 1,
      title: "Trellu",
      image: screen_Trellu,
      description:
         "Clone de Trello développé avec React. Ajoutez des listes, des cartes et réorganisez-les comme vous le souhaitez.",
      link: {
         github: "https://github.com/CVincent88/trellu",
         web: "https://cvincent88.github.io/trellu/",
      },
   },
   {
      id: 2,
      title: "Module de Connexion",
      image: screen_Connection,
      description:
         "Module de connexion développé avec React. Pensé pour être clair et simple d'utilisation.",
      link: {
         github: "https://github.com/CVincent88/authentication",
         web: "https://cvincent88.github.io/authentication/",
      },
   },
   {
      id: 3,
      title: "Groupomania",
      image: screen_Groupomania,
      description:
         "Création complète d'un réseau social d'entreprise avec le framework Vue.js. Implémentation et gestion d'une base de données sécurisée avec MySQL et Node.js.",
      link: {
         github: "https://github.com/CVincent88/groupomania",
      },
   },
   {
      id: 4,
      title: "Café Culturel Chasse-Galerie",
      image: chasse,
      description:
         "Site personalisé, réalisé avec le CMS RubberduckCMS.",
      link: {
         web: "https://www.chasse-galerie.ca/fr",
      },
   },
   {
      id: 5,
      title: "Chariots GCS",
      image: chariots,
      description:
         "Site personalisé, réalisé avec le CMS RubberduckCMS.",
      link: {
         web: "https://www.chariotsgcs.com/fr",
      },
   },
   {
      id: 6,
      title: "La Chouette Agence",
      image: screen_LaChouetteAgence,
      description:
         "Analyse puis amélioration de la taille, de la vitesse et du référencement par les moteurs de recherche d'un site web existant.",
      link: {
         github: "https://github.com/CVincent88/lachouetteagence",
      },
   },
   {
      id: 7,
      title: "GOX",
      image: GOX,
      description:
         "Site personalisé, réalisé avec le CMS RubberduckCMS.",
      link: {
         web: "https://www.gox.ca/fr",
      },
   },
];
