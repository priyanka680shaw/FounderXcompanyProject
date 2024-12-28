// 

// components/Footer.js
import React from "react";
import Image from "next/image";
const footerData = [
  {
    title: "Portfolio",
    links: ["Markets", "Watchlist", "Live TV Show", "Currencies", "Commodities", "Fixed Income", "Personal Finance"],
  },
  {
    title: "News",
    links: ["Business", "Markets", "Stocks", "Economy", "Mutual Funds", "Personal Finance", "IPO", "Startups"],
  },
  {
    title: "Tools",
    links: ["Retirement Planning", "EMI Calculator", "SIP Calculator", "SIP Planner", "Stock Screener"],
  },
  {
    title: "Specials",
    links: ["Master Your Money", "Game Changers", "Travelcafe", "Easybiz", "Investment Watch", "PowerYourTrade", "MoneyBhai"],
  },
  {
    title: "Useful Links",
    links: ["Live Sensex", "Public Sector Banks", "Best Portfolio Manager", "Small Savings Schemes", "Bonds", "TopperLearning"],
  },
];

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white w-[100%]">
      <div className="container mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 px-4">
        {footerData.map((section, index) => (
          <div key={index}>
            <h3 className="text-lg font-bold mb-4">{section.title}</h3>
            <ul className="space-y-2">
              {section.links.map((link, idx) => (
                <li key={idx} className="text-sm hover:underline">
                  {link}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="border-t border-gray-700 mt-8 pt-4 px-4 text-center">
        <p>Stocks: A | B | C | D | E | F | G | H | I | J | K | L | M | N | O | P | Q | R | S | T | U | V | W | X | Y | Z | Others</p>
        <p>Mutual Funds: A | B | C | D | E | F | G | H | I | J | K | L | M | N | O | P | Q | R | S | T | U | V | W | X | Y | Z | Others</p>
        <div className="flex justify-center mt-4 space-x-4">
          {/* <Image src="/appstore.png" alt="App Store" className="h-10" />
          <Image src="/googleplay.png" alt="Google Play" className="h-10" />
          <Image src="/windowsstore.png" alt="Windows Store" className="h-10" /> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
