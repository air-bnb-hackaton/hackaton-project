import React from "react";


class ListingPage extends React.Component {
  state = {
    someKey: "someValue"
  };

  showListings = () => {
    return (
        <div className="actual-listings">
          <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
            <ol className="carousel-indicators">
              <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
              <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
              <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
            </ol>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img className="d-block w-100" src="../listing1/img1.png" alt="First slide"/>
              </div>
              <div className="carousel-item">
                <img className="d-block w-100" src="../listing1/img2.png" alt="Second slide"/>
              </div>
              <div className="carousel-item">
                <img className="d-block w-100" src="../listing1/img3.png" alt="Third slide"/>
              </div>
            </div>
            <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="sr-only">Next</span>
            </a>  
          </div>
          <div>
          <h2>Title</h2>
          <h3>Description</h3>
          <p>Features</p>
          <p>Price</p>
          </div>
      </div>
    )
  }

  showMap = () => {
    return (
      <div>
        <img src="../map.png"/>
      </div>
    )
  }
  pageContent = () => {
    return (
      <div className="page-content">
      <div class="row">
        <div class="col-5"> {this.showListings()}</div>
        <div class="col-4"> {this.showMap()}</div>
      </div>
        {/* <div className="listings">
         {this.showListings()}
        </div>
        <div className="map">
         {this.showMap()}
        </div> */}
      </div>
    )
  }

  filterBar = () => {
    return (
      <div className="filters-bar">
        <nav className="navbar navbar-expand-lg">
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item active">
                <a className="nav-link" href="/"><button className="nav-link">Dates</button></a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/"><button className="nav-link">Guests</button></a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="'/"><button className="nav-link">Work Trip</button></a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/"><button className="nav-link">Type of Price</button></a>
              </li>
            </ul>
          </div>
        </nav>

        {/* <nav className="navbar">
          <ul className="navbar-nav">
            <li className="nav-item"><button>Dates</button></li>
            <li className="nav-item"><button>Guests</button></li>
            <li className="nav-item"><button>Work Trip</button></li>
            <li className="nav-item"><button>Type of place</button></li>
            <li className="nav-item"><button> Price </button></li>
          </ul>
        </nav> */}
      </div>
    )
  }

  render() {
    return (
      <div className="listing-page">
        <div>{this.filterBar()}</div>
        <div>{this.pageContent()}</div>
        <div>{this.showListings()}</div>
      </div>
    );
  }

  componentDidMount() {
    this.setState({ someKey: "otherValue" });
  }
}

export default ListingPage;
