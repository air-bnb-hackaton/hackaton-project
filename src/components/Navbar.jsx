import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

class Navbar extends React.Component {
  state = { someKey: "someValue" };

  render() {
    return (
      <div className="navbar">
        <ul>
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="/details">
            <li>Details</li>
          </Link>
          <Link to="/listing">
            <li>Listing</li>
          </Link>
        </ul>
      </div>
    );
  }

  componentDidMount() {
    this.setState({ someKey: "otherValue" });
  }
}

export default Navbar;
