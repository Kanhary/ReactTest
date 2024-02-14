import React from 'react'
import "./Footer.css"
import { FaTelegramPlane } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";

const Footer = () => {
  const titles = {
    aboutUs: "about Us",
    quickLinks: "Quick links",
    haveQuestion: "have a question?",
  };

  const textContet = {
    aboutUs: `Hi i'm Uk Kagnary a computer science student that 
              studying at Royal University Of Phnonm Penh, 
              Thank You for visit my portfolio website.`,
    quickLinks: [
      {text: "home", link: "#"},
      {text: "about", link: "#"},
      {text: "education", link: "#"},
      {text: "skill", link: "#"},
      {text: "contact", link: "#"},
    ],
    adress: "St6 Sangkat ToulSangkae ,Reusey Keo,Phnom Penh",
    phoneNumber: "+855 965 117 722",
    emailAdress: "ukkanhary04@gmail.com",
    footerText: "Copyright © 2024 - UkKagnary Website. All Rights Reserved.",
  };

  return (
    <section id="footer">
      <footer className="footer containerf">
        <div className="rowf">
          <div className="colf">
            <h3 className='footer-title'>{titles.aboutUs}</h3>
            <p className="textf">{textContet.aboutUs}</p>
            <div className="social-linkf">
              <a href="https://t.me/Kagna_ry/">
                <i><FaTelegramPlane /></i>
              </a>

              <a href="https://www.facebook.com/profile.php?id=100043775706247&mibextid=ZbWKwL">
                <i><FaFacebookF /></i>
              </a>

              <a href="https://www.instagram.com/every1loves.ryy?igsh=cXVyYXBkbm9wdG53">
                <i><FaInstagram /></i>
              </a>
            </div>
          </div>
          <div className="colf">
            <h3 className="footer-title">{titles.quickLinks}</h3>
            <div className="footer-linkf">
              {textContet.quickLinks.map((link, index)=>(
                <a key={index} href={link.link} className='textf'>
                  <i><FaAngleRight /></i>
                  {link.text}
                </a>
              ))}
            </div>
          </div>

          <div className="colf">
            <h3 className='footer-title'>{titles.haveQuestion}</h3>
            <div>
              <span className='fas'>
              <FaLocationDot />
              </span>
              <span className='textf'>{textContet.adress}</span>
            </div>

            <div>
              <span className='fas'>
              <FaPhoneAlt />
              </span>
              <span className='textf'>{textContet.phoneNumber}</span>
            </div>

            <div>
              <span className='fas'>
              <IoIosMail />
              </span>
              <span className="textf">{textContet.emailAdress}</span>
            </div>
          </div>

        </div>
      </footer>
      <div className="footer-text">
        <p className='textf'>{textContet.footerText}</p>
      </div>
    </section>
  )
}

export default Footer