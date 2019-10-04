import React from "react";

class Search extends React.Component {
  state = { someKey: "someValue" };

  render() {
    return (
      <div className="search">
        <div className="container-fluid">
          <h1>Book unique places to stay and things to do.</h1>
          <p>Where:</p>
          <input type="text"></input>
          <div className="row">
            <div className="col pr-0">
              <p>Check In:</p>
              <input type="text"></input>
            </div>
            <div className="col pl-0">
              <p>Check Out:</p>
              <input type="text"></input>
            </div>
          </div>
          <p>Guests:</p>
          <input type="text"></input>
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
