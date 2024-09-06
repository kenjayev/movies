import React from "react";
import { Link } from "react-router-dom";
import "./BottomLinks.css";

class BottomLinks extends React.Component {
  render() {
    const { links } = this.props;
    return (
      <div className="header__nav_bottom__links">
        {links &&
          links.map((link) => (
            <Link key={link.path} to={link.path} className="header__nav-link">
              {link.name}
            </Link>
          ))}
      </div>
    );
  }
}

export default BottomLinks;
