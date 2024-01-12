import React from "react";
import "./hero.scss";

const Hero: React.FC = () => {
  return (
    <section className="hero">
      <h1>Prisvärd Kvalité</h1>
      <div className="button-section">
        <h3>Var vill du börja?</h3>
        <button className="fave-button">Favoriter</button>
        <button className="collection-button">Kollektion</button>
      </div>
    </section>
    
  );
};

export default Hero;
