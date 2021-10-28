import React from 'react';

const Greeting = ({ currentUser, logout, openModal }) => {
  const showSignIn = () => (
    <div className="login-container" >
      <button onClick={() => openModal('login')}>Sign In</button>
    </div>
  )

  const showSignOut = () => (
    <div className='login-greeting'>
        <button onClick={logout}>Sign Out</button>
    </div>
  )

  return (
    currentUser ? showSignOut() : showSignIn()
  );
}

export default Greeting