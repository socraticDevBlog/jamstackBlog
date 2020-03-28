import PropTypes from "prop-types"
import React from "react"

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap"

class Header extends React.Component {
  constructor(props) {
    super(props)

    this.toggle = this.toggle.bind(this)
    this.state = {
      isOpen: false,
    }
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen,
    })
  }
  render() {
    return (
      <Navbar fixed="top" light expand="sm">
        <div className="container">
          <NavbarBrand href="/" title="Accueil">{this.props.siteTitle}</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/about" title="À propos">À propos</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/tags" title="Sujets abordés">Sujets abordés</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/avis" title="Avis">Avis</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/rss.xml" title="Feed RSS">
                  RSS
                  <span aria-label="abonnement au fil RSS" role="img">
                    💌{" "}
                  </span>
                </NavLink>
              </NavItem>

              <NavItem>
                <NavLink
                  href="https://en.socratic.dev"
                  title="English version of this blog"
                >
                  <span aria-label="visit site in english" role="img">
                    🇬🇧
                  </span>
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </div>
      </Navbar>
    )
  }
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
