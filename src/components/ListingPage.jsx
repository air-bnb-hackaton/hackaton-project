import React from "react";
import SearchNav from "./SearchNav";
import "./ListingPage.scss";
import Map from "./Map";
import Listing from "./Listing";
import FilterBar from "./FilterBar";

class ListingPage extends React.Component {
  state = {
    someKey: "someValue"
  };

  listings = [
    {
      name: "Amazing apartment in the middle of the jungle",
      description:
        "Extremelly cool if you're a monkey or a gorilla",
      features: "Free bananas",
      price: "3 Bananas"
    },
    {
      name: "3 Bedroom apartment, 2 baths, really cool",
      description:
        "Really good if you're living in the north pole, that's really cool.",
      features: "Cool stuff",
      price: 2000
    },
    {
      name: "Extremelly big barbie doll house",
      description:
        "WATERBED, AND KEN CHEF, ALSO REALLYYYYY PINK",
      features: "Full kitchen",
      price: 600
    }
  ];

  render() {
    return (
      <div className="listing-page">
        <SearchNav />
        <FilterBar />
        <div className="page-content">
          <div class="row">
            <div class="col-8">
              <Map />
            </div>
            <div class="col-4">
              <div className="row">
                <Listing
                  name={this.listings[0].name}
                  description={this.listings[0].description}
                  features={this.listings[0].features}
                  price={this.listings[0].price}
                />
              </div>
              <div className="row">
                <Listing
                  name={this.listings[1].name}
                  description={this.listings[1].description}
                  features={this.listings[1].features}
                  price={this.listings[1].price}
                />
              </div>
              <div className="row">
                <Listing
                  name={this.listings[2].name}
                  description={this.listings[2].description}
                  features={this.listings[2].features}
                  price={this.listings[2].price}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  componentDidMount() {
    this.setState({ someKey: "otherValue" });
  }
}

export default ListingPage;
