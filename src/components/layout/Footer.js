import React from "react";

// Icons
import { Facebook, Instagram, Twitter } from "../Icons";

// Styles
import FooterStyles from "./styles/FooterStyles";

const Footer = () => {
  return (
    <FooterStyles className="bg-white w-100">
      <div className="container pv3 flex justify-between items-center flex-row-ns flex-column tc">
        <p className="ma0 mid-gray">
          © {new Date().getFullYear()} Copyright{" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.joincoded.com"
          >
            CODED
          </a>
        </p>
        <div className="mb0-ns mb3">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.facebook.com/joincoded/"
            className="mr3"
          >
            <Facebook fill="#666" />
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://twitter.com/joincoded"
            className="mr3"
          >
            <Twitter fill="#666" />
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.instagram.com/joincoded/"
          >
            <Instagram fill="#666" />
          </a>
        </div>
      </div>
    </FooterStyles>
  );
};

export default Footer;
