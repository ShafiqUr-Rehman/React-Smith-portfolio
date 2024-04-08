import React, { useState, useEffect } from 'react';
import './navbar.css';
import { IoIosContact } from "react-icons/io";

function Navbar() {
  const [activeLink, setActiveLink] = useState("");
  const [menuOpen, setMenuOpen] = useState(false); 

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      const scrollPosition = window.scrollY;

      sections.forEach(section => {
        const top = section.offsetTop;
        const height = section.offsetHeight;

        if (scrollPosition >= top && scrollPosition < top + height) {
          setActiveLink(section.id);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleClick = (id) => {
    setActiveLink(id);
    document.getElementById(id).scrollIntoView();
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen); 
  };

  return (
    <div className='navbar'>
      <nav>
        <div className="menuIcon" onClick={toggleMenu}> 
          <img src="https://cdn-icons-png.flaticon.com/128/9918/9918636.png" alt="" />
        </div>
        <div className="logo">
          <h3>Portfolio</h3>
        </div>
        <ul className={`navLinks ${menuOpen ? 'open' : ''}`}>
          <li><a className={activeLink === "hero" ? "active" : ""} href="#hero" onClick={() => handleClick("hero")}>Home</a></li>
          <li><a className={activeLink === "skills" ? "active" : ""} href="#skills" onClick={() => handleClick("skills")}>About</a></li>
          <li><a className={activeLink === "portfolio" ? "active" : ""} href="#portfolio" onClick={() => handleClick("portfolio")}>Portfolio</a></li>
          <li><a className={activeLink === "client" ? "active" : ""} href="#client" onClick={() => handleClick("client")}>Clients</a></li>
        </ul>
        <button className="contact btn" onClick={() => {
          handleClick("contact");
        }}>
          <IoIosContact className='icon' /><h6>Contact</h6>
        </button>
      </nav>
    </div>
  );
}

export default Navbar;
