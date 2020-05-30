import { AUTHED_USER_SET } from '../actions/authedUser'

const authedUser = (state = null, {type, payload}) => {
  switch (type) {
    case AUTHED_USER_SET:
      return payload;
    default:
      return state;
  }
}

export default authedUser;
