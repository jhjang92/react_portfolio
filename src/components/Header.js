import React from "react";
import { Link } from "react-router-dom";
import "../styles/Header.scss";
function Header() {
  return (
    <header className="Header">
      <h1>
        <Link to="/">
          jaehyuk <span>jang</span>
        </Link>
      </h1>
      <nav>
        <ul>
          <li>
            <Link to="/about">ABOUT</Link>
          </li>
          <li>
            <Link to="/projects/list">PROJECT</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
