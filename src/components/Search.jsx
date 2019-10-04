import React from "react";
import "./Search.scss"

class Search extends React.Component {
  state = { someKey: "someValue" };

  render() {
    return (
      <div className="search">
        <div className="container-fluid">
          <h1>Book unique places to stay and things to do.</h1>
          <p>Where:</p>
          <input type="text" placeholder="Anywhere"></input>
          <div className="row">
            <div className="col pr-3">
              <p>Check In:</p>
              <input type="date" placeholder="mm/dd/yyyy"></input>
            </div>
            <div className="col pl-3">
              <p>Check Out:</p>
              <input type="date" placeholder="mm/dd/yyyy"></input>
            </div>
          </div>
          <p>Guests:</p>
          <input type="text" placeholder=""></input>
          <button className="btn align-self-end"> Search </button>
        </div>
      </div>
    );
  }

  componentDidMount() {
    this.setState({ someKey: "otherValue" });
  }
}

export default Search;
