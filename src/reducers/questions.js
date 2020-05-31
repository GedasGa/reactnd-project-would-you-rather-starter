import { QUESTIONS_RECEIVED, QUESTION_ADDED, QUESTION_ANSWERED } from '../actions/questions';

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
    case QUESTION_ANSWERED:
      const { qid, answer, authedUser } = payload;
      return {
        ...state,
        [qid]: {
          ...state[qid],
          [answer]: {
            ...state[qid][answer],
            votes: state[qid][answer].votes.concat([authedUser])
          }
        }
    };
    default:
      return state;
  }
}

export default questions;
