import { USERS_RECEIVED } from '../actions/users';
import { QUESTION_ANSWERED } from '../actions/questions';

const users = (state = {}, {type, payload}) => {
  switch (type) {
    case USERS_RECEIVED :
      return {
        ...state,
        ...payload,
      }
    case QUESTION_ANSWERED:
      const { qid, answer, authedUser } = payload;
      return {
        ...state,
        [authedUser]: {
          ...state[authedUser],
          answers: {
            ...state[authedUser].answers,
            [qid]: answer
          }
        }
      }
    default:
      return state;
  }
};

export default users;