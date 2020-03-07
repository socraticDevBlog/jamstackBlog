import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

const AboutPage = () => (
  <Layout pageTitle="Qu'est-ce que le blogue de SocraticDev ?">
    <SEO
      title="À propos"
      keywords={[
        "socraticdev",
        "Maxime Bonin",
        "développeur",
        "analyste-programmeur",
        "Quebec City",
        "Ville de Québec",
        "programmeur-analyste",
        "TI",
      ]}
    />
    <p>
      Le blogue est d'abord une raison de jouer avec la technologie et
      communiquer cette passion.
    </p>
    <p>
      Ce blogue met à profit différentes nouvelles technologies permettant la
      diffusion d'idées à faible coût. Le site est bâti autour du concept de
      'site statique' qui fut récemment remis au goût du jour avec le
      'jamstack'. J'utilise le framework JavaScript{" "}
      <a
        href="https://www.gatsbyjs.org/"
        rel="noopener noreferrer"
        target="_blank"
        alt="lien vers la page web de GatsbyJS"
        title="https://www.gatsbyjs.org/"
      >
        GatsbyJS
      </a>{" "}
      pour générer le site. Le code du blogue est disponible sur{" "}
      <a
        href="https://github.com/socraticDevBlog/jamstackBlog/"
        rel="noopener noreferrer"
        target="_blank"
        alt="lien vers le repository du blogue sur GitHub"
        title="https://github.com/socraticDevBlog/jamstackBlog/"
      >
        GitHub
      </a>{" "}
      . Concrètement, les fichiers constituants le blogue sont hébergés sur le
      CDN (Content Delivery Network) de{" "}
      <a
        href="https://www.netlify.com/"
        rel="noopener noreferrer"
        target="_blank"
        alt="lien vers la page web de Netlify"
        title="https://www.netlify.com/"
      >
        Netlify
      </a>{" "}
      . En ajoutant un hook à GitHub, Netlify est immédiatement avertie lors
      d'un nouveau commit. Chaque commit démarre un processus de build et de
      déploiement du site.
    </p>
    <p>
      J'essaye d'ajouter un article par semaine. Bien que je me donne le droit
      d'écrire à propos de n'importe quoi. La plupart des articles portent ou
      bien sur la technologie ou bien sur la philosophie.
    </p>
  </Layout>
)

export default AboutPage
