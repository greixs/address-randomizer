import React, { Component } from "react";
import logo from "./logo.svg";

export default class Navigator extends Component {
  render() {
    return (
      <header>
        <img
          src={logo}
          alt="react"
          className="logo"
          style={{ height: "50px" }}
        />
        <nav>
          <ul className="nav__links">
            <li>
              <a href="#">PostList</a>
            </li>
            <li>
              <a href="#">Youtube</a>
            </li>
          </ul>
        </nav>
        <a href="#" className="cta">
          <button>Login</button>
        </a>
      </header>
    );
  }
}
