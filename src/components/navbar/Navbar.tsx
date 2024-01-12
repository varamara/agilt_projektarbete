import React from "react";
import "./navbar.scss";

const Navbar: React.FC = () => {
  return (
    <section className="navbar">
      <div className="menu">
        <a href="#">Hem</a>
        <a href="#">Köpvillkor</a>
        <a href="#">Storleksguide</a>
        <a href="#">Kontakt</a>
      </div>
      <div className="logo">vfv</div>
      <div className="search-cart">
        <div className="search-bar">
          <input type="text" className="search" placeholder="Sök..." />
          <button className="search-button">O</button>
        </div>
        <button className="cart">crt</button>
      </div>
    </section>
  );
};

export default Navbar;
