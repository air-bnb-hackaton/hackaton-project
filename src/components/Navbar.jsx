import React from "react";
import Logo from '../assets/logo-white.png'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

class Navbar extends React.Component {
  state = { someKey: "someValue" };

  render() {
    return (
      <nav className="navbar navbar-expand-lg fixed-top">
        <Link className="navbar-brand" to="/">
          <img height="40px" width="auto"src={Logo}></img>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <Link className="nav-link" to="/details">
              <li className="nav-item active">Details </li>
            </Link>
            <Link className="nav-link" to="/listing">
              <li className="nav-item">Listing</li>
            </Link>
            <Link className="nav-link" to="/details">
              <li className="nav-item active">Help </li>
            </Link>
            <Link className="nav-link" to="/details">
              <li className="nav-item active">Sign Up </li>
            </Link>
            <Link className="nav-link" to="/details">
              <li className="nav-item active">Login </li>
            </Link>
          </ul>
        </div>
      </nav>
    );
  }

  componentDidMount() {
    this.setState({ someKey: "otherValue" });
  }
}

export default Navbar;
