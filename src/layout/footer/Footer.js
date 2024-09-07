import React from "react";
import "./Footer.css";

class Footer extends React.Component {
  render() {
    return (
      <footer className="page-footer">
        <div className="footer-copyright">
          <h3>&copy; {new Date().getFullYear()} Copyright Rederved</h3>
          <p>
            By{" "}
            <a
              href="https://t.me/kenjayev_azizbek"
              target="_blank"
              rel="noreferrer"
            >
              Kenjayev Azizbek
            </a>
          </p>
        </div>
      </footer>
    );
  }
}

export default Footer;
