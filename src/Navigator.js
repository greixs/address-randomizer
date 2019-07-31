import React, { Component } from "react";
import logo from "./logo.svg";

import { Link } from "react-router-dom";

export default class Navigator extends Component {
  render() {
    return (
      <header>
        <img src={logo} alt="react" className="logo" />
        <nav>
          <ul className="nav__links">
            <li>
              <Link to="/posts">PostList</Link>
            </li>
            <li>
              <Link to="/timer">Timer</Link>
            </li>
            <li>
              <Link to="/form">Form</Link>
            </li>
            <li>
              <Link to="/youtube">Bored?</Link>
            </li>
          </ul>
        </nav>
        <a href="/" className="cta">
          <button>Login</button>
        </a>
      </header>
    );
  }
}
