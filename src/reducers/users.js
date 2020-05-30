import { USERS_RECEIVED } from "../actions/users";

const users = (state = {}, {type, payload}) => {
  switch (type) {
    case USERS_RECEIVED :
      return {
        ...state,
        ...payload,
      }
    default:
      return state;
  }
};

export default users;