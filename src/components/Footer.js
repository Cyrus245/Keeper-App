import React from "react";
import ReactDom from "react-dom";

const date = new Date().getFullYear();

function Footer() {
  return <footer>Copyright © {date}</footer>;
}

export default Footer;
