import React from "react"
import { Row, Col } from "reactstrap"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Footer from "./footer"

import Header from "./header"
import "../styles/index.scss"
import Logo from "../images/banner.svg"

const Layout = ({ children, pageTitle }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <div className="container" id="content">
        <img
          id="main_logo"
          class="center"
          src={Logo}
          alt="le logo de Socratic point Dev"
        />
        <h2>{pageTitle}</h2>
        <Row>
          <Col md="2"></Col>
          <Col md="8">
            <main>{children}</main>
          </Col>
          <Col md="2"></Col>
        </Row>
      </div>
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
