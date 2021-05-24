import React from "react";
import {Link} from "gatsby";
import Layout from "../components/layout";
import Seo from "../components/seo";

const NotFoundPage = () => (
  <Layout pageTitle="Oups ! quelque chose a mal tourné ...">
    <Seo title="404: Not found" />
    <p>tristesse ! Vous avez saisi le nom d'une page qui n'existe pas ...</p>
    <Link to={'/'} className="btn btn-success text-uppercase">Retour vers la page Accueil !</Link>
  </Layout>
)

export default NotFoundPage
