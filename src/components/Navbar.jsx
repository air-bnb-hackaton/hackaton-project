import React from 'react';

class Navbar extends React.Component {
  constructor() {
    super();
    this.state = { someKey: 'someValue' };
  }

  render() {
    <div className="navbar">
         <h1>Navbar</h1>
    </div>
  }

  componentDidMount() {
    this.setState({ someKey: 'otherValue' });
  }
}

export default Navbar;
