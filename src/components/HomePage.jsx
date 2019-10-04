import React from "react";

class HomePage extends React.Component {
  state = { someKey: "someValue" };

  render() {
    return (
      <div className="home-page">
        <h1>This is the home Page</h1>
      </div>
    );
  }

  componentDidMount() {
    this.setState({ someKey: "otherValue" });
  }
}

export default HomePage;
