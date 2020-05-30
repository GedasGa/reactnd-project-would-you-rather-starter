import { QUESTIONS_RECEIVED, QUESTION_ADDED } from "../actions/questions";

const questions = (state = {}, {type, payload}) => {
  switch (type) {
    case QUESTIONS_RECEIVED:
      return {
        ...state,
        ...payload,
      }
    case QUESTION_ADDED:
      return {
        ...state,
        [payload.id]: payload
      }
    default:
      return state;
  }
}

export default questions;
