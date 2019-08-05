import React, { Component } from "react";
import logo from "./logo.svg";

import { Link } from "react-router-dom";

export default class Navigator extends Component {
  constructor(props) {
    super(props);

    this.state = {
      menuClicked: false
    };
    this.mobileMenu = React.createRef();
  }

  toggleNav = () => {
    if (this.state.menuClicked) {
      this.mobileMenu.current.style.width = "0";
      this.setState({
        menuClicked: false
      });
    } else {
      this.mobileMenu.current.style.width = "100%";
      this.setState({
        menuClicked: true
      });
    }
  };

  closeNav = () => {
    this.mobileMenu.current.style.width = "0";
    this.setState({
      menuClicked: false
    });
  };

  render() {
    return (
      <div>
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

          <a href="#" onClick={this.toggleNav} className="menu">
            <button>Menu</button>
          </a>
        </header>
        <div id="mobile-menu" className="overlay" ref={this.mobileMenu}>
          <a href="#" onClick={this.closeNav} className="close">
            &times;
          </a>
          <div className="overlay-content">
            <li>
              <Link to="/randomizer">Randomizer</Link>
            </li>
            <li>
              <Link to="/generator">Generators</Link>
            </li>
            <li>
              <Link to="/youtube">Bored?</Link>
            </li>
          </div>
        </div>
      </div>
    );
  }
}
