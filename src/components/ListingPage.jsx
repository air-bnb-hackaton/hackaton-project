import React from "react";
import SearchNav from "./SearchNav";

class ListingPage extends React.Component {
  state = { someKey: "someValue" };

  render() {
    return (
        <div className="listing-page">
            <SearchNav/>
            <h1>ajsiogjawg</h1>
        </div>
    );
  }

  componentDidMount() {
    this.setState({ someKey: "otherValue" });
  }
}

export default ListingPage;
