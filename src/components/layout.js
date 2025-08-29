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
        {/* <div
      style={{
        backgroundColor: "#000000",
        color: "#FFD700",
        padding: "1rem",
        textAlign: "center",
        marginBottom: "3em",
        fontSize: "0.95rem",
        borderBottom: "2px solid #FFD700",
        borderRadius: "0 0 40px 10px",
      }}
    >
      ⚠️📧 des courriels frauduleux prétendant venir de socratic.dev circulent.  
  Nous ne contactons jamais quelqu’un de manière non sollicitée. Restez vigilant.
    </div> */}
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
