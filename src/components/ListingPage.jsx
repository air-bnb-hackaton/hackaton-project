import React from "react";

class ListingPage extends React.Component {
  state = { someKey: "someValue" };

  render() {
    return (
        <div className="listing-page">
            <h1>This is the listing page</h1>
        </div>
    );
  }

  componentDidMount() {
    this.setState({ someKey: "otherValue" });
  }
}

export default ListingPage;
