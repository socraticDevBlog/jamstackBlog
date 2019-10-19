import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

const AboutPage = () => (
  <Layout pageTitle="Maxime Bonin">
    <SEO title="À propos" keywords={["Maxime Bonin", "développeur", "analyste-programmeur"]} />
    <p>Après une brève carrière d'enseignant de philo, <strong>SocraticDev</strong> est retourné sur les bancs de l'école et obtenu un diplôme en informatique.</p>
    <p>En tant que consultant, il maintient et développe de grands systèmes d'information. À l'extérieur du travail, il aime relaxer en écoutant une partie des Red Sox tout en grattant sa guitare.</p>
    <p>Visitez son terrain de jeu sur le web : <a href="https://maximebonin.dev" rel="noopener noreferrer"  target="_blank" alt="lien vers la page person de Maxime Bonin">https://maximebonin.dev </a></p>
    <p>Allez lire les anciens posts sur l'ancien site du blogue <a href="https://maximeboninblog.wordpress.com/" rel="noopener noreferrer"  target="_blank" alt="lien vers la page de l'ancien blogue">https://maximeboninblog.wordpress.com</a></p>
  </Layout>
)

export default AboutPage
