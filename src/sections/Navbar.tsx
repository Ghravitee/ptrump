import React, { useState } from "react";
import logo from "../assets/p-1.jpg";
import { FaXTwitter } from "react-icons/fa6";
import { PiTelegramLogoLight } from "react-icons/pi";
import dexscreener from "../assets/dex-screener.png";

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="w-full fixed top-0 left-0 bg-white shadow-sm z-50">
      <nav className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <img
            src={logo}
            alt="Kek logo"
            className="w-10 h-10 rounded-full object-cover"
          />
          <span className="font-bold text-sm text-black">Punjab Trump</span>
        </div>

        {/* Hamburger */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-black focus:outline-none cursor-pointer mr-10"
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

        {/* Nav Links */}
        <ul className="hidden md:flex space-x-8 font-medium text-black">
          <li>
            <a href="/" className="hover:text-sky-500 transition">
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="hover:text-sky-500 transition">
              About
            </a>
          </li>
          <li>
            <a href="#showdown" className="hover:text-sky-500 transition">
              Showdown
            </a>
          </li>
          <li>
            <a href="#tokenomics" className="hover:text-sky-500 transition">
              Tokenomics
            </a>
          </li>
        </ul>

        {/* Social Icons */}
        <div className="hidden md:flex items-center space-x-3">
          {/* Social Buttons */}
          {[
            {
              href: "#",
              bg: "bg-sky-400",
              hover: "hover:bg-sky-500",
              icon: <FaXTwitter />,
            },
            {
              href: "#",
              bg: "bg-black",
              hover: "hover:bg-gray-800",
              icon: <PiTelegramLogoLight />,
            },
            {
              href: "#",
              bg: "bg-black",
              hover: "hover:bg-gray-800",
              icon: (
                <img src={dexscreener} alt="Dexscreener" className="w-5 h-5" />
              ),
            },
          ].map((btn, i) => (
            <a
              key={i}
              href={btn.href}
              className={`${btn.bg} text-white p-3 rounded-full ${btn.hover} transition cursor-pointer`}
            >
              {btn.icon}
            </a>
          ))}
        </div>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="md:hidden bg-white px-4 pb-4 space-y-4 text-center font-medium text-black shadow-md list-none">
          <li>
            <a href="/" className="hover:text-sky-500 transition ">
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="hover:text-sky-500 transition ">
              About
            </a>
          </li>
          <li>
            <a href="#showdown" className="hover:text-sky-500 transition ">
              Showdown
            </a>
          </li>
          <li>
            <a href="#tokenomics" className="hover:text-sky-500 transition ">
              Tokenomics
            </a>
          </li>

          {/* Optional mobile social icons */}
          <div className="flex justify-center gap-4 pt-2">
            <a
              href="#"
              className="bg-sky-400 text-white p-3 rounded-full hover:bg-sky-500 transition cursor-pointer"
            >
              <FaXTwitter />
            </a>
            <a
              href="#"
              className="bg-black text-white p-3 rounded-full hover:bg-gray-800 transition cursor-pointer"
            >
              <PiTelegramLogoLight />
            </a>
            <a
              href="#"
              className="bg-black text-white p-3 rounded-full hover:bg-gray-800 transition cursor-pointer"
            >
              <img src={dexscreener} alt="dexscreener" className="w-5 h-5" />
            </a>
          </div>
        </ul>
      )}
    </header>
  );
};
