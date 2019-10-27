import React from 'react'
import TwitterLogo from "../images/twitter.png"
import LinkedinLogo from "../images/linkedin.png"
import GithubLogo from "../images/github.png"

const Footer = () => (
   <div className="site-footer">
      <p>SocraticDev sur les médias sociaux</p>
      <div className="footer-social-links">
         <ul className="social-links-list">
            <li>
               <a className="" href="https://github.com/socraticDevBlog/" rel="noopener noreferrer" target="_blank" alt="lien vers ma page github">
                  <img src={GithubLogo} alt="github logo" className="socialMediaLogo"></img>
               </a>
            </li>
            <li>
               <a className="" href="https://www.linkedin.com/in/boninmaxime/" rel="noopener noreferrer" target="_blank" alt="lien vers ma page LinkedIn">
                  <img src={LinkedinLogo} alt="linkedIn logo" className="socialMediaLogo"></img>
               </a>
            </li>
            <li>
               <a className="" href="https://twitter.com/socraticdevblog" rel="noopener noreferrer" target="_blank" alt="lien vers ma page Twitter">
                  <img src={TwitterLogo} alt="twitter logo" className="socialMediaLogo"></img>
               </a>
            </li>
         </ul>
      </div>
   </div>
)

export default Footer
