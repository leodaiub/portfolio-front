import React from "react";
import Link from "next/link";

const Footer = () => (
  <footer>
    <div className="footer">Developed with love and coffee by myself</div>

    <style jsx>{`
      .footer {
        padding-top: 5rem;
        text-align: center;
        color: #f3f3f3;
      }
    `}</style>
  </footer>
);

export default Footer;
