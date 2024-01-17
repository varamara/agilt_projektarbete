import React from "react";
import "./footer.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PrimaryCircle from "../circles/PrimaryCircle";
import SecondaryCircle from "../circles/SecondaryCircle";

type Props = {};

const Footer = (props: Props) => {
  return (
    <section className="footer">
      <PrimaryCircle />
      <SecondaryCircle />
      <div className="icons">
        <a href="https://www.google.com/intl/sv/gmail/about/">
          <img src="src\assets\at.png" />
        </a>
        <a href="https://www.facebook.com/">
          <img src="src\assets\fb.png" />
        </a>
        <a href="https://www.instagram.com/">
          <img src="src\assets\ig.png" />
        </a>
      </div>
      <p>&copy; Konini 2024 </p>
    </section>
  );
};

export default Footer;
