import React from 'react';

class LoginForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: ''
    }
  }

  handleInput = field => {
    return(e) => {
      this.setState({[field]: e.target.value})
    }
  }
  
  handleSubmit = e => {
    e.preventDefault()
    this.props.processForm(this.state)
    .then( () => this.props.closeModal())
  }

  render() {
    console.log('logging in props ', this.props);
    return (
      <div className="modal-form" onClick={e => e.stopPropagation()}>
        <div>
          <h2>Sign in</h2>
          <button>Register</button>
        </div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Email Address
            <br/>
            <input type="text" 
            name="Email Address"
            onChange={this.handleInput("email")}
            />
          </label>
          <br/>
          <label>
            Password
            <br/>
            <input type="password" 
            name="Password"
            onChange={this.handleInput("password")}
            />
            <br/>
          </label>
            <button>Sign In</button>
            <br/>
            <br/>
        </form>
        <button>Demo Login</button>
      </div>
    )
  }
}

export default LoginForm;
