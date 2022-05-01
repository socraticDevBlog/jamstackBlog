import React from "react"
import TwitterLogo from "../images/twitter.png"
import LinkedinLogo from "../images/linkedin.png"
import GithubLogo from "../images/github.png"
import GitlabLogo from "../images/gitlab.png"
import maxHomePageLogo from "../images/homepage.png"

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
        <li className="">
          <a
            className=""
            title="https://gitlab.com/socraticdev/"
            href="https://gitlab.com/socraticdev/"
            rel="noopener noreferrer"
            target="_blank"
            alt="lien vers ma page gitLab"
          >
            <img
              src={GitlabLogo}
              alt="gitlab logo"
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
      </ul>
    </div>
  </div>
)

export default Footer
