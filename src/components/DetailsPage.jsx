import React from "react";
import Views from './Views'
import SearchNav from "./SearchNav";
import { thisExpression } from "@babel/types";
import listings from '../listings2'
import reviews from '../reviews2'

class DetailsPage extends React.Component {
  state = { 
    someKey: "someValue",
    reviewsopen: true,
    opened: true,
    opened2: true,
    listing: listings.data[0],
    review: reviews.data[0]
  };


	RenderingMore = () => {
		return this.state.opened ? (
		<button onClick={this.View} >See More    -></button>
		) : (
				<p>
					Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of
					classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin
					professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words,
					consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical
					literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33
					of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This
					book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of
					Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
          <button onClick={this.View} >See Less    -></button>
				</p>
		);
	};

	View = () => {
		console.log(this.state.opened);
		this.state.opened
			? this.setState({
					opened: false
				})
			: this.setState({
					opened: true
				});
  };
  
  View2 = () => {
		console.log(this.state.opened2);
		this.state.opened2
			? this.setState({
					opened2: false
				})
			: this.setState({
					opened2: true
				});
  };
  
  RenderingMore2 = () => {
		return this.state.opened2 ? (
			<div />
		) : (
			<div>
        <div>
          <li>"{this.state.review.last5_comments}"</li>
        </div>
        <div>
        <li>"{this.state.review.last5_comments}"</li>
        </div>
        <div>
        <li>"{this.state.review.last5_comments}"</li>
        </div>
			</div>
		);
	};



  showListing = () =>{
    return(
      <div className="listingInfo">
        <div className="listingProfile">
            <h2>{this.state.listing.name}</h2>
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
            <div className="expands">
            <button onClick={this.View2} >v</button>
            </div>
            <div className="expand">
            {this.RenderingMore2()}
            </div>
        </div>
        <div className="neighborhood">
          <h3>{this.state.listing.neighbourhood}</h3>
        <div className="neighborhoodName">
          <p>This is where the info of the Neighborhood goes.
           Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            {this.RenderingMore()}
          </div>
        </div>
        <div></div>
      </div>
    )
  }

  showHost = () =>{
    return(
      <div className="hostBox">
        <h4>{this.state.listing.host_name}</h4>
        <hr></hr>
        <p>{this.state.listing.room_type}</p>
        <p>${this.state.listing.price}/night</p>
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


  
  render() {
    console.log(this.state.review.last5_comments)
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
