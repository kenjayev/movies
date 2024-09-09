import React from "react";
import { Link } from "react-router-dom";
// Components
import BottomLinks from "../../components/header/bottomLinks/BottomLinks";
import ChangeTheme from "../../components/header/ChangeThemes/ChangeTheme";
// Style
import "./Header.css";

class Header extends React.Component {
  activeLink = (e) => {
    console.log(e);
  };
  render() {
    return (
      <header className="Header">
        <div className="header-innerWrapper container">
          <div className="header__nav">
            <div className="header__logo">
              <Link to="/">Kenjayev</Link>
            </div>
            <div className="header__nav-list">
              <div className="header__nav-item">
                <button to="/list/movie" className="btn header__nav-link">
                  <span>Movie</span>
                  <i className="fa-solid fa-angle-down"></i>
                  <BottomLinks
                    links={[
                      {
                        name: "Popular",
                        path: "/list/movie?type=popular&page=1",
                      },
                      {
                        name: "Coming soon",
                        path: "/list/movie?type=upcoming&page=1",
                      },
                      {
                        name: "Favorite",
                        path: "/list/movie?type=top_rated&page=1",
                      },
                    ]}
                  />
                </button>
              </div>
              <div className="header__nav-item">
                <button className="btn header__nav-link">
                  <span>Series</span>
                  <i className="fa-solid fa-angle-down"></i>
                  <BottomLinks
                    links={[
                      { name: "Popular", path: "/list/tv?type=popular&page=1" },
                      {
                        name: "Coming soon",
                        path: "/list/tv?type=upcoming&page=1",
                      },
                      {
                        name: "Favorite",
                        path: "/list/tv?type=top_rated&page=1",
                      },
                    ]}
                  />
                </button>
              </div>
              <div className="header__nav-item">
                <button className="btn header__nav-link">
                  <span>Cartoon</span>
                  <i className="fa-solid fa-angle-down"></i>
                  <BottomLinks
                    links={[
                      {
                        name: "Series",
                        path: "/list/tv?type=cartoon&page=1",
                      },

                      {
                        name: "Animation movie",
                        path: "/list/movie?type=cartoon&page=1",
                      },
                    ]}
                  />
                </button>
              </div>
              <div className="header__nav-item">
                <a href="#!" className="header__nav-link">
                  Genre
                </a>
              </div>
              <div className="header__nav-item">
                <a href="#!" className="header__nav-link">
                  Compony
                </a>
              </div>
              <div className="header__nav-item">
                <a href="#!" className="header__nav-link">
                  Actor
                </a>
              </div>
              <div className="header__nav-item">
                <a href="#!" className="header__nav-link">
                  About us
                </a>
              </div>
            </div>
          </div>
          <ChangeTheme />
        </div>
      </header>
    );
  }
}

export default Header;
