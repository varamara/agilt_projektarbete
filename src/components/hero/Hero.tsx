import React from "react";
import "./hero.scss";
import Button from "../buttons/button_1";

const Hero: React.FC = () => {
  return (
    <section className="hero">
      <h1>Prisvärd Kvalité</h1>
      <div className="button-section">
        <h3>Var vill du börja?</h3>
        <div>
          <Button className="fav-button">Click me</Button>
          <Button className="collection-button">Kollektion</Button>
        </div>
        
      </div>
    </section>
    
  );
};

export default Hero;
