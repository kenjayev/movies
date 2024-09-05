import React from "react";
// Style
import "./Header.css";

class Header extends React.Component {
  render() {
    return (
      <header className="Header">
        <div className="header-wrapper container">
          <div className="header__nav">
            <div className="header__logo">
              <a href="#!">Movie KAN</a>
              {/* <Link to="/">Kenjayev</Link> */}
            </div>
            <div className="header__nav-list">
              <a href="#!" className="header__nav-link">
                Movies
              </a>
              <a href="#!" className="header__nav-link">
                Series
              </a>
              <a href="#!" className="header__nav-link">
                Cartoon
              </a>
              <a href="#!" className="header__nav-link">
                Genre
              </a>
              <a href="#!" className="header__nav-link">
                Compony
              </a>
              <a href="#!" className="header__nav-link">
                Actor
              </a>
              <a href="#!" className="header__nav-link">
                About us
              </a>
            </div>
          </div>
          {/* <ChangeTheme /> */}
        </div>
      </header>
    );
  }
}

export default Header;
