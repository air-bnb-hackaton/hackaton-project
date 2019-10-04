import React from "react";
import Views from './Views'
import SearchNav from "./SearchNav";
import "./DetailsPage.scss";

class DetailsPage extends React.Component {
  state = { 
    someKey: "someValue",
    reviewsopen: true,
  
  };
  
  showListing = () =>{
    return(
      <div className="listingInfo">
        <div className="listingProfile">
            <h2>Listing Name Goes Here</h2>
            <img width='64' height="64" src="https://icon-library.net/images/icon-profile/icon-profile-0.jpg" alt="Temp Pic" />
            <button>Hub-Verified ✔</button>
        </div>
        <div className="activity">
          
          <div className='activities'>
            <img width="32" height="32" src="https://image.flaticon.com/icons/png/512/18/18436.png" alt="qm" />
            <p>POI #1</p>
          </div>
          <div className='activities'>
            <img width="32" height="32" src="https://image.flaticon.com/icons/png/512/18/18436.png" alt="qm" />
            <p>POI #2</p>
          </div>
          <div className='activities'>
            <img width="32" height="32" src="https://image.flaticon.com/icons/png/512/18/18436.png" alt="qm" />
            <p>POI #3</p>
          </div>
          
        </div>
        <div className="reviews">
        <div className="space">
            <h3 >reviews</h3>
        </div>
            <img className="space1" width="20" height="20" src="https://upload.wikimedia.org/wikipedia/commons/b/bf/A_Black_Star.png" alt="stars" />
            <img className="space1" width="20" height="20" src="https://upload.wikimedia.org/wikipedia/commons/b/bf/A_Black_Star.png" alt="stars" />
            <img className="space1" width="20" height="20" src="https://upload.wikimedia.org/wikipedia/commons/b/bf/A_Black_Star.png" alt="stars" />
            <img className="space1" width="20" height="20" src="https://upload.wikimedia.org/wikipedia/commons/b/bf/A_Black_Star.png" alt="stars" />
            <img className="space1" width="20" height="20" src="https://upload.wikimedia.org/wikipedia/commons/b/bf/A_Black_Star.png" alt="stars" />
        </div>
        <div className="neighborhood">
          <h3>Neighborhood goes here</h3>
        <div className="neighborhoodName">
          <p>This is where the info of the Neighborhood goes.
           Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
            <button>See More    -></button>
        </div>
        <div></div>
      </div>
    )
  }

  showHost = () =>{
    return(
      <div className="hostBox">
        <h4>Host Info Goes Here</h4>
        <hr></hr>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        <button>Contact</button>
      </div>
    )
  }

  reserve = () =>{
    return(
      <div className="reserve">
        <button>Reserve</button>
      </div>
    )
  }

  showCarousel = ()=>{
    return(
      <div>
  
      </div>
    )
  }

  
  render() {
    return (
      <div className="details-page">
      <div className="background">
        <SearchNav/>
            <div className='car'>
            <Views/>
            </div>
      <div className="whole">
        <div className="listing-page">
            {this.showListing()}
        </div>
        <div className="host">
        {this.showHost()}
        </div>
        <div className="reserved">
        {this.reserve()}
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

export default DetailsPage;
