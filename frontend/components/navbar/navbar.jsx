import React from 'react';

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      openModal = false
    }
  }
  render() {
    return (
      <div>
        <h1>This is the navbar</h1>
        <button className="sign-in">Sign In</button>
      </div>
    )
  }
}

export default Navbar;
