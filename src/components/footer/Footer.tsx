import React from 'react'
import "./footer.scss";

type Props = {}

const Footer = (props: Props) => {
  return (
    <section className="footer">
      <div className="icons">
        <img src="src\assets\at.png" />
        <img src="src\assets\fb.png" />
        <img src="src\assets\ig.png" /></div>
      <p>Lorem ipsum dolor</p>
    </section>
  );
};

export default Footer;