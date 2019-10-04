import React from "react";
import SearchNav from "./SearchNav";
import Views from './Views'

class ListingPage extends React.Component {
  state = {
    someKey: "someValue",
    reviewsopen: true
  };

  

  render() {
    return (
      <div className="listing-page">
       <SearchNav/>
      </div>
    );
  }

  componentDidMount() {
    this.setState({ someKey: "otherValue" });
  }
}

export default ListingPage;
