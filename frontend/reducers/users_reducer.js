import {RECEIVE_CURRENT_USER} from '../util/session_api_util'

const usersReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_CURRENT_USER:
      return Object.assign({}, state, { [action.currentUser.id]: action.currentUser});
    default:
      return state;
  }
}

export default usersReducer;