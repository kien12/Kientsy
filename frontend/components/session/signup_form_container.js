import { connect } from 'react-redux';
import { signup, receiveErrors } from '../../action/session_actions';
import { openModal, closeModal } from '../../actions/modal_actions';
import SignupForm from './signup_form';

const mSTP = ({ errors }) => ({
  formType: 'signup',
  errors: errors.session
});

const mDTP = () => dispatch => ({
  processForm: user => dispatch(signup(user)),
  closeModal: () => dispatch(closeModal()),
  deleteErrors: (errors) => dispatch(recieveErrors(errors))
});

export default connect(mSTP, mDTP)(SignupForm);
