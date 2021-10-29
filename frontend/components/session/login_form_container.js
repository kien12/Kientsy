import { connect } from "react-redux";
import LoginForm from './login_form';
import { login, receiveErrors } from '../../actions/session_actions'
import { openModal, closeModal } from '../../actions/modal_actions'

const mSTP = state => ({
  errors: state.errors.session
});

const mDTP = dispatch => ({
  processForm: (user) => dispatch(login(user)),
  deleteErrors: (errors) => dispatch(receiveErrors(errors)),
  openModal: (modal) => dispatch(openModal(modal)),
  closeModal: () => dispatch(closeModal())
});

export default connect(mSTP, mDTP)(LoginForm);