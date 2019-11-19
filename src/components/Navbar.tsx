import React, { Component } from "react";
import { GiMiteAlt } from "react-icons/gi";
import { Link } from "react-router-dom";
import logo from "../images/logo.svg";

export default class Navbar extends Component {
  state = {
    isOpen: false
  };

  handleToggle = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  render() {
    return (
      <nav className="nav" data-testid="navbar">
        <div className="nav__left">
          <Link data-testid="logo" to="/">
            <img src={logo} alt="Beach Resort" />
          </Link>
          <ul
            className={this.state.isOpen ? "nav__links-show" : "nav__links"}
            data-testid="navbar-links"
          >
            <li>
              <Link to="/" data-testid="home-link">
                Home
              </Link>
            </li>
            <li>
              <Link to="/rooms" data-testid="rooms-link">
                Rooms
              </Link>
            </li>
          </ul>
        </div>
        <div className="nav__right">
          <button
            type="button"
            className="nav__btn"
            onClick={this.handleToggle}
            data-testid="menu"
          >
            <GiMiteAlt className="nav__icon" />
          </button>
        </div>
      </nav>
    );
  }
}
