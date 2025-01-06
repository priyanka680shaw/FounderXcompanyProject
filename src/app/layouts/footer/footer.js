import Wrapper from "../wrapper/wrapper";
import footerStyle from "./footerStyle.module.css";
// components/Footer.js
import React from "react";
import Image from "next/image";
import footerLogo from "../../images/footerLOgo.png";

import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaRss,
  FaTelegram,
} from "react-icons/fa";

const footerData = [
  {
    title: "Portfolio",
    links: [
      "Markets",
      "Watchlist",
      "Live TV Show",
      "Currencies",
      "Commodities",
      "Fixed Income",
      "Personal Finance",
    ],
  },
  {
    title: "News",
    links: [
      "Business",
      "Markets",
      "Stocks",
      "Economy",
      "Mutual Funds",
      "Personal Finance",
      "IPO",
      "Startups",
    ],
  },
  {
    title: "Tools",
    links: [
      "Retirement Planning",
      "EMI Calculator",
      "SIP Calculator",
      "SIP Planner",
      "Stock Screener",
    ],
  },
  {
    title: "Specials",
    links: [
      "Master Your Money",
      "Game Changers",
      "Travelcafe",
      "Easybiz",
      "Investment Watch",
      "PowerYourTrade",
      "MoneyBhai",
    ],
  },
  {
    title: "Useful Links",
    links: [
      "Live Sensex",
      "Public Sector Banks",
      "Best Portfolio Manager",
      "Small Savings Schemes",
      "Bonds",
      "TopperLearning",
    ],
  },
];

const Footer = () => {
             <h3 className="text-lg font-bold mb-4">{section.title}</h3>
 

  const iconSize = 30; // Adjust size as needed

  return (
    <>
      <div className={footerStyle.footerMainContainer}>
        <Wrapper
          className={footerStyle.wrapper}
        
        >
          <div className={footerStyle.logoContainer}>
            <div className={footerStyle.logo}>
              <Image src={footerLogo} alt="footerLogo"></Image>
            </div>
            <div className="flex justify-center space-x-6">
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebook color="#4267B2" size={iconSize} />
              </a>
              <a
                href="https://www.twitter.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTwitter color="#1DA1F2" size={iconSize} />
              </a>
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram color="#E1306C" size={iconSize} />
              </a>
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin color="#0077B5" size={iconSize} />
              </a>
              <a
                href="https://rss.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaRss color="#FF6600" size={iconSize} />
              </a>
              <a
                href="https://telegram.org"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTelegram color="#0088cc" size={iconSize} />
              </a>
            </div>
          </div>
          <div className={footerStyle.menuListContainer}>
              <div className= {footerStyle.menuListInnerContainer}>
              {footerData.map((section, index) => (
              <div key={index} className= {footerStyle.menuList}>
                <h3 className="text-lg font-bold mb-4">{section.title}</h3>
                <ul className="space-y-2" style={{}}>
                  {section.links.map((link, idx) => (
                    <li key={idx} className="text-sm hover:underline">
                      {link}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
              </div>
            {/* </div> */}
            <div className={footerStyle.rightSideContainer}>

            <div className="border-t border-gray-700 mt-8 pt-4 px-4 text-center">
             <p>
               Stocks: A | B | C | D | E | F | G | H | I | J | K | L | M | N | O
               | P | Q | R | S | T | U | V | W | X | Y | Z | Others
             </p>
             <p>
               Mutual Funds: A | B | C | D | E | F | G | H | I | J | K | L | M |
               N | O | P | Q | R | S | T | U | V | W | X | Y | Z | Others
             </p>
             <div className="flex justify-center mt-4 space-x-4">
               {/* <Image src="/appstore.png" alt="App Store" className="h-10" />
           <Image src="/googleplay.png" alt="Google Play" className="h-10" />
           <Image src="/windowsstore.png" alt="Windows Store" className="h-10" /> */}
             </div>
           </div> 
            </div>
          </div>
        </Wrapper>
        <div className={footerStyle.bottomContainer}>
          <Wrapper>
          {/* <div className={footerStyle.bottomInnerContainer}> */}
           <div className={footerStyle.footerLinks}>
    <a href="#">About us | </a>
    <a href="#">Contact Us | </a>
    <a href="#">Feedback | </a>
    <a href="#">Disclaimer | </a>
    <a href="#">Privacy Policy | </a>
    <a href="#">Cookie Policy | </a>
    <a href="#">Terms & Conditions | </a>
    <a href="#">Careers | </a>
    <a href="#">Financial Terms (Glossary) | </a>
    <a href="#">FAQs | </a>
    <a href="#">Sitemap | </a>
    <a href="#">RSS Feed</a>
            </div>

  <p className={footerStyle.footerCopyright}>
    Copyright © FoundreX. All rights reserved. Reproduction of news articles, photos, videos, or any other content in whole
    or in part in any form or medium without express written permission is prohibited.
  </p>



{/* 
           </div> */}
         
          </Wrapper>
        </div>
      </div>
    </>
  );
};

export default Footer;
