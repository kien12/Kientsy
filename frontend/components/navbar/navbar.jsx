import React from 'react';
import GreetingContainer from './greeting_container';

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      openModal: false
    }
  }
  
  // handleInput = field => {
  //   return(e) => {
  //     console.log(e)
  //     this.setState({[field]: e.target.value})
  //   }
  // }

  render() {
    console.log('state', this.state.name)
    return (
      <div>
        <h1>This is the navbar</h1>
        <GreetingContainer/>
      </div>
    )
  }
}

export default Navbar;
