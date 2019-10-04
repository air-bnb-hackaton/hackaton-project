import React from "react";

class DetailsPage extends React.Component {
  state = { someKey: "someValue" };

  render() {
    return (
      <div className="details-page">
        <h1>This is the details page</h1>
      </div>
    );
  }

  componentDidMount() {
    this.setState({ someKey: "otherValue" });
  }
}

export default DetailsPage;
