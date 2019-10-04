import React from "react";
import Search from "./Search";
import Navbar from "./Navbar";
import "./HomePage.scss";

class HomePage extends React.Component {
  state = { someKey: "someValue" };
  render() {
    return (
      <div className="home-page">
        <div className="container-fluid">
          <Navbar/>
          <Search />
        </div>
      </div>
    );
  }

  componentDidMount() {
    this.setState({ someKey: "otherValue" });
  }
}

export default HomePage;
