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
              <Link to="/randomizer">Randomizer</Link>
            </li>
            <li>
              <Link to="/generator">Generators</Link>
            </li>
            <li>
              <Link to="/youtube">Bored?</Link>
            </li>
          </ul>
        </nav>
        <a href="/" className="cta">
          <button>Home</button>
        </a>
      </header>
    );
  }
}
