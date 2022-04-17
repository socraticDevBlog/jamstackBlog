import React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";

const AboutPage = () => (
  <Layout pageTitle="Qu'est-ce que le blogue de SocraticDev ?">
    <Seo
      title="À propos"
      keywords={[
        "socraticdev",
        "Maxime Bonin",
        "développeur",
        "analyste-programmeur",
        "Quebec City",
        "Ville de Québec",
        "programmeur-analyste",
        "devops",
        "cloud",
        "TI",
      ]}
    />
    <p>
      Le blogue est d'abord une raison de jouer avec la technologie et
      communiquer cette passion. Nous mettons à profit différentes nouvelles technologies permettant la
      diffusion d'idées à faible coût.
    </p>
    <p>
      Au lieu d'expliquer en totalité une idée ou une techno, nous préférons nous en tenir à la présenter dans les grandes lignes et vous laissez le soin d'effectuer vos propres recherches et forger votre propre opinion.</p>
    <p>
      J'essaye d'ajouter un article par semaine. Bien que je me donne le droit
      d'écrire à propos de n'importe quoi. La plupart des articles portent ou
      bien sur la technologie ou bien sur la philosophie.
    </p>
  </Layout>
)

export default AboutPage
