import React from "react";

const Navbar: React.FC = () => {
  return (
    <section className="navbar">
      <div className="menu">
        <a href="#">Hem</a>
        <a href="#">Köpvillkor</a>
        <a href="#">Storleksguide</a>
        <a href="#">Kontakt</a>
      </div>
      <div className="logo"></div>
      <div className="search-bar"></div>
      <button className="cart"></button>
    </section>
  );
};

export default Navbar;
