import React from 'react';

class LoginForm extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="modal-form">
        <div>
          <h2>Sign in</h2>
          <button>Register</button>
        </div>
        <form>
          <label>
            Email Address
            <br/>
            <input type="text" name="Email Address"/>
          </label>
          <br/>
          <label>
            Password
            <br/>
            <input type="password" name="Password"/>
            <br/>
          </label>
            <button>Sign In</button>
            <br/>
            <button>Demo Login</button>
            <br/>
        
        </form>
      </div>
    )
  }
}

export default LoginForm;
