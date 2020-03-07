import React from "react"
import TwitterLogo from "../images/twitter.png"
import LinkedinLogo from "../images/linkedin.png"
import GithubLogo from "../images/github.png"
import LuckylukeLogo from "../images/icon.png"

const Footer = () => (
  <div className="site-footer">
    <p>SocraticDev ailleurs sur le web</p>
    <div className="footer-social-links">
      <ul className="social-links-list">
        <li className="">
          <a
            className=""
            title="https://github.com/socraticDevBlog/"
            href="https://github.com/socraticDevBlog/"
            rel="noopener noreferrer"
            target="_blank"
            alt="lien vers ma page github"
          >
            <img
              src={GithubLogo}
              alt="github logo"
              className="socialMediaLogo"
            ></img>
          </a>
        </li>
        <li>
          <a
            className="linkedin"
            title="https://www.linkedin.com/in/boninmaxime/"
            href="https://www.linkedin.com/in/boninmaxime/"
            rel="noopener noreferrer"
            target="_blank"
            alt="lien vers ma page LinkedIn"
          >
            <img
              src={LinkedinLogo}
              alt="linkedIn logo"
              className="socialMediaLogo"
            ></img>
          </a>
        </li>
        <li>
          <a
            className="twitter"
            title="https://twitter.com/socraticdevblog"
            href="https://twitter.com/socraticdevblog"
            rel="noopener noreferrer"
            target="_blank"
            alt="lien vers ma page Twitter"
          >
            <img
              src={TwitterLogo}
              alt="twitter logo"
              className="socialMediaLogo"
            ></img>
          </a>
        </li>
        <li>
          <a
            className=""
            title="https://maximebonin.dev"
            href="https://maximebonin.dev"
            rel="noopener noreferrer"
            target="_blank"
            alt="lien vers ma page perso"
          >
            <img
              src={LuckylukeLogo}
              alt="Lucky Luke logo"
              className="socialMediaLogo"
            ></img>
          </a>
        </li>
      </ul>
    </div>
  </div>
)

export default Footer
