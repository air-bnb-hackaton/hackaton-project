import React from "react";

class FilterBar extends React.Component {
  state = { someKey: "someValue" };

  render() {
    return (
      <div className="filters-bar">
        <nav className="navbar navbar-expand-lg">
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item active">
                <a className="nav-link" href="/">
                  <button className="nav-link">Dates</button>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  <button className="nav-link">Guests</button>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="'/">
                  <button className="nav-link">Work Trip</button>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  <button className="nav-link">Type of Price</button>
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }

  componentDidMount() {
    this.setState({ someKey: "otherValue" });
  }
}

export default FilterBar;
