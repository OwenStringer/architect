import React from 'react';
import '../../src/css/Header.css';

function Header() {
  function handleScroll(event) {
    event.preventDefault();
    const href = event.target.getAttribute("href");
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  }

  return (
    <header>
      <nav>
        <div className="logo">
          <a href="/">Architect Equity</a>
        </div>
        <ul className="menu">
          <li><a href="#home" onClick={handleScroll}>Home</a></li>
          <li><a href="#about" onClick={handleScroll}>About Us</a></li>
          <li><a href="#services" onClick={handleScroll}>Services</a></li>
          <li><a href="#contact" onClick={handleScroll}>Contact Us</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
