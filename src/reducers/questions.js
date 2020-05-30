import { QUESTIONS_RECEIVED } from "../actions/questions";

const questions = (state = {}, {type, payload}) => {
  switch (type) {
    case QUESTIONS_RECEIVED :
      return {
        ...state,
        ...payload,
      }
    default:
      return state;
  }
}

export default questions;
