import React from 'react';

//props = { modal, closeModal}
//destructure ==> {modal, closeModal} <- this from container = props;

const Modal = ({modal, closeModal}) => {
  if (!modal) {
    return null;
  }
  let component;
  switch(modal) {
    case 'login':
      component = <LoginFormContainer />;
      break;
    case 'signup':
      component = <SignupFormContainer/>;
      break;
    default:
      return null;
  }
  return (
    <div className="modal-background" onClick={closeModal}>
        {component}
    </div>
  );
}

export default Modal;